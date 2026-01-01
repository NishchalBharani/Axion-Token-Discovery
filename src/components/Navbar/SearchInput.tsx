"use client";

import { Search } from "lucide-react";

export default function SearchInput({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={`${mobile
        ? "flex"
        : "hidden md:flex"
        } items-center bg-white/5 rounded-full px-4 py-1.5 gap-2 max-w-md w-96`}
    >
      <Search className="w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search by token or CA..."
        className="bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none flex-1"
      />
    </div>
  );
}
