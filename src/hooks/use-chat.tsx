import { useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import axios from "@/utils/axios";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface Chat {
  messages: Message[];
  title: string;
}

export type Chats = Record<string, Chat>;

interface State {
  chats: Chats;
  isLoading: boolean;
  selectedChat: string;
}

type Action =
  | {
      type: "add-user-message";
      payload: {
        chatId: string;
        message: string;
      };
    }
  | {
      type: "update-assistant-response";
      payload: {
        chatId: string;
        chatToUpdate: Chat;
      };
    }
  | {
      type: "update-assistant-error";
      payload: any;
    };

function chatReducer(state: State, action: Action): State {
  switch (action.type) {
    case "update-assistant-response":
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.chatId]: action.payload.chatToUpdate,
        },
        isLoading: false,
      };

    case "update-assistant-error":
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.chatId]: {
            ...state.chats[action.payload.chatId],
            messages: [
              ...(state.chats[action.payload.chatId]?.messages || []),
              {
                role: "assistant",
                content:
                  "Ocorreu um ero ao comunicar com o servirodr, por favor verifique sua chave e tente novamente.",
              },
            ],
          },
        },
        isLoading: true,
      };

    case "add-user-message":
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.chatId]: {
            ...state.chats[action.payload.chatId],
            messages: [
              ...(state.chats[action.payload.chatId]?.messages || []),
              { role: "user", content: action.payload.message },
            ],
          },
        },
        isLoading: true,
      };
  }
}

function generateInitialState(): State {
  const chatsFromLocalStorage = JSON.parse(
    localStorage.getItem("chats") || "{}"
  );

  const id = uuid();
  return {
    chats: {
      [id]: { title: "Nova conversa", messages: [] },
      ...chatsFromLocalStorage,
    },
    isLoading: false,
    selectedChat: id,
  };
}

export const useChat = (openAikey: string) => {
  const [state, dispatch] = useReducer(chatReducer, {}, generateInitialState);

  const addUserMessage = (chatId: string, message: string) => {
    dispatch({ type: "add-user-message", payload: { chatId, message } });
  };

  const selecteChatMessageCount =
    state.chats[state.selectedChat].messages.length;

  const lastMessageSender =
    state.chats[state.selectedChat].messages[selecteChatMessageCount - 1]?.role;

  useEffect(() => {
    const getOpenAiResponse = async () => {
      try {
        const { data: chat } = await axios.post("/api/bot", {
          key: openAikey,
          chat: state.chats[state.selectedChat],
        });
        dispatch({
          type: "update-assistant-response",
          payload: {
            chatId: state.selectedChat,
            chatToUpdate: chat,
          },
        });
      } catch (error) {
        dispatch({
          type: "update-assistant-error",
          payload: { chatid: state.chats[state.selectedChat] },
        });
      }
    };

    if (
      !!openAikey &&
      selecteChatMessageCount > 0 &&
      lastMessageSender === "user"
    ) {
      getOpenAiResponse();
    }
  }, [
    openAikey,
    selecteChatMessageCount,
    lastMessageSender,
    state.chats,
    state.selectedChat,
  ]);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(state.chats));
  }, [state.chats]);

  return {
    chats: state.chats,
    isLoading: state.isLoading,
    selectedChat: state.selectedChat,
    addUserMessage,
  };
};
