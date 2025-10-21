import { useState } from 'react';

function Preferences() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [ipWhitelist, setIpWhitelist] = useState(['192.168.1.1', '10.0.0.5']);
  const [newIp, setNewIp] = useState('');
  const [emailNotifications, setEmailNotifications] = useState({
    projectComplete: true,
    projectFailed: true,
    apiLimitReached: false,
    weeklyReport: true
  });
  const [autoDeleteProjects, setAutoDeleteProjects] = useState('30');
  const [defaultPlatform, setDefaultPlatform] = useState('android');

  const addIp = () => {
    if (newIp && !ipWhitelist.includes(newIp)) {
      setIpWhitelist([...ipWhitelist, newIp]);
      setNewIp('');
    }
  };

  const removeIp = (ip) => {
    setIpWhitelist(ipWhitelist.filter(i => i !== ip));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Preferences</h1>
        <p className="text-[#8b949e] text-sm mt-1">Configure your account security and preferences</p>
      </div>

      {/* Security Settings */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h2 className="text-white font-semibold mb-4">Security</h2>
        
        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between py-3 border-b border-[#30363d]">
          <div>
            <h3 className="text-white font-medium">Two-Factor Authentication</h3>
            <p className="text-[#8b949e] text-sm mt-1">Add an extra layer of security to your account</p>
          </div>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              twoFactorEnabled ? 'bg-[#238636]' : 'bg-[#30363d]'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>

        {/* Session Timeout */}
        <div className="flex items-center justify-between py-3">
          <div>
            <h3 className="text-white font-medium">Session Timeout</h3>
            <p className="text-[#8b949e] text-sm mt-1">Auto logout after inactivity</p>
          </div>
          <select className="bg-[#0d1117] border border-[#30363d] text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-[#58a6ff]">
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="120">2 hours</option>
            <option value="0">Never</option>
          </select>
        </div>
      </div>

      {/* API Security */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h2 className="text-white font-semibold mb-4">API Security</h2>
        
        {/* IP Whitelist */}
        <div className="mb-4">
          <h3 className="text-white font-medium mb-2">IP Whitelist</h3>
          <p className="text-[#8b949e] text-sm mb-3">Only these IPs can use your API keys</p>
          
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newIp}
              onChange={(e) => setNewIp(e.target.value)}
              placeholder="Enter IP address (e.g., 192.168.1.1)"
              className="flex-1 bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
            />
            <button onClick={addIp} className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium text-sm">
              Add IP
            </button>
          </div>

          <div className="space-y-2">
            {ipWhitelist.map((ip) => (
              <div key={ip} className="flex items-center justify-between p-3 bg-[#0d1117] border border-[#30363d] rounded-lg">
                <code className="text-[#8b949e] text-sm font-mono">{ip}</code>
                <button onClick={() => removeIp(ip)} className="text-[#ef4444] hover:text-[#dc2626] text-sm">
                  Remove
                </button>
              </div>
            ))}
            {ipWhitelist.length === 0 && (
              <p className="text-[#8b949e] text-sm text-center py-4">No IP addresses whitelisted. All IPs are allowed.</p>
            )}
          </div>
        </div>

        {/* Rate Limiting */}
        <div className="pt-4 border-t border-[#30363d]">
          <h3 className="text-white font-medium mb-2">Rate Limiting</h3>
          <p className="text-[#8b949e] text-sm mb-3">Maximum API requests per hour</p>
          <select className="bg-[#0d1117] border border-[#30363d] text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-[#58a6ff]">
            <option value="100">100 requests/hour</option>
            <option value="500">500 requests/hour</option>
            <option value="1000">1,000 requests/hour</option>
            <option value="5000">5,000 requests/hour</option>
            <option value="0">Unlimited</option>
          </select>
        </div>
      </div>

      {/* Email Notifications */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h2 className="text-white font-semibold mb-4">Email Notifications</h2>
        
        <div className="space-y-3">
          {Object.entries({
            projectComplete: 'Project generation completed',
            projectFailed: 'Project generation failed',
            apiLimitReached: 'API usage limit reached',
            weeklyReport: 'Weekly usage report'
          }).map(([key, label]) => (
            <div key={key} className="flex items-center justify-between py-2">
              <span className="text-white text-sm">{label}</span>
              <button
                onClick={() => setEmailNotifications({...emailNotifications, [key]: !emailNotifications[key]})}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  emailNotifications[key] ? 'bg-[#238636]' : 'bg-[#30363d]'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  emailNotifications[key] ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Project Preferences */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h2 className="text-white font-semibold mb-4">Project Preferences</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Default Platform</label>
            <select value={defaultPlatform} onChange={(e) => setDefaultPlatform(e.target.value)} className="w-full bg-[#0d1117] border border-[#30363d] text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-[#58a6ff]">
              <option value="android">Android</option>
              <option value="ios">iOS</option>
              <option value="web">Web App</option>
              <option value="desktop">Desktop App</option>
              <option value="ui">UI/UX Template</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Auto-Delete Completed Projects</label>
            <select value={autoDeleteProjects} onChange={(e) => setAutoDeleteProjects(e.target.value)} className="w-full bg-[#0d1117] border border-[#30363d] text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-[#58a6ff]">
              <option value="0">Never</option>
              <option value="7">After 7 days</option>
              <option value="30">After 30 days</option>
              <option value="90">After 90 days</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium">
          Save Preferences
        </button>
      </div>
    </div>
  );
}

export default Preferences;