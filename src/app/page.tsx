"use client";
import { Messages } from "@/components/multiple-messages";
import { useStreamMessages } from "@/actions/stream-messages";

export default function DefaultPage() {
  const messages = useStreamMessages("http://localhost:3000/stream-messages");

  console.log("messages: ", messages);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Messages</h2>
        <Messages messages={messages} />
      </div>
    </main>
  );
}
