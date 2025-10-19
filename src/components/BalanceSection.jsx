function BalanceSection() {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Account Balance</h2>
        <button className="px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-medium">
          Add Credits
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-[#238636] to-[#2ea043] rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm font-medium">Available Credits</span>
            <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <p className="text-white text-4xl font-bold mb-1">$250.00</p>
          <p className="text-white text-xs opacity-80">Last updated: Today</p>
        </div>

        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#8b949e] text-sm font-medium">This Month Usage</span>
            <svg className="w-6 h-6 text-[#58a6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <p className="text-white text-4xl font-bold mb-1">$45.80</p>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex-1 bg-[#30363d] rounded-full h-2">
              <div className="bg-[#58a6ff] h-2 rounded-full" style={{ width: '18%' }}></div>
            </div>
            <span className="text-[#8b949e] text-xs">18%</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-white text-sm font-semibold mb-3">Recent Transactions</h3>
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          <div className="flex items-center justify-between p-3 bg-[#0d1117] border border-[#30363d] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#22c55e] bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Credits Added</p>
                <p className="text-[#8b949e] text-xs">Oct 15, 2024</p>
              </div>
            </div>
            <span className="text-[#22c55e] font-semibold">+$100.00</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-[#0d1117] border border-[#30363d] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ef4444] bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Project Generation</p>
                <p className="text-[#8b949e] text-xs">Oct 14, 2024</p>
              </div>
            </div>
            <span className="text-[#ef4444] font-semibold">-$15.00</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-[#0d1117] border border-[#30363d] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ef4444] bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">API Usage</p>
                <p className="text-[#8b949e] text-xs">Oct 12, 2024</p>
              </div>
            </div>
            <span className="text-[#ef4444] font-semibold">-$8.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceSection;