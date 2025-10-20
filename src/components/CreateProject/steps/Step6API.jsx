import { useState } from 'react';

// Step 6: API Integration Component
function Step6API({ data, updateData }) {
  return (
    <div className="space-y-6">
      {/* Enable API Toggle */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-white mb-1">API Integration</h2>
            <p className="text-sm text-[#8b949e]">Connect your app to a backend API</p>
          </div>
          <button
            onClick={() => updateData('api.enabled', !data.enabled)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${
              data.enabled ? 'bg-[#238636]' : 'bg-[#30363d]'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                data.enabled ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* API Configuration */}
      {data.enabled && (
        <>
          {/* API Option Selection */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">API Setup Option</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                onClick={() => updateData('api.option', 'manual')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                  data.option === 'manual'
                    ? 'border-[#58a6ff] bg-[#58a6ff]/10'
                    : 'border-[#30363d] hover:border-[#58a6ff]/50'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                    data.option === 'manual'
                      ? 'bg-[#58a6ff] border-[#58a6ff]'
                      : 'border-[#30363d]'
                  }`}>
                    {data.option === 'manual' && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">I have an API</h4>
                    <p className="text-sm text-[#8b949e]">
                      Integrate with your existing API server
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8b949e]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Manual integration (1-14 days)</span>
                </div>
              </div>

              <div
                onClick={() => updateData('api.createApi', !data.createApi)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                  data.createApi
                    ? 'border-[#238636] bg-[#238636]/10'
                    : 'border-[#30363d] hover:border-[#238636]/50'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                    data.createApi
                      ? 'bg-[#238636] border-[#238636]'
                      : 'border-[#30363d]'
                  }`}>
                    {data.createApi && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">Help me create API</h4>
                    <p className="text-sm text-[#8b949e]">
                      We'll build the backend API for you
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#22c55e]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <span>Premium service available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Manual API Integration */}
          {data.option === 'manual' && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">API Details</h3>

              <div className="space-y-4">
                {/* API Type */}
                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    API Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => updateData('api.type', 'rest')}
                      className={`px-4 py-3 rounded-lg border-2 transition ${
                        data.type === 'rest'
                          ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                          : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                      }`}
                    >
                      <div className="font-semibold">REST API</div>
                      <div className="text-xs mt-1">Standard HTTP</div>
                    </button>
                    <button
                      onClick={() => updateData('api.type', 'graphql')}
                      className={`px-4 py-3 rounded-lg border-2 transition ${
                        data.type === 'graphql'
                          ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                          : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                      }`}
                    >
                      <div className="font-semibold">GraphQL</div>
                      <div className="text-xs mt-1">Query Language</div>
                    </button>
                  </div>
                </div>

                {/* API Documentation URL */}
                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    API Documentation URL <span className="text-[#8b949e]">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    value={data.docsUrl}
                    onChange={(e) => updateData('api.docsUrl', e.target.value)}
                    placeholder="https://api.example.com/docs"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                  <p className="text-xs text-[#8b949e] mt-1">
                    Link to your API documentation (Swagger, Postman, etc.)
                  </p>
                </div>

                {/* Contact Email */}
                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Contact Email <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="email"
                    value={data.contactEmail}
                    onChange={(e) => updateData('api.contactEmail', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                  <p className="text-xs text-[#8b949e] mt-1">
                    We'll contact you if we need clarification about your API
                  </p>
                </div>

                {/* Upload API Docs */}
                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Upload API Documentation <span className="text-[#8b949e]">(Optional)</span>
                  </label>
                  <div className="border-2 border-dashed border-[#30363d] rounded-lg p-6 text-center hover:border-[#58a6ff]/50 transition">
                    <input
                      type="file"
                      accept=".pdf,.json,.yaml,.yml,.txt,.md"
                      onChange={(e) => {
                        // Handle file upload
                        console.log('File:', e.target.files[0]);
                      }}
                      className="hidden"
                      id="api-docs-upload"
                    />
                    <label htmlFor="api-docs-upload" className="cursor-pointer">
                      <svg className="w-10 h-10 text-[#6e7681] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="text-sm text-white mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-[#8b949e]">
                        PDF, JSON, YAML, TXT, or Markdown files
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Create API Service Info */}
          {data.createApi && (
            <div className="bg-[#238636]/10 border border-[#238636]/30 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-6 h-6 text-[#22c55e] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-2">Custom API Development Service</h4>
                  <p className="text-sm text-[#8b949e] mb-4">
                    Our team will build a custom backend API tailored to your app's needs. This includes:
                  </p>
                  <ul className="space-y-2 text-sm text-[#c9d1d9] mb-4">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      RESTful or GraphQL API architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Database design and setup
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Authentication & authorization
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      API documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Hosting setup assistance
                    </li>
                  </ul>

                  <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#8b949e]">Pricing starts at:</span>
                      <span className="text-2xl font-bold text-[#22c55e]">$199</span>
                    </div>
                    <p className="text-xs text-[#8b949e]">
                      Final price depends on complexity. We'll contact you for requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Info Banner */}
          <div className="bg-[#1f6feb]/10 border border-[#1f6feb]/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#58a6ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 className="text-white font-medium mb-1">Manual Integration Service</h4>
                <p className="text-sm text-[#8b949e]">
                  Our team will manually integrate your API into your app. Timeline: 1-14 business days depending on API complexity.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Skip API */}
      {!data.enabled && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-center">
          <svg className="w-12 h-12 text-[#6e7681] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"></path>
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">API Integration Disabled</h3>
          <p className="text-[#8b949e]">
            Your app will work with local data only. Enable API integration above if you need backend connectivity.
          </p>
        </div>
      )}
    </div>
  );
}

export default Step6API;