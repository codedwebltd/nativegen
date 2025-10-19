import React from 'react';

function WhyNative() {
  return (
    <section className="py-16 md:py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-[#238636]">Native</span> Over Cross-Platform?
          </h2>
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto">
            Real code. Real performance. Real control.
          </p>
        </div>
        
        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#238636] mb-2">3x</div>
            <p className="text-white font-semibold mb-1">Faster</p>
            <p className="text-sm text-[#8b949e]">App performance</p>
          </div>
          
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#238636] mb-2">60%</div>
            <p className="text-white font-semibold mb-1">Smaller</p>
            <p className="text-sm text-[#8b949e]">App size</p>
          </div>
          
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#238636] mb-2">100%</div>
            <p className="text-white font-semibold mb-1">Control</p>
            <p className="text-sm text-[#8b949e]">Full code ownership</p>
          </div>
          
        </div>
        
        {/* Simple Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Native */}
            <div className="bg-[#161b22] border-2 border-[#238636] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#238636]">✓</span> Native Code
              </h3>
              <ul className="space-y-3 text-[#c9d1d9]">
                <li>• Direct platform access</li>
                <li>• Maximum performance</li>
                <li>• Smallest app size</li>
                <li>• Full customization</li>
                <li>• No framework dependencies</li>
              </ul>
            </div>
            
            {/* Cross-Platform */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 opacity-60">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#ff6b6b]">✗</span> Cross-Platform
              </h3>
              <ul className="space-y-3 text-[#8b949e]">
                <li>• Bridge overhead</li>
                <li>• Slower performance</li>
                <li>• Larger bundle size</li>
                <li>• Framework limitations</li>
                <li>• Heavy dependencies</li>
              </ul>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default WhyNative;