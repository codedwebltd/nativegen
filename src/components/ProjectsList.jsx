function ProjectsList() {

  const projects = [
    {
      id: 1,
      name: 'EcommerceApp',
      platform: 'Android • Java',
      description: 'Full e-commerce application with product catalog, cart, and checkout',
      status: 'completed',
      icon: '👥',
      iconBg: 'bg-[#238636]',
      progress: null
    },
    {
      id: 2,
      name: 'FitnessTracker',
      platform: 'Android • Kotlin',
      description: 'Workout tracking app with calorie counter and progress analytics',
      status: 'generating',
      icon: '⏱️',
      iconBg: 'bg-[#fbbf24]',
      progress: 67
    },
    {
      id: 3,
      name: 'WeatherApp',
      platform: 'iOS • SwiftUI',
      description: 'Beautiful weather forecasts with location services and radar maps',
      status: 'completed',
      icon: '☁️',
      iconBg: 'bg-[#a78bfa]',
      progress: null
    },
    {
      id: 4,
      name: 'MusicPlayer',
      platform: 'Android • Kotlin',
      description: 'Modern music player with playlists, equalizer, and streaming support',
      status: 'generating',
      icon: '🎵',
      iconBg: 'bg-[#fbbf24]',
      progress: 42
    }
  ];

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Recent Projects</h2>
        <span className="text-xs text-[#8b949e]">Showing 4 of 12 projects</span>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 hover:border-[#58a6ff] transition">
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 ${project.iconBg} bg-opacity-20 border border-${project.iconBg.replace('bg-', '')} rounded-lg flex items-center justify-center flex-shrink-0 text-xl`}>
                {project.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-sm">{project.name}</h3>
                    <p className="text-[#8b949e] text-xs mt-0.5">{project.platform}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-[#22c55e] bg-opacity-10 text-[#22c55e] border border-[#22c55e] border-opacity-20' 
                      : 'bg-[#fbbf24] bg-opacity-10 text-[#fbbf24] border border-[#fbbf24] border-opacity-20'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'Generating'}
                  </span>
                </div>
                <p className="text-[#8b949e] text-xs mb-3">{project.description}</p>

                {project.progress && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[#8b949e]">Progress</span>
                      <span className="text-[#fbbf24] font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-1 bg-[#30363d] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] transition-all" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {project.status === 'completed' ? (
                    <>
                      <button className="px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-medium flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download
                      </button>
                      <button className="px-3 py-1.5 border border-[#30363d] hover:border-[#58a6ff] rounded text-xs text-[#c9d1d9] flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-medium flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View Progress
                      </button>
                      <button className="px-3 py-1.5 border border-[#30363d] hover:border-[#ef4444] hover:text-[#ef4444] rounded text-xs text-[#c9d1d9] flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Cancel
                      </button>
                    </>
                  )}
                  <button className="px-3 py-1.5 border border-[#30363d] hover:border-[#ef4444] hover:text-[#ef4444] rounded text-xs text-[#c9d1d9] flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between pt-4 border-t border-[#30363d]">
        <p className="text-xs text-[#8b949e]">1 of 3</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 border border-[#30363d] rounded text-xs text-[#8b949e] hover:border-[#58a6ff] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Previous
          </button>
          <button className="px-3 py-1.5 bg-[#238636] text-white rounded text-xs font-medium">1</button>
          <button className="px-3 py-1.5 border border-[#30363d] rounded text-xs text-[#c9d1d9] hover:border-[#58a6ff] hover:text-white">2</button>
          <button className="px-3 py-1.5 border border-[#30363d] rounded text-xs text-[#c9d1d9] hover:border-[#58a6ff] hover:text-white">3</button>
          <button className="px-3 py-1.5 border border-[#30363d] rounded text-xs text-[#c9d1d9] hover:border-[#58a6ff] hover:text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;