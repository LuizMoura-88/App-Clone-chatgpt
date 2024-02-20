import { useReducer } from "react";
import { v4 as uuid } from "uuid";

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
      payload: any;
    }
  | {
      type: "update-assistant-error";
      payload: any;
    };

function chatReducer(state: State, action: Action): State {
  switch (action.type) {
    case "update-assistant-response":
      return state;

    case "update-assistant-error":
      return state;

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
  const id = uuid();
  return {
    chats: {
      [id]: { title: "Nova conversa", messages: [] },
    },
    isLoading: false,
    selectedChat: id,
  };
}

export const useChat = () => {
  const [state, dispatch] = useReducer(chatReducer, {}, generateInitialState);

  const addUserMessage = (chatId: string, message: string) => {
    dispatch({ type: "add-user-message", payload: { chatId, message } });
  };

  return {
    chats: state.chats,
    isLoading: state.isLoading,
    selectedChat: state.selectedChat,
    addUserMessage,
  };
};
