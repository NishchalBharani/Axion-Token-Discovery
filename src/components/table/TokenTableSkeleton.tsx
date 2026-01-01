import TokenRowSkeleton from "./TokenRowSkeleton";

export default function TokenTableSkeleton({ label }: { label: string }) {
  return (
    <div className="flex flex-col min-h-0 border border-white/10 rounded bg-white/5 overflow-hidden">
      <div className="p-3 bg-white/5 border-b border-white/10 text-sm font-semibold uppercase tracking-wide">
        {label}
      </div>

      <div className="flex-1 overflow-y-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <TokenRowSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
