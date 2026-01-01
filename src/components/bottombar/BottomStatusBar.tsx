"use client";

import {
  Wallet,
  Twitter,
  Compass,
  HeartPulse,
  Settings,
  Maximize2,
  Volume2,
} from "lucide-react";

export default function BottomStatusBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-black border-t border-white/10 z-50 flex items-center px-3 sm:px-4 text-xs">
      <div className="hidden sm:flex items-center gap-4 text-gray-400">
        <span className="text-cyan-400 font-medium">PRESET 1</span>
        <div className="flex items-center gap-3">
          <span>1</span>
          <span>0</span>
          <Volume2 className="w-4 h-4" />
        </div>
      </div>

      <div className="flex sm:hidden items-center">
        <span className="text-cyan-400 font-medium text-xs">PRESET 1</span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm mx-auto">
        <span className="flex items-center gap-1.5">
          <Wallet className="w-4 h-4 text-gray-400" />
          <span className="text-white">Wallet</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Twitter className="w-4 h-4 text-gray-400" />
          <span className="text-white">Twitter</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-gray-400" />
          <span className="text-white">Discovery</span>
        </span>
        <span className="flex items-center gap-1.5 text-white">
          <HeartPulse className="w-4 h-4" />
          <span>Pulse</span>
        </span>
      </div>

      <div className="flex md:hidden items-center mx-auto">
        <span className="flex items-center gap-1.5 text-white text-sm">
          <HeartPulse className="w-5 h-5" />
          <span>Pulse</span>
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 text-gray-400 ml-auto">
        <span className="hidden sm:inline text-white">$7.59K</span>

        <span className="flex items-center gap-1.5 text-xs">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="hidden xs:inline text-green-400">Connection stable</span>
          <span className="xs:hidden text-green-400">Stable</span>
        </span>

        <button className="hidden sm:flex px-3 py-1.5 border border-white/10 rounded-md text-white hover:bg-white/5 transition text-xs">
          GLOBAL ▼
        </button>
        <button className="sm:hidden px-2 py-1 border border-white/10 rounded text-white text-[10px] hover:bg-white/5">
          G ▼
        </button>

        <button className="p-1.5 hover:text-white transition">
          <Settings className="w-4 h-4" />
        </button>
        <button className="p-1.5 hover:text-white transition">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}