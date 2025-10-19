function Overview() {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Overview</h2>
        <select className="bg-[#0d1117] border border-[#30363d] text-[#8b949e] text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#58a6ff]">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>This Month</option>
          <option>All Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Projects */}
        <div className="bg-gradient-to-br from-[#0d1117] to-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#58a6ff] transition-all hover:shadow-lg hover:shadow-[#58a6ff]/10 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#58a6ff] bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-[#58a6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div className="px-2 py-1 bg-[#58a6ff] bg-opacity-10 rounded-full">
              <span className="text-[#58a6ff] text-xs font-medium">+16%</span>
            </div>
          </div>
          <p className="text-[#8b949e] text-sm font-medium mb-1">Total Projects</p>
          <p className="text-white text-3xl font-bold mb-2">12</p>
          <div className="flex items-center gap-1 text-xs text-[#8b949e]">
            <svg className="w-3 h-3 text-[#58a6ff]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            <span>+2 from last month</span>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-gradient-to-br from-[#0d1117] to-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#22c55e] transition-all hover:shadow-lg hover:shadow-[#22c55e]/10 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#22c55e] bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="px-2 py-1 bg-[#22c55e] bg-opacity-10 rounded-full">
              <span className="text-[#22c55e] text-xs font-medium">75%</span>
            </div>
          </div>
          <p className="text-[#8b949e] text-sm font-medium mb-1">Completed</p>
          <p className="text-white text-3xl font-bold mb-2">9</p>
          <div className="w-full bg-[#30363d] rounded-full h-1.5 mb-2">
            <div className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] h-1.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-xs text-[#8b949e]">Success rate: 75%</p>
        </div>

        {/* In Progress */}
        <div className="bg-gradient-to-br from-[#0d1117] to-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#fbbf24] transition-all hover:shadow-lg hover:shadow-[#fbbf24]/10 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#fbbf24] opacity-5 rounded-full -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#fbbf24] bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform relative">
              <svg className="w-6 h-6 text-[#fbbf24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="px-2 py-1 bg-[#fbbf24] bg-opacity-10 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full animate-pulse"></span>
              <span className="text-[#fbbf24] text-xs font-medium">Active</span>
            </div>
          </div>
          <p className="text-[#8b949e] text-sm font-medium mb-1">In Progress</p>
          <p className="text-white text-3xl font-bold mb-2">2</p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#fbbf24] bg-opacity-30 border-2 border-[#161b22] flex items-center justify-center text-[#fbbf24] text-xs font-bold">1</div>
              <div className="w-6 h-6 rounded-full bg-[#fbbf24] bg-opacity-30 border-2 border-[#161b22] flex items-center justify-center text-[#fbbf24] text-xs font-bold">2</div>
            </div>
            <span className="text-xs text-[#8b949e]">Currently generating</span>
          </div>
        </div>

        {/* Downloads */}
        <div className="bg-gradient-to-br from-[#0d1117] to-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#a78bfa] transition-all hover:shadow-lg hover:shadow-[#a78bfa]/10 group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#a78bfa] bg-opacity-20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </div>
            <div className="px-2 py-1 bg-[#a78bfa] bg-opacity-10 rounded-full">
              <span className="text-[#a78bfa] text-xs font-medium">+12</span>
            </div>
          </div>
          <p className="text-[#8b949e] text-sm font-medium mb-1">Total Downloads</p>
          <p className="text-white text-3xl font-bold mb-2">28</p>
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1 text-[#a78bfa]">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">233 MB</span>
            </div>
            <span className="text-[#8b949e]">this month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;