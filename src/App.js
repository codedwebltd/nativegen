import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
    <BrowserRouter>
      <div className="bg-[#0d1117] min-h-screen">
        <Sidebar />
        <main className="ml-64">
          <Header />
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