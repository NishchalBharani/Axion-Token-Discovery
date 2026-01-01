"use client";

import { Filter, HeartPulse, Settings } from "lucide-react";
import { useState } from "react";
import ChainSelector from "./ChainSelector";
import DisplayDropdown from "./DisplayDropdown";

type TabKey = "new_pairs" | "final_stretch" | "migrated";

const tabs: { key: TabKey; label: string; badge?: number }[] = [
  { key: "new_pairs", label: "New Pairs" },
  { key: "final_stretch", label: "Final Stretch" },
  { key: "migrated", label: "M", badge: 12 },
];

interface TopBarProps {
  activeTab?: TabKey;
  onTabChange?: (tab: TabKey) => void;
}

export default function TopBar({ activeTab, onTabChange }: TopBarProps = {}) {
  const [internalTab, setInternalTab] = useState<TabKey>("new_pairs");
  const currentTab = activeTab ?? internalTab;
  const handleTabChange = onTabChange ?? setInternalTab;

  return (
    <>
      <div className="md:hidden fixed top-14 left-0 right-0 bg-black border-b border-white/10 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg blur-md" />
            </div>

            <div className="flex items-center gap-5 text-sm font-medium">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className="relative pb-2 transition-all"
                >
                  <span className={`flex items-center gap-1.5 ${currentTab === tab.key ? "text-white" : "text-gray-500"}`}>
                    {tab.label}
                    {tab.badge && (
                      <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded-full">
                        {tab.badge}
                      </span>
                    )}
                  </span>
                  {currentTab === tab.key && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-1">
              <Settings className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block fixed top-14 left-0 w-full h-[52px] bg-black border-b border-white/10 z-40">
        <div className="max-w-full h-full px-4 flex items-center gap-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="text-lg">Pulse</span>
            <ChainSelector />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <DisplayDropdown />
            <button className="p-2 hover:bg-white/5 rounded">
              <Filter className="w-4 h-4 text-gray-400" />
            </button>
            <div className="flex items-center gap-1 text-xs text-gray-500 ml-2">
              <button className="px-2 py-1 border border-white/10 rounded hover:text-white">
                PREV
              </button>
              <span className="px-2 py-1 bg-white/10 text-white rounded">
                1
              </span>
              <button className="px-2 py-1 border border-white/10 rounded hover:text-white">
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}