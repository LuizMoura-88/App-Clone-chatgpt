"use client";

import { ReactElement, useEffect, useState } from "react";
import { KeyInstructions } from "./_components/key-instructions";
import { ChatInput } from "./_components/chat-input";
import { Sidebar } from "./_components/sidevar";
import { ChatMessages } from "./_components/chat-messages";
import { useChat } from "@/hooks/use-chat";

function Home(): ReactElement {
  const [openAiKey, setOpenAiKey] = useState<string>("");
  const {
    chats,
    isLoading,
    selectedChat,
    addUserMessage,
    selectChat,
    deleteChat,
  } = useChat(openAiKey);

  const placeholder = !!openAiKey
    ? "😁 Digite um OI"
    : "🔑 Digite sua chave de API";

  const handleSumitMessage = (message: string) => {
    addUserMessage(selectedChat, message);
  };

  const handleChatSubmit = !!openAiKey ? handleSumitMessage : setOpenAiKey;

  return (
    <div className="flex">
      <Sidebar
        isVisible={!!openAiKey}
        selectedChat={selectedChat}
        deleteChat={deleteChat}
        selectChat={selectChat}
        chats={chats}
      />

      <main className="w-full h-screen  flex flex-col justify-between">
        <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center mt-10">
          CloneGPT
        </h1>
        {!!openAiKey ? (
          <ChatMessages
            messages={chats[selectedChat].messages}
            isLoading={isLoading}
          />
        ) : (
          <KeyInstructions />
        )}
        <ChatInput
          onSubmitMessage={handleChatSubmit}
          placeholder={placeholder}
        />
      </main>
    </div>
  );
}

export default Home;
