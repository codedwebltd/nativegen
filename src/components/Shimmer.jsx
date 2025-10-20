// Base Shimmer Effect
export function ShimmerBox({ className = "" }) {
  return (
    <div className={`animate-pulse bg-[#21262d] rounded ${className}`}></div>
  );
}

// Overview Section Shimmer
export function OverviewShimmer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <ShimmerBox className="h-4 w-24 mb-3" />
          <ShimmerBox className="h-8 w-32 mb-2" />
          <ShimmerBox className="h-3 w-20" />
        </div>
      ))}
    </div>
  );
}

// Referral Section Shimmer
export function ReferralShimmer() {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <ShimmerBox className="h-6 w-40 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <ShimmerBox className="h-4 w-32 mb-2" />
            <ShimmerBox className="h-8 w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Balance Section Shimmer
export function BalanceShimmer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <ShimmerBox className="h-6 w-32 mb-4" />
        <ShimmerBox className="h-10 w-40 mb-4" />
        <ShimmerBox className="h-10 w-full" />
      </div>
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <ShimmerBox className="h-6 w-40 mb-4" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between">
              <ShimmerBox className="h-4 w-32" />
              <ShimmerBox className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Projects List Shimmer
export function ProjectsShimmer() {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <ShimmerBox className="h-6 w-32" />
        <ShimmerBox className="h-10 w-24" />
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-[#0d1117] rounded-lg">
            <div className="flex items-center gap-4">
              <ShimmerBox className="h-12 w-12 rounded" />
              <div>
                <ShimmerBox className="h-4 w-40 mb-2" />
                <ShimmerBox className="h-3 w-32" />
              </div>
            </div>
            <ShimmerBox className="h-8 w-20 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Full Dashboard Content Shimmer - REUSE THIS EVERYWHERE!
export function DashboardShimmer() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <OverviewShimmer />
      <ReferralShimmer />
      <BalanceShimmer />
      <ProjectsShimmer />
    </div>
  );
}