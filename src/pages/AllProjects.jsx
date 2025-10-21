import { useState, useEffect } from 'react';
import { DashboardShimmer } from '../components/Shimmer';

function AllProjects() {
  // ALL HOOKS AT THE TOP - BEFORE ANY RETURNS!
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // useEffect(() => {
  //   // Simulate loading - replace with real API call later
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // // NOW you can do conditional returns
  // if (loading) {
  //   return <DashboardShimmer />;
  // }
  

  const projects = [
    { id: 1, name: 'EcommerceApp', platform: 'Android • Java', description: 'Full e-commerce application with product catalog, cart, and checkout', status: 'completed', icon: '👥', iconBg: 'bg-[#238636]', date: 'Oct 15, 2024' },
    { id: 2, name: 'FitnessTracker', platform: 'Android • Kotlin', description: 'Workout tracking app with calorie counter and progress analytics', status: 'generating', icon: '⏱️', iconBg: 'bg-[#fbbf24]', progress: 67, date: 'Oct 18, 2024' },
    { id: 3, name: 'WeatherApp', platform: 'iOS • SwiftUI', description: 'Beautiful weather forecasts with location services and radar maps', status: 'completed', icon: '☁️', iconBg: 'bg-[#a78bfa]', date: 'Oct 12, 2024' },
    { id: 4, name: 'MusicPlayer', platform: 'Android • Kotlin', description: 'Modern music player with playlists, equalizer, and streaming support', status: 'generating', icon: '🎵', iconBg: 'bg-[#fbbf24]', progress: 42, date: 'Oct 19, 2024' },
    { id: 5, name: 'TaskManager', platform: 'Web • React', description: 'Project management tool with kanban boards and team collaboration', status: 'completed', icon: '📋', iconBg: 'bg-[#22c55e]', date: 'Oct 10, 2024' },
    { id: 6, name: 'ChatApp', platform: 'Android • Kotlin', description: 'Real-time messaging with end-to-end encryption', status: 'failed', icon: '💬', iconBg: 'bg-[#ef4444]', date: 'Oct 8, 2024' },
    { id: 7, name: 'PhotoEditor', platform: 'iOS • Swift', description: 'Professional photo editing with filters and effects', status: 'completed', icon: '🎨', iconBg: 'bg-[#a78bfa]', date: 'Oct 5, 2024' },
    { id: 8, name: 'NewsReader', platform: 'Android • Java', description: 'Personalized news aggregator with AI recommendations', status: 'completed', icon: '📰', iconBg: 'bg-[#58a6ff]', date: 'Oct 1, 2024' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: projects.length,
    generating: projects.filter(p => p.status === 'generating').length,
    completed: projects.filter(p => p.status === 'completed').length,
    failed: projects.filter(p => p.status === 'failed').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">All Projects</h1>
          <p className="text-[#8b949e] text-sm mt-1">Manage and view all your generated projects</p>
        </div>
        <button className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          New Project
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button onClick={() => setFilterStatus('all')} className={`p-4 rounded-lg border transition-all text-left ${filterStatus === 'all' ? 'bg-[#58a6ff] bg-opacity-10 border-[#58a6ff]' : 'bg-[#161b22] border-[#30363d] hover:border-[#58a6ff]'}`}>
          <p className="text-[#8b949e] text-xs mb-1">All Projects</p>
          <p className="text-white text-2xl font-bold">{statusCounts.all}</p>
        </button>
        <button onClick={() => setFilterStatus('generating')} className={`p-4 rounded-lg border transition-all text-left ${filterStatus === 'generating' ? 'bg-[#fbbf24] bg-opacity-10 border-[#fbbf24]' : 'bg-[#161b22] border-[#30363d] hover:border-[#fbbf24]'}`}>
          <p className="text-[#8b949e] text-xs mb-1">In Progress</p>
          <p className="text-white text-2xl font-bold">{statusCounts.generating}</p>
        </button>
        <button onClick={() => setFilterStatus('completed')} className={`p-4 rounded-lg border transition-all text-left ${filterStatus === 'completed' ? 'bg-[#22c55e] bg-opacity-10 border-[#22c55e]' : 'bg-[#161b22] border-[#30363d] hover:border-[#22c55e]'}`}>
          <p className="text-[#8b949e] text-xs mb-1">Completed</p>
          <p className="text-white text-2xl font-bold">{statusCounts.completed}</p>
        </button>
        <button onClick={() => setFilterStatus('failed')} className={`p-4 rounded-lg border transition-all text-left ${filterStatus === 'failed' ? 'bg-[#ef4444] bg-opacity-10 border-[#ef4444]' : 'bg-[#161b22] border-[#30363d] hover:border-[#ef4444]'}`}>
          <p className="text-[#8b949e] text-xs mb-1">Failed</p>
          <p className="text-white text-2xl font-bold">{statusCounts.failed}</p>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8b949e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search projects by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-[#30363d] flex items-center justify-between">
          <h2 className="text-white font-semibold">Projects ({filteredProjects.length})</h2>
          <select className="bg-[#0d1117] border border-[#30363d] text-[#8b949e] text-xs rounded px-3 py-1.5 focus:outline-none focus:border-[#58a6ff]">
            <option>Sort by: Latest</option>
            <option>Sort by: Name</option>
            <option>Sort by: Status</option>
          </select>
        </div>

        <div className="max-h-[600px] overflow-y-auto">
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center">
              <svg className="w-16 h-16 text-[#30363d] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <p className="text-[#8b949e] text-sm">No projects found</p>
            </div>
          ) : (
            <div className="divide-y divide-[#30363d]">
              {filteredProjects.map((project) => (
                <div key={project.id} className="p-4 hover:bg-[#0d1117] transition">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${project.iconBg} bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}>
                      {project.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-white font-semibold">{project.name}</h3>
                          <p className="text-[#8b949e] text-xs mt-0.5">{project.platform}</p>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' ? 'bg-[#22c55e] bg-opacity-10 text-[#22c55e] border border-[#22c55e] border-opacity-20' :
                          project.status === 'generating' ? 'bg-[#fbbf24] bg-opacity-10 text-[#fbbf24] border border-[#fbbf24] border-opacity-20' :
                          'bg-[#ef4444] bg-opacity-10 text-[#ef4444] border border-[#ef4444] border-opacity-20'
                        }`}>
                          {project.status === 'completed' ? 'Completed' : project.status === 'generating' ? 'Generating' : 'Failed'}
                        </span>
                      </div>
                      
                      <p className="text-[#8b949e] text-sm mb-3">{project.description}</p>

                      {project.progress && (
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="text-[#8b949e]">Progress</span>
                            <span className="text-[#fbbf24] font-medium">{project.progress}%</span>
                          </div>
                          <div className="h-1.5 bg-[#30363d] rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]" style={{ width: `${project.progress}%` }}></div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#8b949e]">{project.date}</span>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-medium">
                            View
                          </button>
                          {project.status === 'completed' && (
                            <button className="px-3 py-1.5 border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] hover:text-white rounded text-xs">
                              Download
                            </button>
                          )}
                          <button className="px-3 py-1.5 border border-[#30363d] hover:border-[#ef4444] hover:text-[#ef4444] text-[#c9d1d9] rounded text-xs">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;