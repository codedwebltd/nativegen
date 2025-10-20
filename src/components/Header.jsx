import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function Header({ onMenuClick }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggingOut(true);
    authService.logout();
    
    // Small delay to ensure cleanup, then force reload to login
    setTimeout(() => {
      window.location.href = '/login';
    }, 100);
  };
const user = authService.getUser();
const wallet = authService.getWallet();
  return (
    <header className="bg-[#161b22] border-b border-[#30363d] sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onMenuClick} className="md:hidden text-[#c9d1d9] hover:text-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <h1 className="text-xl font-bold text-white">Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md font-medium text-sm transition">
              + New Project
            </button>

            <div className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2 hover:bg-[#1c2128] px-2 py-2 rounded-lg transition">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#238636] to-[#2ea043] flex items-center justify-center text-white text-sm font-bold">
                    JD
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#22c55e] border-2 border-[#161b22] rounded-full"></div>
                </div>
                <svg className={`w-4 h-4 text-[#8b949e] transition-transform ${profileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-64 bg-[#161b22] border border-[#30363d] rounded-lg shadow-xl z-20">
                    <div className="p-4 border-b border-[#30363d]">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#238636] to-[#2ea043] flex items-center justify-center text-white text-lg font-bold">
                            JD
                          </div>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#22c55e] border-2 border-[#161b22] rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">John Doe</p>
                          <p className="text-[#8b949e] text-xs"> {user?.email || 'johndoe@gmail.com'} </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#c9d1d9] hover:bg-[#1c2128] hover:text-white transition text-sm w-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        My Profile
                      </button>
                      <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#c9d1d9] hover:bg-[#1c2128] hover:text-white transition text-sm w-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Balance: ${wallet?.wallet_balance ? parseFloat(wallet.wallet_balance).toFixed(2) : '0.00'}
                      </button>
                      <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#c9d1d9] hover:bg-[#1c2128] hover:text-white transition text-sm w-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Settings
                      </button>
                    </div>

                    <div className="p-2 border-t border-[#30363d]">
                      <button 
                        onClick={handleLogout}
                        disabled={loggingOut}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#ef4444] hover:bg-[#1c2128] transition text-sm w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loggingOut ? (
                          <>
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Logging out...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                            </svg>
                            Logout
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;