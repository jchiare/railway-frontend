import { Messages } from "@/components/messages-table";

export default function DefaultPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 p-12">
      <h1 className="text-3xl font-bold leading-tight">Messages</h1>
      <Messages />
    </main>
  );
}
