import { useState } from 'react';

function Usage() {
  const [period, setPeriod] = useState('month');

  const usageStats = {
    projects: { current: 18, limit: 50, percentage: 36 },
    apiCalls: { current: 12450, limit: 50000, percentage: 25 },
    storage: { current: 2.4, limit: 10, percentage: 24, unit: 'GB' },
  };

  const recentActivity = [
    { id: 1, action: 'Project Generated', name: 'FitnessTracker', cost: 5, date: 'Oct 19, 2024 - 3:24 PM' },
    { id: 2, action: 'API Call', name: 'GET /projects/all', cost: 0.1, date: 'Oct 19, 2024 - 2:15 PM' },
    { id: 3, action: 'Project Generated', name: 'MusicPlayer', cost: 5, date: 'Oct 18, 2024 - 11:30 AM' },
    { id: 4, action: 'Storage Upload', name: 'Assets Bundle', cost: 0.5, date: 'Oct 18, 2024 - 10:20 AM' },
    { id: 5, action: 'API Call', name: 'POST /generate', cost: 0.2, date: 'Oct 17, 2024 - 4:45 PM' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Usage & Billing</h1>
          <p className="text-[#8b949e] text-sm mt-1">Track your resource consumption and costs</p>
        </div>
        <select value={period} onChange={(e) => setPeriod(e.target.value)} className="bg-[#161b22] border border-[#30363d] text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-[#58a6ff]">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#8b949e] text-sm">Projects Generated</span>
            <svg className="w-5 h-5 text-[#58a6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-white text-3xl font-bold">{usageStats.projects.current}</span>
            <span className="text-[#8b949e] text-sm">/ {usageStats.projects.limit}</span>
          </div>
          <div className="h-2 bg-[#30363d] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#58a6ff] to-[#79c0ff]" style={{ width: `${usageStats.projects.percentage}%` }}></div>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#8b949e] text-sm">API Calls</span>
            <svg className="w-5 h-5 text-[#fbbf24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-white text-3xl font-bold">{usageStats.apiCalls.current.toLocaleString()}</span>
            <span className="text-[#8b949e] text-sm">/ {usageStats.apiCalls.limit.toLocaleString()}</span>
          </div>
          <div className="h-2 bg-[#30363d] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]" style={{ width: `${usageStats.apiCalls.percentage}%` }}></div>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#8b949e] text-sm">Storage Used</span>
            <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
            </svg>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-white text-3xl font-bold">{usageStats.storage.current}</span>
            <span className="text-[#8b949e] text-sm">/ {usageStats.storage.limit} {usageStats.storage.unit}</span>
          </div>
          <div className="h-2 bg-[#30363d] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#22c55e] to-[#16a34a]" style={{ width: `${usageStats.storage.percentage}%` }}></div>
          </div>
        </div>
      </div>

      {/* Current Plan */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white font-semibold mb-1">Current Plan</h2>
            <p className="text-[#8b949e] text-sm">Professional Plan - $49/month</p>
          </div>
          <button className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium text-sm">
            Upgrade
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-[#30363d]">
          <h2 className="text-white font-semibold">Recent Activity</h2>
        </div>
        <div className="divide-y divide-[#30363d] max-h-[400px] overflow-y-auto">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-[#0d1117] transition">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium text-sm">{activity.action}</span>
                    <span className="text-[#8b949e] text-xs">•</span>
                    <span className="text-[#8b949e] text-xs">{activity.name}</span>
                  </div>
                  <p className="text-[#8b949e] text-xs">{activity.date}</p>
                </div>
                <div className="text-right">
                  <span className="text-white font-semibold">${activity.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Usage;