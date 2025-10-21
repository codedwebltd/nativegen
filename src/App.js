import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import ReferralSection from './components/ReferralSection';
import BalanceSection from './components/BalanceSection';
import ProjectsList from './components/ProjectsList';
import AllProjects from './pages/AllProjects';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import { DashboardShimmer, FullDashboardShimmer } from './components/Shimmer';
import authService from './services/authService';
import CreateProject from './components/CreateProject/CreateProject';

function Footer() {
  return (
    <footer className="bg-[#161b22] border-t border-[#30363d] mt-12">
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[#58a6ff] font-bold text-lg">&lt;</span>
            <span className="text-white font-semibold">NativeGen</span>
            <span className="text-[#58a6ff] font-bold text-lg">/&gt;</span>
            <span className="text-[#8b949e] text-sm ml-2">© All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-[#8b949e] text-sm">
            <span>Designed with</span>
            <span className="text-[#ef4444]">♥</span>
            <span>by</span>
            <a href="#" className="text-[#58a6ff] hover:underline font-medium">CodedWeb Ventures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading dashboard data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 1 second shimmer

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DashboardShimmer />;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <Overview />
      <ReferralSection />
      <BalanceSection />
      <ProjectsList />
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page (Landing Page) - Main Index */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={
          authService.isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Login />
        } />

        {/* Register Page */}
        <Route path="/register" element={
          authService.isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Register />
        } />

        {/* Create Project Page - Protected */}
    <Route path="/create-project" element={
  <PrivateRoute>
    <div className="bg-[#0d1117] min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <main className="md:ml-64 flex flex-col min-h-screen">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1">
          <CreateProject />
        </div>
        <Footer />
      </main>
    </div>
  </PrivateRoute>
} />

        {/* Dashboard Routes - Protected */}
        <Route path="/dashboard/*" element={
          <PrivateRoute>
            <div className="bg-[#0d1117] min-h-screen">
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

              {sidebarOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                  onClick={() => setSidebarOpen(false)}
                ></div>
              )}

              <main className="md:ml-64 flex flex-col min-h-screen">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <div className="flex-1">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="projects/all" element={<div className="p-4 sm:p-6 lg:p-8"><AllProjects /></div>} />
                  </Routes>
                </div>
                <Footer />
              </main>
            </div>
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;