import { useState } from 'react';

function APIKeys() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Production API', key: 'sk_live_abc123...xyz789', created: 'Oct 15, 2024', lastUsed: '2 hours ago' },
    { id: 2, name: 'Development API', key: 'sk_test_def456...uvw012', created: 'Oct 10, 2024', lastUsed: '1 day ago' },
    { id: 3, name: 'Mobile App', key: 'sk_live_ghi789...rst345', created: 'Oct 5, 2024', lastUsed: '5 days ago' },
  ]);

  const copyToClipboard = (key) => {
    navigator.clipboard.writeText(key);
    alert('API Key copied to clipboard!');
  };

  const deleteKey = (id) => {
    if (window.confirm('Are you sure you want to delete this API key?')) {
      setApiKeys(apiKeys.filter(k => k.id !== id));
    }
  };

  const createKey = () => {
    if (!newKeyName) return;
    const newKey = {
      id: Date.now(),
      name: newKeyName,
      key: `sk_live_${Math.random().toString(36).substring(2)}...${Math.random().toString(36).substring(2)}`,
      created: 'Just now',
      lastUsed: 'Never'
    };
    setApiKeys([newKey, ...apiKeys]);
    setNewKeyName('');
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">API Keys</h1>
          <p className="text-[#8b949e] text-sm mt-1">Manage your API keys for integration</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Create New Key
        </button>
      </div>

      {/* API Keys List */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
        <div className="divide-y divide-[#30363d]">
          {apiKeys.map((apiKey) => (
            <div key={apiKey.id} className="p-4 hover:bg-[#0d1117] transition">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold">{apiKey.name}</h3>
                    <span className="px-2 py-0.5 bg-[#238636] bg-opacity-10 text-[#238636] text-xs rounded-full border border-[#238636] border-opacity-20">Active</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <code className="text-[#8b949e] text-sm font-mono bg-[#0d1117] px-3 py-1.5 rounded border border-[#30363d]">{apiKey.key}</code>
                    <button onClick={() => copyToClipboard(apiKey.key)} className="p-1.5 hover:bg-[#21262d] rounded transition">
                      <svg className="w-4 h-4 text-[#8b949e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#8b949e]">
                    <span>Created: {apiKey.created}</span>
                    <span>•</span>
                    <span>Last used: {apiKey.lastUsed}</span>
                  </div>
                </div>

                <button onClick={() => deleteKey(apiKey.id)} className="px-3 py-1.5 border border-[#30363d] hover:border-[#ef4444] hover:text-[#ef4444] text-[#c9d1d9] rounded text-xs transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h2 className="text-white font-semibold mb-3">How to use API Keys</h2>
        <div className="space-y-2 text-sm text-[#8b949e]">
          <p>• Include your API key in the Authorization header of your requests</p>
          <p>• Keep your keys secure and never share them publicly</p>
          <p>• Rotate keys regularly for better security</p>
          <p>• Use different keys for production and development environments</p>
        </div>
      </div>

      {/* Create Key Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 max-w-md w-full">
            <h2 className="text-white font-semibold mb-4">Create New API Key</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[#8b949e] text-sm mb-2">Key Name</label>
                <input
                  type="text"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="e.g., Production API"
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
                />
              </div>
              <div className="flex gap-2">
                <button onClick={createKey} className="flex-1 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium text-sm">
                  Create Key
                </button>
                <button onClick={() => setShowCreateModal(false)} className="flex-1 px-4 py-2 border border-[#30363d] hover:border-[#58a6ff] text-white rounded-lg font-medium text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default APIKeys;