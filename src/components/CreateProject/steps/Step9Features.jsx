import { useState } from 'react';

// Step 9: Advanced Features Component
function Step9Features({ data, updateData }) {
  const features = [
    {
      id: 'auth',
      name: 'Authentication',
      icon: '🔐',
      description: 'User login, registration & password recovery',
      price: 29,
      includes: ['Email/Password auth', 'Social login (Google, Facebook)', 'Password reset', 'Email verification']
    },
    {
      id: 'pushNotifications',
      name: 'Push Notifications',
      icon: '🔔',
      description: 'Send push notifications to users',
      price: 19,
      includes: ['Firebase Cloud Messaging', 'Notification scheduling', 'Custom notification sounds', 'Badge management']
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: '📊',
      description: 'Track user behavior and app performance',
      price: 15,
      includes: ['Google Analytics', 'Event tracking', 'User properties', 'Crash reporting']
    },
    {
      id: 'payments',
      name: 'Payment Integration',
      icon: '💳',
      description: 'Accept payments in your app',
      price: 49,
      includes: ['Stripe integration', 'In-app purchases', 'Subscription management', 'Payment history']
    },
    {
      id: 'maps',
      name: 'Maps Integration',
      icon: '🗺️',
      description: 'Display maps and location services',
      price: 25,
      includes: ['Google Maps', 'Location tracking', 'Geofencing', 'Place search']
    },
    {
      id: 'camera',
      name: 'Camera Features',
      icon: '📷',
      description: 'Camera access and image processing',
      price: 15,
      includes: ['Photo capture', 'Video recording', 'Image filters', 'Gallery access']
    }
  ];

  const toggleFeature = (featureId) => {
    updateData(`features.${featureId}`, !data[featureId]);
  };

  const getTotalPrice = () => {
    return features
      .filter(f => data[f.id])
      .reduce((sum, f) => sum + f.price, 0);
  };

  const getSelectedCount = () => {
    return features.filter(f => data[f.id]).length;
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-[#238636] to-[#2ea043] rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Premium Features</h2>
            <p className="text-white/90">
              Supercharge your app with advanced functionality
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">${getTotalPrice()}</div>
            <div className="text-sm text-white/80">{getSelectedCount()} selected</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map(feature => (
          <div
            key={feature.id}
            onClick={() => toggleFeature(feature.id)}
            className={`bg-[#161b22] border-2 rounded-xl p-6 cursor-pointer transition ${
              data[feature.id]
                ? 'border-[#238636] bg-[#238636]/5'
                : 'border-[#30363d] hover:border-[#58a6ff]/50'
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-white font-semibold">{feature.name}</h3>
                  <p className="text-xs text-[#8b949e]">{feature.description}</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                data[feature.id]
                  ? 'bg-[#238636] border-[#238636]'
                  : 'border-[#30363d]'
              }`}>
                {data[feature.id] && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
            </div>

            {/* Includes */}
            <div className="space-y-2 mb-4">
              {feature.includes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#8b949e]">
                  <svg className="w-4 h-4 text-[#238636] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-4 border-t border-[#30363d]">
              <span className="text-sm text-[#8b949e]">Add to project</span>
              <span className="text-lg font-bold text-[#22c55e]">+${feature.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Features Summary */}
      {getSelectedCount() > 0 && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Selected Features Summary</h3>
          
          <div className="space-y-3">
            {features
              .filter(f => data[f.id])
              .map(feature => (
                <div key={feature.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-white">{feature.name}</span>
                  </div>
                  <span className="text-[#22c55e] font-semibold">${feature.price}</span>
                </div>
              ))}
            
            <div className="pt-3 border-t border-[#30363d] flex items-center justify-between">
              <span className="text-white font-semibold">Features Total</span>
              <span className="text-[#22c55e] font-bold text-xl">${getTotalPrice()}</span>
            </div>
          </div>
        </div>
      )}

      {/* No Features Selected */}
      {getSelectedCount() === 0 && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-center">
          <svg className="w-12 h-12 text-[#6e7681] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">No Premium Features Selected</h3>
          <p className="text-[#8b949e]">
            Select features above to enhance your app with advanced functionality.
          </p>
        </div>
      )}

      {/* Info Banner */}
      <div className="bg-[#1f6feb]/10 border border-[#1f6feb]/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-[#58a6ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h4 className="text-white font-medium mb-1">About Premium Features</h4>
            <p className="text-sm text-[#8b949e]">
              All premium features are optional and can be added to any project. Features include full implementation, documentation, and 30 days of support.
            </p>
          </div>
        </div>
      </div>

      {/* Package Suggestion */}
      {getSelectedCount() >= 3 && (
        <div className="bg-[#238636]/10 border border-[#238636]/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
            </svg>
            <div>
              <h4 className="text-white font-medium mb-1">💡 Save with Bundles</h4>
              <p className="text-sm text-[#8b949e]">
                You've selected {getSelectedCount()} features! Consider our All-Features Bundle for ${getTotalPrice() * 0.7} (30% off) instead of ${getTotalPrice()}.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step9Features;