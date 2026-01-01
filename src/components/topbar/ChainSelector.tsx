"use client";

import { ChevronDown } from "lucide-react";

export default function ChainSelector() {
  return (
    <button className="flex items-center gap-1 px-2 py-1 text-sm border border-white/10 rounded hover:bg-white/5">
      sol
      <ChevronDown className="w-3 h-3 text-gray-400" />
    </button>
  );
}
