import { useState } from 'react';

// Step 10: AI Suggestions Component
function Step10AI({ projectData, updateData }) {
  const [analyzing, setAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const analyzeProject = () => {
    setAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const newSuggestions = generateSuggestions();
      setSuggestions(newSuggestions);
      updateData('aiSuggestions', newSuggestions);
      setAnalyzing(false);
    }, 2000);
  };

  const generateSuggestions = () => {
    const suggestions = [];

    // Analyze app type
    if (projectData.appType === 'ecommerce' && !projectData.features.payments) {
      suggestions.push({
        type: 'critical',
        icon: '💳',
        title: 'Add Payment Integration',
        description: 'E-commerce apps require payment processing. Consider adding Stripe integration.',
        action: 'Add Payments Feature',
        category: 'Features'
      });
    }

    if (projectData.appType === 'social' && !projectData.features.pushNotifications) {
      suggestions.push({
        type: 'warning',
        icon: '🔔',
        title: 'Enable Push Notifications',
        description: 'Social apps benefit greatly from real-time notifications to keep users engaged.',
        action: 'Add Push Notifications',
        category: 'Features'
      });
    }

    // Analyze database
    if (!projectData.database.entities || projectData.database.entities.length === 0) {
      suggestions.push({
        type: 'critical',
        icon: '📊',
        title: 'Define Database Entities',
        description: 'Your app has no database entities. Add entities to store and manage data.',
        action: 'Go to Database Step',
        category: 'Database'
      });
    }

    // Analyze API
    if (!projectData.api.enabled && (projectData.appType === 'ecommerce' || projectData.appType === 'social')) {
      suggestions.push({
        type: 'warning',
        icon: '🌐',
        title: 'Consider API Integration',
        description: `${projectData.appType === 'ecommerce' ? 'E-commerce' : 'Social'} apps typically need backend APIs for dynamic content and user data.`,
        action: 'Enable API Integration',
        category: 'API'
      });
    }

    // Analyze authentication
    if (!projectData.features.auth && (projectData.appType !== 'news' && projectData.appType !== 'custom')) {
      suggestions.push({
        type: 'info',
        icon: '🔐',
        title: 'Add User Authentication',
        description: 'Most apps benefit from user accounts. This enables personalization and data sync.',
        action: 'Add Authentication',
        category: 'Features'
      });
    }

    // Analyze platforms
    if (projectData.platforms.length === 1) {
      suggestions.push({
        type: 'info',
        icon: '📱',
        title: 'Expand to Multiple Platforms',
        description: 'Reach more users by adding more platforms. Consider adding iOS or Web.',
        action: 'Add More Platforms',
        category: 'Platforms'
      });
    }

    // Analyze signing
    if (!projectData.signing.enabled && projectData.platforms.includes('android')) {
      suggestions.push({
        type: 'warning',
        icon: '🔏',
        title: 'Enable App Signing',
        description: 'App signing is required to publish on Google Play Store.',
        action: 'Enable Signing',
        category: 'Signing'
      });
    }

    // Analytics suggestion
    if (!projectData.features.analytics) {
      suggestions.push({
        type: 'info',
        icon: '📈',
        title: 'Track User Analytics',
        description: 'Understanding user behavior helps improve your app. Add analytics tracking.',
        action: 'Add Analytics',
        category: 'Features'
      });
    }

    // Default suggestion if everything looks good
    if (suggestions.length === 0) {
      suggestions.push({
        type: 'success',
        icon: '🎉',
        title: 'Great Configuration!',
        description: 'Your project is well-configured. You\'re ready to generate!',
        action: null,
        category: 'General'
      });
    }

    return suggestions;
  };

  const getSuggestionColor = (type) => {
    switch (type) {
      case 'critical':
        return {
          border: 'border-[#ef4444]',
          bg: 'bg-[#ef4444]/10',
          text: 'text-[#ef4444]'
        };
      case 'warning':
        return {
          border: 'border-[#f59e0b]',
          bg: 'bg-[#f59e0b]/10',
          text: 'text-[#f59e0b]'
        };
      case 'success':
        return {
          border: 'border-[#22c55e]',
          bg: 'bg-[#22c55e]/10',
          text: 'text-[#22c55e]'
        };
      default:
        return {
          border: 'border-[#58a6ff]',
          bg: 'bg-[#58a6ff]/10',
          text: 'text-[#58a6ff]'
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-[#58a6ff] to-[#1f6feb] rounded-xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="text-5xl">🤖</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">AI-Powered Analysis</h2>
            <p className="text-white/90">
              Let our AI analyze your project and suggest improvements
            </p>
          </div>
        </div>
      </div>

      {/* Analyze Button */}
      {suggestions.length === 0 && !analyzing && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-center">
          <svg className="w-16 h-16 text-[#58a6ff] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          <h3 className="text-xl font-semibold text-white mb-2">Ready to Analyze</h3>
          <p className="text-[#8b949e] mb-6">
            Click the button below to get AI-powered suggestions for your project
          </p>
          <button
            onClick={analyzeProject}
            className="px-6 py-3 bg-[#58a6ff] hover:bg-[#1f6feb] text-white rounded-lg font-semibold transition inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Analyze Project
          </button>
        </div>
      )}

      {/* Analyzing State */}
      {analyzing && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-[#58a6ff]/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#58a6ff] border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Analyzing Your Project...</h3>
          <p className="text-[#8b949e]">
            Our AI is reviewing your configuration
          </p>
        </div>
      )}

      {/* Suggestions List */}
      {suggestions.length > 0 && !analyzing && (
        <>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                AI Suggestions ({suggestions.length})
              </h3>
              <button
                onClick={analyzeProject}
                className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-sm font-medium transition"
              >
                Re-analyze
              </button>
            </div>

            <div className="space-y-4">
              {suggestions.map((suggestion, idx) => {
                const colors = getSuggestionColor(suggestion.type);
                return (
                  <div
                    key={idx}
                    className={`border-2 rounded-xl p-4 ${colors.border} ${colors.bg}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{suggestion.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-white font-semibold mb-1">{suggestion.title}</h4>
                            <p className="text-sm text-[#8b949e]">{suggestion.description}</p>
                          </div>
                          <span className={`text-xs font-medium px-2 py-1 rounded ${colors.text} ${colors.bg} border ${colors.border}`}>
                            {suggestion.category}
                          </span>
                        </div>
                        {suggestion.action && (
                          <button className={`text-sm font-medium ${colors.text} hover:underline mt-2`}>
                            → {suggestion.action}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Analysis Summary</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#ef4444] mb-1">
                  {suggestions.filter(s => s.type === 'critical').length}
                </div>
                <div className="text-xs text-[#8b949e]">Critical</div>
              </div>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#f59e0b] mb-1">
                  {suggestions.filter(s => s.type === 'warning').length}
                </div>
                <div className="text-xs text-[#8b949e]">Warnings</div>
              </div>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#58a6ff] mb-1">
                  {suggestions.filter(s => s.type === 'info').length}
                </div>
                <div className="text-xs text-[#8b949e]">Info</div>
              </div>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#22c55e] mb-1">
                  {suggestions.filter(s => s.type === 'success').length}
                </div>
                <div className="text-xs text-[#8b949e]">Success</div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Info Banner */}
      <div className="bg-[#1f6feb]/10 border border-[#1f6feb]/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-[#58a6ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h4 className="text-white font-medium mb-1">About AI Analysis</h4>
            <p className="text-sm text-[#8b949e]">
              Our AI analyzes your project configuration and suggests improvements based on best practices and common patterns for your app type. Suggestions are optional but recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step10AI;