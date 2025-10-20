import { useState } from 'react';

// Step 7: Signing & Compilation Component
function Step7Signing({ data, updateData }) {
  return (
    <div className="space-y-6">
      {/* Enable Signing Toggle */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-white mb-1">App Signing</h2>
            <p className="text-sm text-[#8b949e]">Sign your app for production release</p>
          </div>
          <button
            onClick={() => updateData('signing.enabled', !data.enabled)}
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

      {data.enabled && (
        <>
          {/* Signing Options */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Signing Method</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Auto-Generate */}
              <div
                onClick={() => updateData('signing.option', 'auto')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                  data.option === 'auto'
                    ? 'border-[#58a6ff] bg-[#58a6ff]/10'
                    : 'border-[#30363d] hover:border-[#58a6ff]/50'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                    data.option === 'auto'
                      ? 'bg-[#58a6ff] border-[#58a6ff]'
                      : 'border-[#30363d]'
                  }`}>
                    {data.option === 'auto' && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
                      Auto-Generate
                      <span className="text-xs bg-[#238636] text-white px-2 py-0.5 rounded">Recommended</span>
                    </h4>
                    <p className="text-sm text-[#8b949e]">
                      We'll create a new signing certificate for you
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8b949e]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <span>Quick & easy setup</span>
                </div>
              </div>

              {/* Upload Certificate */}
              <div
                onClick={() => updateData('signing.option', 'upload')}
                className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                  data.option === 'upload'
                    ? 'border-[#58a6ff] bg-[#58a6ff]/10'
                    : 'border-[#30363d] hover:border-[#58a6ff]/50'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                    data.option === 'upload'
                      ? 'bg-[#58a6ff] border-[#58a6ff]'
                      : 'border-[#30363d]'
                  }`}>
                    {data.option === 'upload' && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">Upload Certificate</h4>
                    <p className="text-sm text-[#8b949e]">
                      Use your existing signing certificate
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8b949e]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span>For existing apps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Certificate Section */}
          {data.option === 'upload' && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Upload Your Certificate</h3>
              
              <div className="space-y-4">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-[#30363d] rounded-lg p-8 text-center hover:border-[#58a6ff]/50 transition">
                  <input
                    type="file"
                    accept=".jks,.keystore,.p12,.pfx"
                    onChange={(e) => {
                      console.log('Certificate file:', e.target.files[0]);
                      updateData('signing.certificate', e.target.files[0]?.name || null);
                    }}
                    className="hidden"
                    id="cert-upload"
                  />
                  <label htmlFor="cert-upload" className="cursor-pointer">
                    {data.certificate ? (
                      <div className="flex items-center justify-center gap-3">
                        <svg className="w-10 h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div className="text-left">
                          <p className="text-white font-medium">{data.certificate}</p>
                          <p className="text-xs text-[#8b949e]">Click to change</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <svg className="w-12 h-12 text-[#6e7681] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="text-white mb-1">Click to upload certificate</p>
                        <p className="text-sm text-[#8b949e]">
                          Supports: .jks, .keystore, .p12, .pfx files
                        </p>
                      </>
                    )}
                  </label>
                </div>

                {/* Auto-consent Checkbox */}
                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.autoConsent}
                      onChange={(e) => updateData('signing.autoConsent', e.target.checked)}
                      className="w-5 h-5 mt-0.5 text-[#58a6ff] bg-[#0d1117] border-[#30363d] rounded focus:ring-2 focus:ring-[#58a6ff]"
                    />
                    <div className="flex-1">
                      <p className="text-white font-medium mb-1">
                        Auto-generate if certificate is invalid
                      </p>
                      <p className="text-sm text-[#8b949e]">
                        If your uploaded certificate fails validation, we'll automatically generate a new one for you.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Auto-Generate Certificate Form */}
          {data.option === 'auto' && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Certificate Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    First Name <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.autoGenDetails.firstName}
                    onChange={(e) => updateData('signing.autoGenDetails.firstName', e.target.value)}
                    placeholder="John"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Last Name <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.autoGenDetails.lastName}
                    onChange={(e) => updateData('signing.autoGenDetails.lastName', e.target.value)}
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Organization Unit
                  </label>
                  <input
                    type="text"
                    value={data.autoGenDetails.orgUnit}
                    onChange={(e) => updateData('signing.autoGenDetails.orgUnit', e.target.value)}
                    placeholder="Development"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Organization <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.autoGenDetails.organization}
                    onChange={(e) => updateData('signing.autoGenDetails.organization', e.target.value)}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    City <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.autoGenDetails.city}
                    onChange={(e) => updateData('signing.autoGenDetails.city', e.target.value)}
                    placeholder="New York"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    State/Province <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.autoGenDetails.state}
                    onChange={(e) => updateData('signing.autoGenDetails.state', e.target.value)}
                    placeholder="NY"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Country Code <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.autoGenDetails.country}
                    onChange={(e) => updateData('signing.autoGenDetails.country', e.target.value)}
                    placeholder="US"
                    maxLength="2"
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Validity (Years)
                  </label>
                  <select
                    value={data.autoGenDetails.validity}
                    onChange={(e) => updateData('signing.autoGenDetails.validity', e.target.value)}
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                  >
                    <option value="10">10 years</option>
                    <option value="25">25 years</option>
                    <option value="50">50 years</option>
                    <option value="100">100 years</option>
                  </select>
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
                <h4 className="text-white font-medium mb-1">About App Signing</h4>
                <p className="text-sm text-[#8b949e]">
                  App signing is required to publish your app to Google Play Store or Apple App Store. We'll provide you with the certificate file and credentials securely.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Skip Signing */}
      {!data.enabled && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-center">
          <svg className="w-12 h-12 text-[#6e7681] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">App Signing Disabled</h3>
          <p className="text-[#8b949e]">
            Your app will be generated without signing. Enable signing above if you plan to publish to app stores.
          </p>
        </div>
      )}
    </div>
  );
}

export default Step7Signing;