import { memo, useState, useEffect, useRef } from "react";
import type { Token } from "@/types/token";
import { TrendingUp, TrendingDown, Search, Twitter, Heart, Users, Zap } from "lucide-react";
import { Tooltip } from "@/components/ui/Tooltip";
import TokenDetailsModal from "./TokenDetailsModal";
import { Popover } from "@/components/ui/Popover";

function TokenRow({ token }: { token: Token }) {
  const [open, setOpen] = useState(false);
  const isUp = token.change24h >= 0;
  const prevPrice = useRef(token.price);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (token.price !== prevPrice.current) {
      setFlash(token.price > prevPrice.current ? "up" : "down");
      prevPrice.current = token.price;
      const t = setTimeout(() => setFlash(null), 300);
      return () => clearTimeout(t);
    }
  }, [token.price]);

  const stats = Object.values(token.stats);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={`
          relative cursor-pointer px-3 py-2.5 border-b border-white/10 last:border-b-0
          transition-all duration-200 group
          ${flash === "up" ? "bg-green-900/20" : flash === "down" ? "bg-red-900/20" : ""}
          hover:bg-white/5
        `}
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src={token.image}
              alt={token.name}
              className="w-10 h-10 rounded-lg flex-shrink-0 object-cover"
            />
            <div className="min-w-0">
              <div className="text-white font-semibold text-sm truncate">
                {token.name}
              </div>
              <div className="text-gray-400 text-xs flex items-center gap-2">
                <span className="truncate">${token.symbol}</span>
                <span>•</span>
                <span>18s</span>
                <Search className="w-3 h-3" />
                <Twitter className="w-3 h-3" />
                <span>↑ 0</span>
                <span>↓ 0</span>
                <span>0/1</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-green-400 text-sm font-mono">
              MC ${token.marketCap.toLocaleString(undefined, { minimumFractionDigits: token.marketCap < 10000 ? 0 : 0 })}
            </div>
            <div className="text-cyan-400 text-xs">
              V $6K MC $23.6K
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-1.5">
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 text-xs">68%</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400 text-xs">40s</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 text-xs">68%</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-600" />
              <span className="text-gray-400 text-xs">0%</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-600" />
              <span className="text-gray-400 text-xs">0%</span>
            </div>
          </div>
          <Popover
            trigger={
              <div className="text-gray-500 text-xs truncate max-w-[120px] cursor-pointer hover:text-gray-300 transition-colors">
                43pW...NZp
              </div>
            }
          >
            <div className="w-[300px] max-w-[90vw] space-y-3 p-4">
              <div className="text-xs text-gray-400">Contract Address</div>
              <div className="text-sm font-mono text-white break-all">
                43pWn3JfQkL9YxR7NZpA2BvC8dE1KX...
              </div>
            </div>
          </Popover>
        </div>

        <div className="flex items-center justify-between">
          <Tooltip content="24h price change">
            <div className={`flex items-center gap-1 text-xs ${isUp ? "text-green-400" : "text-red-400"}`}>
              {isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              {Math.abs(token.change24h).toFixed(2)}%
            </div>
          </Tooltip>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-gray-400">
              F={token.fdv.toFixed(2)} TX {token.txCount}
            </span>
            <button className="flex items-center gap-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 px-3 py-1.5 rounded-full transition-colors">
              <Zap className="w-4 h-4" />
              SOL
            </button>
          </div>
        </div>
      </div>

      <TokenDetailsModal token={token} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default memo(TokenRow);