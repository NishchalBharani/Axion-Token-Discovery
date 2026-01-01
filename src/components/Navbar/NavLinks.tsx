"use client";

import { Compass, Zap, ChartBar, Gift } from "lucide-react";

const navLinks = [
  { label: "Discover", icon: Compass },
  { label: "Pulse", icon: Zap, active: true },
  { label: "Trackers", icon: ChartBar },
  { label: "Perpetuals" },
  { label: "Yield" },
  { label: "Vision" },
  { label: "Portfolio" },
  { label: "Rewards", icon: Gift },
];

export default function NavLinks({ mobile }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-4 text-lg">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href="#"
              className={`flex items-center gap-3 ${link.active ? "text-cyan-400" : "text-gray-400"
                }`}
            >
              {Icon && <Icon className="w-5 h-5" />}
              {link.label}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6 text-sm font-medium">
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href="#"
            className={`flex items-center gap-1.5 ${link.active
              ? "text-cyan-400"
              : "text-gray-400 hover:text-white"
              }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
