import { useState } from 'react';

// Step 4: App Type & Features Component
function Step4AppType({ data, updateData }) {
  const appTypes = [
    {
      id: 'ecommerce',
      name: 'E-commerce',
      icon: '🛒',
      description: 'Online shopping app',
      screens: ['Products', 'Cart', 'Checkout', 'Orders', 'Profile']
    },
    {
      id: 'social',
      name: 'Social Media',
      icon: '👥',
      description: 'Social networking app',
      screens: ['Feed', 'Profile', 'Messages', 'Notifications', 'Search']
    },
    {
      id: 'news',
      name: 'News/Blog',
      icon: '📰',
      description: 'Content publishing app',
      screens: ['Articles', 'Categories', 'Search', 'Bookmarks', 'Profile']
    },
    {
      id: 'fitness',
      name: 'Fitness Tracker',
      icon: '💪',
      description: 'Health and fitness app',
      screens: ['Workouts', 'Progress', 'Statistics', 'Goals', 'Profile']
    },
    {
      id: 'task',
      name: 'Task Manager',
      icon: '✅',
      description: 'Productivity and tasks',
      screens: ['Tasks', 'Projects', 'Calendar', 'Reminders', 'Settings']
    },
    {
      id: 'food',
      name: 'Food Delivery',
      icon: '🍔',
      description: 'Restaurant ordering app',
      screens: ['Restaurants', 'Menu', 'Cart', 'Orders', 'Profile']
    },
    {
      id: 'education',
      name: 'Education',
      icon: '📚',
      description: 'Learning platform',
      screens: ['Courses', 'Lessons', 'Progress', 'Quizzes', 'Profile']
    },
    {
      id: 'custom',
      name: 'Custom App',
      icon: '⚙️',
      description: 'Build from scratch',
      screens: []
    }
  ];

  const selectAppType = (typeId) => {
    const selectedType = appTypes.find(t => t.id === typeId);
    updateData('appType', typeId);
    updateData('screens', selectedType.screens);
  };

  const toggleScreen = (screen) => {
    const currentScreens = data.screens || [];
    const newScreens = currentScreens.includes(screen)
      ? currentScreens.filter(s => s !== screen)
      : [...currentScreens, screen];
    updateData('screens', newScreens);
  };

  const addCustomScreen = () => {
    const screenName = prompt('Enter screen name:');
    if (screenName && screenName.trim()) {
      const currentScreens = data.screens || [];
      updateData('screens', [...currentScreens, screenName.trim()]);
    }
  };

  return (
    <div className="space-y-6">
      {/* App Type Selection */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Choose App Type</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {appTypes.map(type => (
            <div
              key={type.id}
              onClick={() => selectAppType(type.id)}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition ${
                data.appType === type.id
                  ? 'border-[#58a6ff] bg-[#58a6ff]/10'
                  : 'border-[#30363d] hover:border-[#58a6ff]/50'
              }`}
            >
              <div className="absolute top-3 right-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  data.appType === type.id
                    ? 'bg-[#58a6ff] border-[#58a6ff]'
                    : 'border-[#30363d]'
                }`}>
                  {data.appType === type.id && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
              </div>

              <div className="text-3xl mb-2">{type.icon}</div>
              <h3 className="text-white font-semibold mb-1">{type.name}</h3>
              <p className="text-xs text-[#8b949e]">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Screens */}
      {data.appType && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">App Screens</h2>
            <button
              onClick={addCustomScreen}
              className="px-3 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-sm font-medium transition"
            >
              + Add Custom Screen
            </button>
          </div>

          {data.screens && data.screens.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {data.screens.map((screen, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-[#0d1117] border border-[#30363d] rounded-lg group hover:border-[#58a6ff]/50 transition"
                >
                  <span className="text-white text-sm">{screen}</span>
                  <button
                    onClick={() => toggleScreen(screen)}
                    className="opacity-0 group-hover:opacity-100 text-[#ef4444] hover:text-[#f87171] transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <svg className="w-12 h-12 text-[#6e7681] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <p className="text-[#8b949e]">No screens added yet. Click "Add Custom Screen" to start.</p>
            </div>
          )}
        </div>
      )}

      {/* App Type Info */}
      {data.appType && data.appType !== 'custom' && (
        <div className="bg-[#1f6feb]/10 border border-[#1f6feb]/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#58a6ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h4 className="text-white font-medium mb-1">Pre-configured Screens</h4>
              <p className="text-sm text-[#8b949e]">
                We've added common screens for this app type. You can remove any screen or add custom ones using the button above.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step4AppType;