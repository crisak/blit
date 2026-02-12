export default function ArtworkGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-800/50 rounded-lg overflow-hidden animate-pulse"
        >
          {/* Image skeleton */}
          <div className="aspect-[4/3] bg-gray-700/50" />

          {/* Content skeleton */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <div className="h-5 bg-gray-700/50 rounded w-3/4" />

            {/* Info badges */}
            <div className="flex gap-2">
              <div className="h-6 bg-gray-700/50 rounded w-20" />
              <div className="h-6 bg-gray-700/50 rounded w-16" />
            </div>

            {/* Location */}
            <div className="h-4 bg-gray-700/50 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}
