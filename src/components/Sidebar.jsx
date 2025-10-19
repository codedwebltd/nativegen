import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-[#161b22] border-r border-[#30363d] fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <Link to="/" className="text-2xl font-bold text-white mb-8 block">
          <span className="text-[#58a6ff]">&lt;</span>NativeGen<span className="text-[#58a6ff]">/&gt;</span>
        </Link>

        <nav className="space-y-2">
          <Link to="/" className={`flex items-center gap-3 px-4 py-3 rounded-lg ${location.pathname === '/' ? 'bg-[#238636] text-white' : 'text-[#8b949e] hover:bg-[#1c2128] hover:text-white'} transition`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Dashboard
          </Link>

          {/* Projects Dropdown */}
          <div>
            <button onClick={() => setProjectsOpen(!projectsOpen)} className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-[#8b949e] hover:bg-[#1c2128] hover:text-white transition">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Projects
              </div>
              <svg className={`w-4 h-4 transition-transform ${projectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {projectsOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/projects/all" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === '/projects/all' ? 'bg-[#1c2128] text-white' : 'text-[#8b949e] hover:bg-[#1c2128] hover:text-white'} transition text-sm`}>
                  All Projects
                </Link>
                <Link to="/projects/in-progress" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === '/projects/in-progress' ? 'bg-[#1c2128] text-white' : 'text-[#8b949e] hover:bg-[#1c2128] hover:text-white'} transition text-sm`}>
                  In Progress
                </Link>
                <Link to="/projects/completed" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === '/projects/completed' ? 'bg-[#1c2128] text-white' : 'text-[#8b949e] hover:bg-[#1c2128] hover:text-white'} transition text-sm`}>
                  Completed
                </Link>
                <Link to="/projects/failed" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === '/projects/failed' ? 'bg-[#1c2128] text-white' : 'text-[#8b949e] hover:bg-[#1c2128] hover:text-white'} transition text-sm`}>
                  Failed
                </Link>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#8b949e] hover:bg-[#1c2128] hover:text-white transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            New Project
          </a>

          {/* Account Dropdown */}
          <div>
            <button onClick={() => setAccountOpen(!accountOpen)} className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-[#8b949e] hover:bg-[#1c2128] hover:text-white transition">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Account
              </div>
              <svg className={`w-4 h-4 transition-transform ${accountOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {accountOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#8b949e] hover:bg-[#1c2128] hover:text-white transition text-sm">Billing</a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#8b949e] hover:bg-[#1c2128] hover:text-white transition text-sm">Usage</a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#8b949e] hover:bg-[#1c2128] hover:text-white transition text-sm">API Keys</a>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#8b949e] hover:bg-[#1c2128] hover:text-white transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Settings
          </a>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#30363d] bg-[#161b22]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#238636] flex items-center justify-center font-bold">JD</div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">John Doe</p>
            <p className="text-[#8b949e] text-xs">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;