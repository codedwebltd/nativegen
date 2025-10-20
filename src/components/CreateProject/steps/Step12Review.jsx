import { useState } from 'react';

// Step 12: Review & Generate Component
function Step12Review({ projectData, pricing, updateData }) {
  const [generating, setGenerating] = useState(false);
  const [generationComplete, setGenerationComplete] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');

  const generationSteps = [
    { progress: 10, message: 'Submitting project configuration...', duration: 800 },
    { progress: 20, message: 'Queuing app: ' + (projectData.basics.name || 'Your App'), duration: 1000 },
    { progress: 35, message: 'Validating platform configurations...', duration: 1200 },
    { progress: 50, message: 'Generating project structure...', duration: 1500 },
    { progress: 65, message: 'Building Android components...', duration: 1800 },
    { progress: 75, message: 'Setting up database entities...', duration: 1000 },
    { progress: 85, message: 'Configuring theme and styling...', duration: 1200 },
    { progress: 95, message: 'Finalizing project files...', duration: 1000 },
    { progress: 100, message: 'Generation complete!', duration: 500 }
  ];

  const startGeneration = async () => {
    if (!projectData.agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setGenerating(true);
    setCurrentProgress(0);

    // Simulate generation process
    for (const step of generationSteps) {
      setCurrentStep(step.message);
      setCurrentProgress(step.progress);
      await new Promise(resolve => setTimeout(resolve, step.duration));
    }

    setGenerating(false);
    setGenerationComplete(true);
  };

  const getCompletionStats = () => {
    const stats = {
      platforms: projectData.platforms.length,
      screens: projectData.screens?.length || 0,
      entities: projectData.database.entities?.length || 0,
      features: Object.values(projectData.features).filter(Boolean).length
    };
    return stats;
  };

  const stats = getCompletionStats();

  if (generationComplete) {
    return (
      <div className="space-y-6">
        {/* Success Card */}
        <div className="bg-gradient-to-r from-[#238636] to-[#2ea043] rounded-xl p-8 text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">Project Generated Successfully!</h2>
          <p className="text-white/90 text-lg">
            Your project "{projectData.basics.name}" is ready for download
          </p>
        </div>

        {/* Download Options */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Download Your Project</h3>
          
          <div className="space-y-3">
            <button className="w-full p-4 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-semibold transition flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span>Download Source Code (.zip)</span>
              </div>
              <span className="text-sm">125 MB</span>
            </button>

            {projectData.platforms.includes('android') && (
              <button className="w-full p-4 bg-[#0d1117] border border-[#30363d] hover:border-[#58a6ff] text-white rounded-lg font-semibold transition flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤖</span>
                  <span>Download Android APK</span>
                </div>
                <span className="text-sm text-[#8b949e]">45 MB</span>
              </button>
            )}

            {projectData.signing.enabled && (
              <button className="w-full p-4 bg-[#0d1117] border border-[#30363d] hover:border-[#58a6ff] text-white rounded-lg font-semibold transition flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔐</span>
                  <span>Download Signing Certificate</span>
                </div>
                <span className="text-sm text-[#8b949e]">2 KB</span>
              </button>
            )}

            <button className="w-full p-4 bg-[#0d1117] border border-[#30363d] hover:border-[#58a6ff] text-white rounded-lg font-semibold transition flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download Documentation</span>
              </div>
              <span className="text-sm text-[#8b949e]">PDF</span>
            </button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Next Steps</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#238636] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Extract the source code</h4>
                <p className="text-sm text-[#8b949e]">Unzip the downloaded file to your desired location</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#238636] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Open in IDE</h4>
                <p className="text-sm text-[#8b949e]">Import the project in Android Studio or your preferred IDE</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#238636] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Read the documentation</h4>
                <p className="text-sm text-[#8b949e]">Check README.md for setup instructions and project structure</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#238636] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Build and run</h4>
                <p className="text-sm text-[#8b949e]">Follow the build instructions to compile and test your app</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.reload()}
            className="flex-1 px-6 py-3 border border-[#30363d] rounded-lg text-[#c9d1d9] hover:border-[#58a6ff] hover:text-white transition font-medium"
          >
            Create Another Project
          </button>
          <button className="flex-1 px-6 py-3 bg-[#58a6ff] hover:bg-[#1f6feb] text-white rounded-lg font-semibold transition">
            View My Projects
          </button>
        </div>
      </div>
    );
  }

  if (generating) {
    return (
      <div className="space-y-6">
        {/* Generating Card */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <div className="text-center mb-8">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-[#58a6ff]/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#58a6ff] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Generating Your Project...</h2>
            <p className="text-[#8b949e]">{currentStep}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#8b949e]">Progress</span>
              <span className="text-sm font-semibold text-white">{currentProgress}%</span>
            </div>
            <div className="h-3 bg-[#0d1117] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#58a6ff] to-[#238636] transition-all duration-500 ease-out"
                style={{ width: `${currentProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Estimated Time */}
          <div className="text-center">
            <p className="text-xs text-[#6e7681]">
              Estimated time remaining: {Math.ceil((100 - currentProgress) / 10)} seconds
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#1f6feb]/10 border border-[#1f6feb]/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#58a6ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h4 className="text-white font-medium mb-1">Please Wait</h4>
              <p className="text-sm text-[#8b949e]">
                Your project is being generated. This process may take a few moments. Please don't close this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-[#58a6ff] to-[#1f6feb] rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Review Your Project</h2>
        <p className="text-white/90">
          Review your configuration before generating the project
        </p>
      </div>

      {/* Project Summary */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Project Overview</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div className="space-y-3">
            <div>
              <span className="text-sm text-[#8b949e]">Project Name</span>
              <p className="text-white font-medium">{projectData.basics.name || 'Not set'}</p>
            </div>
            <div>
              <span className="text-sm text-[#8b949e]">App Type</span>
              <p className="text-white font-medium capitalize">{projectData.appType || 'Not selected'}</p>
            </div>
            <div>
              <span className="text-sm text-[#8b949e]">Platforms</span>
              <div className="flex gap-2 mt-1">
                {projectData.platforms.map(p => (
                  <span key={p} className="px-2 py-1 bg-[#238636]/10 border border-[#238636]/30 text-[#22c55e] rounded text-xs font-medium capitalize">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#58a6ff] mb-1">{stats.platforms}</div>
              <div className="text-xs text-[#8b949e]">Platforms</div>
            </div>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#22c55e] mb-1">{stats.screens}</div>
              <div className="text-xs text-[#8b949e]">Screens</div>
            </div>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#f59e0b] mb-1">{stats.entities}</div>
              <div className="text-xs text-[#8b949e]">Entities</div>
            </div>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#ec4899] mb-1">{stats.features}</div>
              <div className="text-xs text-[#8b949e]">Features</div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Database */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>📊</span> Database
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8b949e]">Type:</span>
              <span className="text-white">{projectData.database.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b949e]">Entities:</span>
              <span className="text-white">{projectData.database.entities?.length || 0}</span>
            </div>
          </div>
        </div>

        {/* API */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>🌐</span> API Integration
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8b949e]">Enabled:</span>
              <span className={projectData.api.enabled ? 'text-[#22c55e]' : 'text-[#ef4444]'}>
                {projectData.api.enabled ? 'Yes' : 'No'}
              </span>
            </div>
            {projectData.api.enabled && (
              <div className="flex justify-between">
                <span className="text-[#8b949e]">Type:</span>
                <span className="text-white uppercase">{projectData.api.type}</span>
              </div>
            )}
          </div>
        </div>

        {/* Signing */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>🔐</span> App Signing
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8b949e]">Enabled:</span>
              <span className={projectData.signing.enabled ? 'text-[#22c55e]' : 'text-[#ef4444]'}>
                {projectData.signing.enabled ? 'Yes' : 'No'}
              </span>
            </div>
            {projectData.signing.enabled && (
              <div className="flex justify-between">
                <span className="text-[#8b949e]">Method:</span>
                <span className="text-white capitalize">{projectData.signing.option}</span>
              </div>
            )}
          </div>
        </div>

        {/* Theme */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>🎨</span> Theme
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-[#8b949e]">Primary:</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: projectData.theme.primaryColor }}></div>
                <span className="text-white text-xs">{projectData.theme.primaryColor}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8b949e]">Dark Mode:</span>
              <span className={projectData.theme.darkMode ? 'text-[#22c55e]' : 'text-[#8b949e]'}>
                {projectData.theme.darkMode ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Pricing Summary</h3>
        
        <div className="space-y-3">
          {pricing.breakdown.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span className="text-[#8b949e]">{item.name}</span>
              <span className="text-[#22c55e] font-medium">${item.price}</span>
            </div>
          ))}
          
          <div className="pt-3 border-t border-[#30363d] flex items-center justify-between">
            <span className="text-white font-semibold text-lg">Total Cost</span>
            <span className="text-[#22c55e] font-bold text-2xl">${pricing.total}</span>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={projectData.agreedToTerms}
            onChange={(e) => updateData('agreedToTerms', e.target.checked)}
            className="w-5 h-5 mt-0.5 text-[#58a6ff] bg-[#0d1117] border-[#30363d] rounded focus:ring-2 focus:ring-[#58a6ff]"
          />
          <div className="flex-1">
            <p className="text-white font-medium mb-1">
              I agree to the Terms and Conditions <span className="text-[#ef4444]">*</span>
            </p>
            <p className="text-sm text-[#8b949e]">
              By checking this box, you agree to our terms of service, privacy policy, and refund policy. You acknowledge that the generated code is provided as-is with a 7-day preview period.
            </p>
          </div>
        </label>
      </div>

      {/* Generate Button */}
      <button
        onClick={startGeneration}
        disabled={!projectData.agreedToTerms}
        className="w-full px-6 py-4 bg-gradient-to-r from-[#238636] to-[#2ea043] hover:from-[#2ea043] hover:to-[#238636] text-white rounded-lg font-bold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        Generate Project (${pricing.total})
      </button>
    </div>
  );
}

export default Step12Review;