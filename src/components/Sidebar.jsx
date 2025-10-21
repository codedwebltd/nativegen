import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import authService from '../services/authService';

function Sidebar({ isOpen, onClose }) {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const location = useLocation();
  const userEmail = authService.getUser()?.email || '';
  const userName = authService.getUser()?.name || 'User';

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden" onClick={onClose} />}

      <aside className={`w-64 h-screen bg-[#161b22] border-r border-[#30363d] fixed left-0 top-0 overflow-y-auto z-30 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          
          <div className="p-6 border-b border-[#30363d]">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold text-white">
                <span className="text-[#58a6ff]">&lt;</span>
                NativeGen
                <span className="text-[#58a6ff]">/&gt;</span>
              </span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
            
            <div>
              <div className="px-3 mb-2 text-[10px] font-semibold text-[#6e7681] uppercase tracking-wider">Navigation</div>
              <Link to="/dashboard" onClick={onClose} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${location.pathname === '/dashboard' ? 'bg-[#238636] text-white' : 'text-[#8b949e] hover:bg-[#21262d] hover:text-white'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span className="font-medium">Dashboard</span>
              </Link>
            </div>

            <div>
              <div className="px-3 mb-2 text-[10px] font-semibold text-[#6e7681] uppercase tracking-wider">Projects</div>
              <div className="space-y-1">
                <button onClick={() => setProjectsOpen(!projectsOpen)} className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-[#8b949e] hover:bg-[#21262d] hover:text-white transition-all">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    <span className="font-medium">All Projects</span>
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${projectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`ml-8 space-y-1 overflow-hidden transition-all ${projectsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <Link to="/dashboard/projects/all" onClick={onClose} className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === '/dashboard/projects/all' ? 'text-[#58a6ff] font-medium' : 'text-[#8b949e] hover:text-white'}`}>All Projects</Link>
                  <Link to="/dashboard/projects/in-progress" onClick={onClose} className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === '/dashboard/projects/in-progress' ? 'text-[#58a6ff] font-medium' : 'text-[#8b949e] hover:text-white'}`}>In Progress</Link>
                  <Link to="/dashboard/projects/completed" onClick={onClose} className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === '/dashboard/projects/completed' ? 'text-[#58a6ff] font-medium' : 'text-[#8b949e] hover:text-white'}`}>Completed</Link>
                  <Link to="/dashboard/projects/failed" onClick={onClose} className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === '/dashboard/projects/failed' ? 'text-[#58a6ff] font-medium' : 'text-[#8b949e] hover:text-white'}`}>Failed</Link>
                </div>
                <a href="/create-project" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#238636] text-white hover:bg-[#2ea043] transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                  <span className="font-medium">New Project</span>
                </a>
              </div>
            </div>

           <div>
          <div className="px-3 mb-2 text-[10px] font-semibold text-[#6e7681] uppercase tracking-wider">Account</div>
          <div className="space-y-1">
            <button onClick={() => setAccountOpen(!accountOpen)} className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-[#8b949e] hover:bg-[#21262d] hover:text-white transition-all">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                <span className="font-medium">Billing & Usage</span>
              </div>
              <svg className={`w-4 h-4 transition-transform ${accountOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`ml-8 space-y-1 overflow-hidden transition-all ${accountOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link to="/dashboard/account/usage" onClick={onClose} className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === '/dashboard/account/usage' ? 'text-[#58a6ff] font-medium' : 'text-[#8b949e] hover:text-white'}`}>Usage</Link>
              <Link to="/dashboard/account/api-keys" onClick={onClose} className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === '/dashboard/account/api-keys' ? 'text-[#58a6ff] font-medium' : 'text-[#8b949e] hover:text-white'}`}>API Keys</Link>
              <Link to="/dashboard/account/settings" onClick={onClose} className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === '/dashboard/account/settings' ? 'text-[#58a6ff] font-medium' : 'text-[#8b949e] hover:text-white'}`}>Settings</Link>
            </div>
          </div>
        </div>
            <div>
              <div className="px-3 mb-2 text-[10px] font-semibold text-[#6e7681] uppercase tracking-wider">Settings</div>
               <Link to="/dashboard/account/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8b949e] hover:bg-[#21262d] hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="font-medium">Preferences</span>
              </Link>
            </div>
          </nav>

          <div className="p-4 border-t border-[#30363d]">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#21262d] transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-[#238636] flex items-center justify-center text-white font-bold">JD</div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate">{userName}</p>
                <p className="text-[#8b949e] text-xs truncate">{userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;