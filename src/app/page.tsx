"use client";
import { Messages } from "@/components/messages-table";
import { useStreamMessages } from "@/actions/stream-messages";

export default function DefaultPage() {
  const messages = useStreamMessages("http://localhost:3000/stream-messages");

  console.log(messages);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 p-12">
      <h1 className="text-3xl font-bold leading-tight">Messages</h1>
      <Messages messages={messages} />
    </main>
  );
}
