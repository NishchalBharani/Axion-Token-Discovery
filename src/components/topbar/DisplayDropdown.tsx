"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { setGlobalSort } from "@/store/uiSlice";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const options = [
  { key: "marketCap", label: "Market Cap" },
  { key: "price", label: "Price" },
  { key: "change24h", label: "24h Change" },
] as const;

export default function DisplayDropdown() {
  const dispatch = useDispatch();
  const { sortKey } = useSelector(
    (state: RootState) => state.ui.globalSort
  );
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-2 py-[6px] text-sm border border-white/10 rounded hover:bg-white/5 text-white"
      >
        Sort
        <ChevronDown className="w-3 h-3 text-gray-400" />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-36 bg-black border border-white/10 rounded z-50">
          {options.map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                dispatch(setGlobalSort(opt.key));
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-white/5 ${sortKey === opt.key
                ? "text-white"
                : "text-gray-400"
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
