import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import type { Token } from "@/types/token";
import TokenRow from "./TokenRow";

export default function TokenTable({
  label,
  tokens,
}: {
  label: string;
  tokens: Token[];
}) {
  const { sortKey, sortOrder } = useSelector(
    (state: RootState) =>
      state.ui.globalSort || {
        sortKey: "marketCap" as const,
        sortOrder: "desc" as const,
      }
  );

  const sortedTokens = [...tokens].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    if (valueA == null) return 1;
    if (valueB == null) return -1;
    if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
    if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="flex flex-col h-[calc(100vh-112px)] sm:h-[calc(100vh-160px)] md:h-[calc(100vh-180px)] border border-white/10 rounded-lg bg-white/[0.03] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02] flex-shrink-0">
        <span className="text-sm font-medium text-white truncate">
          {label}
        </span>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="px-2 py-1 rounded bg-white/5">
            {sortedTokens.length}
          </span>
          <span className="hidden xs:inline text-gray-400">P1</span>
          <span className="hidden xs:inline text-gray-500">P2</span>
          <span className="hidden xs:inline text-gray-500">P3</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden scrollbar-thumb-white/10 scrollbar-track-transparent">
        {sortedTokens.length === 0 ? (
          <div className="p-8 text-center text-gray-500 text-sm">
            No tokens found
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {sortedTokens.map((token) => (
              <TokenRow key={token.id} token={token} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}