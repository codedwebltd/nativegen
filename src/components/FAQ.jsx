import React from 'react';

function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#58a6ff]">Questions</span>
          </h2>
          <p className="text-lg text-[#8b949e]">Everything you need to know</p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          
          {/* FAQ 1 */}
          <details className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group">
            <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-[#1c2128] transition">
              <span className="font-semibold text-white">Do I really own the generated code?</span>
              <span className="text-[#8b949e] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-4 text-[#8b949e] border-t border-[#30363d] pt-4">
              Yes! 100% ownership. The code is yours to use, modify, sell, or distribute however you want. No licensing restrictions, no runtime fees, no dependencies on our platform.
            </div>
          </details>
          
          {/* FAQ 2 */}
          <details className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group">
            <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-[#1c2128] transition">
              <span className="font-semibold text-white">What makes this "native" code?</span>
              <span className="text-[#8b949e] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-4 text-[#8b949e] border-t border-[#30363d] pt-4">
              We generate pure platform-specific code in native languages (Java/Kotlin for Android, Swift for iOS). It's not a wrapper, hybrid app, or cross-platform framework. You get real, compilable source code that runs directly on the platform.
            </div>
          </details>
          
          {/* FAQ 3 */}
          <details className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group">
            <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-[#1c2128] transition">
              <span className="font-semibold text-white">Can I modify the generated code?</span>
              <span className="text-[#8b949e] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-4 text-[#8b949e] border-t border-[#30363d] pt-4">
              Absolutely! The code is clean, well-structured, and follows industry best practices. You can modify, extend, and maintain it just like any code you write yourself. We use modern architecture patterns (MVVM, Clean Architecture) to ensure maintainability.
            </div>
          </details>
          
          {/* FAQ 4 */}
          <details className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group">
            <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-[#1c2128] transition">
              <span className="font-semibold text-white">What platforms do you support?</span>
              <span className="text-[#8b949e] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-4 text-[#8b949e] border-t border-[#30363d] pt-4">
              Currently: Android (Java/Kotlin), iOS (Swift), Desktop (JavaFX), Backend (Spring Boot), and Web (PHP/Laravel). More platforms coming soon based on user demand.
            </div>
          </details>
          
          {/* FAQ 5 */}
          <details className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group">
            <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-[#1c2128] transition">
              <span className="font-semibold text-white">How long does generation take?</span>
              <span className="text-[#8b949e] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-4 text-[#8b949e] border-t border-[#30363d] pt-4">
              Most projects generate in under 5 minutes. You'll receive the complete project structure with all files, ready to download and import into your IDE immediately.
            </div>
          </details>
          
          {/* FAQ 6 */}
          <details className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group">
            <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-[#1c2128] transition">
              <span className="font-semibold text-white">What's included in the generated project?</span>
              <span className="text-[#8b949e] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-4 text-[#8b949e] border-t border-[#30363d] pt-4">
              Complete Android Studio/Xcode project with all source files, configuration files, dependency management, build files, and a detailed README with setup instructions. Everything organized in standard project structure.
            </div>
          </details>
          
          {/* FAQ 7 */}
          <details className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden group">
            <summary className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-[#1c2128] transition">
              <span className="font-semibold text-white">Do you offer support?</span>
              <span className="text-[#8b949e] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-4 text-[#8b949e] border-t border-[#30363d] pt-4">
              Yes! We provide comprehensive documentation, video tutorials, and email support for all users. Priority support is available for paid projects.
            </div>
          </details>
          
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#8b949e] mb-6">Still have questions?</p>
          <a href="#" className="inline-block text-[#58a6ff] hover:text-white font-semibold">
            Contact Support →
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default FAQ;