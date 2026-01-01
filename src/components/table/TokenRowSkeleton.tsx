export default function TokenRowSkeleton() {
  return (
    <div className="p-3 border-b border-white/10">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-white/5 shimmer" />
          <div className="space-y-1">
            <div className="h-3 w-24 rounded bg-white/5 shimmer" />
            <div className="h-2 w-16 rounded bg-white/5 shimmer" />
          </div>
        </div>
        <div className="h-3 w-16 rounded bg-white/5 shimmer" />
      </div>

      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/5 shimmer"
            />
          ))}
        </div>
        <div className="h-3 w-12 rounded bg-white/5 shimmer" />
      </div>

      <div className="flex justify-between">
        <div className="h-3 w-14 rounded bg-white/5 shimmer" />
        <div className="h-3 w-20 rounded bg-white/5 shimmer" />
      </div>
    </div>
  );
}
