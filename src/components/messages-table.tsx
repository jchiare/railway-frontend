"use client";
import Image from "next/image";
import Link from "next/link";
import { useStreamMessages } from "@/actions/stream-messages";
import { BACKEND_URL } from "@/utils";

function inThreadCss(state: boolean) {
  return state
    ? "text-green-400 bg-green-400/10"
    : "text-rose-400 bg-rose-400/10";
}

function truncateSummary(summary: string | null, truncateLength = 75): string {
  if (!summary) return "";
  return summary.length > truncateLength
    ? `${summary.slice(0, truncateLength)}...`
    : summary;
}

export function Messages() {
  const messages = useStreamMessages(`${BACKEND_URL}/stream-messages`);

  return (
    <div className="bg-gray-900 w-full py-10">
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-2/12" />
          <col className="w-6/12" />
          <col className="w-1/12" />
          <col className="w-1/12" />
          <col className="w-1/12" />
          <col className="w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 text-white">
          <tr>
            <th scope="col" className="py-2 pl-4 pr-8 font-semibold ">
              User
            </th>
            <th scope="col" className="py-2 pl-0 pr-8 font-semibold ">
              Content
            </th>
            <th scope="col" className="py-2 pl-0 pr-4 font-semibold">
              Category
            </th>
            <th scope="col" className="py-2 pl-0 pr-4 font-semibold">
              Source
            </th>
            <th scope="col" className=" py-2 pl-0 pr-8 font-semibold">
              In Thread
            </th>
            <th scope="col" className=" py-2 pl-0 pr-4 font-semibold ">
              Created at
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {messages.map(message => (
            <tr key={message.author + message.content}>
              <td className="py-4 pl-4 pr-8">
                <div className="flex items-center gap-x-4">
                  <Image
                    src={message.userAvatar || "/profile_picture_backup.png"}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full bg-gray-800"
                  />
                  <div className="truncate text-sm font-medium leading-6 text-white">
                    {message.author}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 ">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-white">
                    {truncateSummary(message.content)}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6">
                <div className="rounded-md bg-gray-700/40 px-2 py-1 w-fit text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                  {message.category}
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6">
                <Link
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-900 pl-2"
                  href={message.linkToMessage}>
                  Link <span className="sr-only">View Source</span>
                </Link>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 text-center">
                <div className="flex items-center gap-x-2 justify-start">
                  <div
                    className={`${inThreadCss(message.inThread)}
                    flex-none rounded-full p-1
                  `}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="text-white">
                    {message.inThread ? "Yes" : "No"}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 text-gray-400">
                <time dateTime={message.createdAt}>
                  {new Date(message.createdAt).toLocaleString()}
                </time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
