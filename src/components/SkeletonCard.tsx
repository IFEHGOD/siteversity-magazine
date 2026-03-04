export default function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="skeleton-shimmer h-52 rounded-lg" />
      <div className="mt-4 space-y-3">
        <div className="skeleton-shimmer h-3 w-20 rounded" />
        <div className="skeleton-shimmer h-5 w-full rounded" />
        <div className="skeleton-shimmer h-5 w-3/4 rounded" />
        <div className="skeleton-shimmer h-3 w-full rounded" />
        <div className="flex items-center gap-3">
          <div className="skeleton-shimmer h-6 w-6 rounded-full" />
          <div className="skeleton-shimmer h-3 w-24 rounded" />
        </div>
      </div>
    </div>
  );
}
