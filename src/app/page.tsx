"use client";
import { ReactElement, useEffect, useState } from "react";
import { KeyInstructions } from "./_components/key-instructions";
import { ChatInput } from "./_components/chat-input";
import { Sidebar } from "./_components/sidevar";
import { ChatMessages, Message } from "./_components/chat-messages";

function Home(): ReactElement {
  const [openAiKey, setOpenAiKey] = useState<string>("");
  // useEffect(() => {
  //   alert(openAiKey);
  // }, [openAiKey]);

  const placeholder = !!openAiKey
    ? "😁 Digite um OI"
    : "🔑 Digite sua chave de API";

  const messages = [
    { role: "user", content: "# olá" },
    { role: "assistant", content: "olá. **como posso ajudar?**" },
  ] as Message[];

  return (
    <div className="flex">
      <Sidebar isVisible={!!openAiKey} />

      <main className="w-full h-screen  flex flex-col justify-between">
        <h1 className="text-3xl pb-5 lg:text-[45px] font-bold text-gray text-center mt-10">
          CloneGPT
        </h1>
        {!!openAiKey ? (
          <ChatMessages messages={messages} isLoading={false} />
        ) : (
          <KeyInstructions />
        )}
        <ChatInput onSubmitMessage={setOpenAiKey} placeholder={placeholder} />
      </main>
    </div>
  );
}

export default Home;
