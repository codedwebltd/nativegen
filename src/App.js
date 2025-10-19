// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import ReferralSection from './components/ReferralSection';
import BalanceSection from './components/BalanceSection';
import ProjectsList from './components/ProjectsList';
import AllProjects from './pages/AllProjects';

function Dashboard() {
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
      <div className="bg-[#0d1117] min-h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        
        <main className="md:ml-64">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects/all" element={<div className="p-4 sm:p-6 lg:p-8"><AllProjects /></div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;