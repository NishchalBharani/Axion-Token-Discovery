"use client";

import { useState } from "react";
import { Menu, X, Search, Wallet, Bell, Settings } from "lucide-react";
import NavLinks from "./NavLinks";
import ChainSelector from "./ChainSelector";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-14 bg-black border-b border-white/10 z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg" />
                <span className="text-white font-bold text-xl tracking-tight">
                  AXIOM
                  <span className="text-gray-500 text-xs ml-1 align-bottom">pro</span>
                </span>
              </div>
              <div className="hidden lg:block">
                <NavLinks />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 text-gray-400 text-sm">
                <Search className="w-4 h-4" />
                <span>Search by token or CA...</span>
                <kbd className="ml-4 text-xs bg-white/10 px-1.5 py-0.5 rounded">/</kbd>
              </div>

              <ChainSelector />

              <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
                Deposit
              </button>

              <div className="hidden lg:flex items-center gap-3">
                <button className="p-2 hover:bg-white/10 rounded-full">
                  <Wallet className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full relative">
                  <Bell className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full">
                  <Settings className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-medium flex items-center justify-center">
                  99+
                </button>
                <button className="w-8 h-8 bg-gray-700 rounded-full" />
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-14 left-0 w-full bg-black border-b border-white/10 py-6 px-6 space-y-6">
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 text-gray-400 text-sm">
              <Search className="w-4 h-4" />
              <span>Search by token or CA...</span>
              <kbd className="ml-4 text-xs bg-white/10 px-1.5 py-0.5 rounded">/</kbd>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-full transition-colors">
              Deposit
            </button>

            <div className="flex items-center gap-3 justify-center">
              <button className="p-2 hover:bg-white/10 rounded-full">
                <Wallet className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full relative">
                <Bell className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full">
                <Settings className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-medium flex items-center justify-center">
                99+
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded-full" />
            </div>

            <div className="flex flex-col gap-4">
              <NavLinks mobile />
            </div>
          </div>
        )}
      </nav>

      <div className="h-14" />
    </>
  );
}