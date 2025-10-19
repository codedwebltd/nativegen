function ReferralSection() {
  const copyCode = () => {
    navigator.clipboard.writeText('NATIVE-JD2024');
    alert('Referral code copied!');
  };

  const copyLink = () => {
    navigator.clipboard.writeText('https://nativegen.io/ref/JD2024');
    alert('Referral link copied!');
  };

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Referral Program</h2>
        <span className="text-xs text-[#8b949e]">Earn 20% commission</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
          <label className="text-xs text-[#8b949e] mb-2 block">Your Referral Code</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 font-mono bg-[#161b22] border border-[#30363d] px-3 py-2 rounded text-[#58a6ff] text-sm">NATIVE-JD2024</code>
            <button onClick={copyCode} className="px-3 py-2 bg-[#238636] hover:bg-[#2ea043] rounded text-white text-sm">
              Copy
            </button>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
          <label className="text-xs text-[#8b949e] mb-2 block">Referral Link</label>
          <div className="flex items-center gap-2">
            <input type="text" readOnly value="https://nativegen.io/ref/JD2024" className="flex-1 font-mono bg-[#161b22] border border-[#30363d] px-3 py-2 rounded text-[#8b949e] text-xs" />
            <button onClick={copyLink} className="px-3 py-2 bg-[#238636] hover:bg-[#2ea043] rounded text-white text-sm">
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-center">
          <p className="text-[#8b949e] text-xs mb-1">Total Referrals</p>
          <p className="text-xl font-bold text-white">24</p>
        </div>
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-center">
          <p className="text-[#8b949e] text-xs mb-1">Active Users</p>
          <p className="text-xl font-bold text-[#22c55e]">18</p>
        </div>
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-center">
          <p className="text-[#8b949e] text-xs mb-1">Earnings</p>
          <p className="text-xl font-bold text-[#58a6ff]">$340</p>
        </div>
      </div>
    </div>
  );
}

export default ReferralSection;