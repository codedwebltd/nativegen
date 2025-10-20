import { useState } from 'react';

// Step 8: Theme & Styling Component
function Step8Theme({ data, updateData }) {
  const [customPrimary, setCustomPrimary] = useState(false);
  const [customSecondary, setCustomSecondary] = useState(false);

  const presetColors = {
    primary: [
      { name: 'Purple', value: '#6200EE', gradient: 'from-purple-600 to-purple-400' },
      { name: 'Blue', value: '#2196F3', gradient: 'from-blue-600 to-blue-400' },
      { name: 'Green', value: '#4CAF50', gradient: 'from-green-600 to-green-400' },
      { name: 'Red', value: '#F44336', gradient: 'from-red-600 to-red-400' },
      { name: 'Orange', value: '#FF9800', gradient: 'from-orange-600 to-orange-400' },
      { name: 'Pink', value: '#E91E63', gradient: 'from-pink-600 to-pink-400' },
      { name: 'Teal', value: '#009688', gradient: 'from-teal-600 to-teal-400' },
      { name: 'Indigo', value: '#3F51B5', gradient: 'from-indigo-600 to-indigo-400' }
    ],
    secondary: [
      { name: 'Cyan', value: '#03DAC6', gradient: 'from-cyan-500 to-cyan-300' },
      { name: 'Amber', value: '#FFC107', gradient: 'from-amber-500 to-amber-300' },
      { name: 'Lime', value: '#CDDC39', gradient: 'from-lime-500 to-lime-300' },
      { name: 'Deep Orange', value: '#FF5722', gradient: 'from-orange-600 to-orange-400' },
      { name: 'Light Blue', value: '#03A9F4', gradient: 'from-sky-500 to-sky-300' },
      { name: 'Purple', value: '#9C27B0', gradient: 'from-purple-500 to-purple-300' },
      { name: 'Green', value: '#8BC34A', gradient: 'from-green-500 to-green-300' },
      { name: 'Pink', value: '#FF4081', gradient: 'from-pink-500 to-pink-300' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Primary Color */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Primary Color</h2>
        
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-4">
          {presetColors.primary.map((color) => (
            <button
              key={color.value}
              onClick={() => {
                updateData('theme.primaryColor', color.value);
                setCustomPrimary(false);
              }}
              className={`relative group`}
              title={color.name}
            >
              <div
                className={`w-full aspect-square rounded-lg transition-transform group-hover:scale-110 ${
                  data.primaryColor === color.value
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-[#161b22]'
                    : ''
                }`}
                style={{ backgroundColor: color.value }}
              >
                {data.primaryColor === color.value && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-xs text-[#8b949e] mt-1 text-center">{color.name}</p>
            </button>
          ))}
        </div>

        {/* Custom Primary Color */}
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={data.primaryColor}
            onChange={(e) => {
              updateData('theme.primaryColor', e.target.value);
              setCustomPrimary(true);
            }}
            className="w-20 h-12 rounded-lg border-2 border-[#30363d] cursor-pointer"
          />
          <div className="flex-1">
            <p className="text-white text-sm font-medium mb-1">Custom Color</p>
            <input
              type="text"
              value={data.primaryColor}
              onChange={(e) => updateData('theme.primaryColor', e.target.value)}
              placeholder="#6200EE"
              className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-white text-sm placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Secondary Color */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Secondary Color</h2>
        
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-4">
          {presetColors.secondary.map((color) => (
            <button
              key={color.value}
              onClick={() => {
                updateData('theme.secondaryColor', color.value);
                setCustomSecondary(false);
              }}
              className={`relative group`}
              title={color.name}
            >
              <div
                className={`w-full aspect-square rounded-lg transition-transform group-hover:scale-110 ${
                  data.secondaryColor === color.value
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-[#161b22]'
                    : ''
                }`}
                style={{ backgroundColor: color.value }}
              >
                {data.secondaryColor === color.value && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-xs text-[#8b949e] mt-1 text-center">{color.name}</p>
            </button>
          ))}
        </div>

        {/* Custom Secondary Color */}
        <div className="flex items-center gap-3">
          <input
            type="color"
            value={data.secondaryColor}
            onChange={(e) => {
              updateData('theme.secondaryColor', e.target.value);
              setCustomSecondary(true);
            }}
            className="w-20 h-12 rounded-lg border-2 border-[#30363d] cursor-pointer"
          />
          <div className="flex-1">
            <p className="text-white text-sm font-medium mb-1">Custom Color</p>
            <input
              type="text"
              value={data.secondaryColor}
              onChange={(e) => updateData('theme.secondaryColor', e.target.value)}
              placeholder="#03DAC6"
              className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg text-white text-sm placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white mb-1">Dark Mode</h2>
            <p className="text-sm text-[#8b949e]">Enable dark theme for your app</p>
          </div>
          <button
            onClick={() => updateData('theme.darkMode', !data.darkMode)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${
              data.darkMode ? 'bg-[#238636]' : 'bg-[#30363d]'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                data.darkMode ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Theme Preview */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Theme Preview</h2>
        
        <div className={`rounded-xl overflow-hidden ${data.darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          {/* Preview Header */}
          <div
            className="p-6 text-white"
            style={{ backgroundColor: data.primaryColor }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">My App</h3>
                <p className="text-sm opacity-90">Welcome back!</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-white/20 rounded-lg p-2 text-xs">Search</div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="p-6 space-y-4">
            <div className={`p-4 rounded-lg ${data.darkMode ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-full"
                  style={{ backgroundColor: data.secondaryColor }}
                ></div>
                <div className="flex-1">
                  <div className={`h-3 rounded mb-2 ${data.darkMode ? 'bg-[#3a3a3a]' : 'bg-gray-300'}`} style={{ width: '60%' }}></div>
                  <div className={`h-2 rounded ${data.darkMode ? 'bg-[#3a3a3a]' : 'bg-gray-300'}`} style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className={`h-2 rounded mb-2 ${data.darkMode ? 'bg-[#3a3a3a]' : 'bg-gray-300'}`}></div>
              <div className={`h-2 rounded ${data.darkMode ? 'bg-[#3a3a3a]' : 'bg-gray-300'}`} style={{ width: '80%' }}></div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                className="p-3 rounded-lg text-white font-medium"
                style={{ backgroundColor: data.primaryColor }}
              >
                Primary
              </button>
              <button
                className="p-3 rounded-lg text-white font-medium"
                style={{ backgroundColor: data.secondaryColor }}
              >
                Secondary
              </button>
              <button className={`p-3 rounded-lg font-medium ${data.darkMode ? 'bg-[#2a2a2a] text-white' : 'bg-gray-200 text-gray-800'}`}>
                Default
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-[#1f6feb]/10 border border-[#1f6feb]/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-[#58a6ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
          </svg>
          <div>
            <h4 className="text-white font-medium mb-1">About Theme</h4>
            <p className="text-sm text-[#8b949e]">
              These colors will be applied throughout your app. Choose colors that match your brand identity for a consistent look and feel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step8Theme;