import { ChevronDown } from "lucide-react";

export default function ChainSelector() {
  return (
    <button className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 text-sm font-medium transition-colors">
      <div className="w-5 h-5 bg-yellow-500 rounded-full" />
      <span className="text-white">BNB</span>
      <ChevronDown className="w-4 h-4 text-gray-400" />
    </button>
  );
}