import { useState } from 'react';

// Step 11: Import Project Component - REAL WORKING VERSION
function Step11Import({ data, updateData }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [parsing, setParsing] = useState(false);
  const [parseSuccess, setParseSuccess] = useState(false);
  const [parseError, setParseError] = useState(null);
  const [importedData, setImportedData] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file) => {
    // Check file type
    const allowedTypes = ['.json'];
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    
    if (!allowedTypes.includes(fileExtension)) {
      setParseError('Please upload a .json file');
      return;
    }

    setUploadedFile(file);
    setParseError(null);
    setParsing(true);

    try {
      // Read the file
      const fileContent = await file.text();
      
      // Parse JSON
      const parsedData = JSON.parse(fileContent);
      
      // Validate the structure
      if (!parsedData.data || !parsedData.step) {
        throw new Error('Invalid project file format');
      }

      // Simulate some processing time
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Store imported data
      setImportedData(parsedData.data);
      
      // Success!
      setParsing(false);
      setParseSuccess(true);
      updateData('importProject', true);

      // Show confirmation before applying
      // (User will click "Apply" button to actually load the data)
      
    } catch (error) {
      console.error('Parse error:', error);
      setParsing(false);
      setParseError(error.message || 'Failed to parse project file');
      setUploadedFile(null);
    }
  };

  const applyImportedData = () => {
    if (!importedData) return;

    // Apply all imported data to the project
    Object.keys(importedData).forEach(key => {
      if (key === 'basics') {
        updateData('basics.name', importedData.basics.name || '');
        updateData('basics.description', importedData.basics.description || '');
        updateData('basics.icon', importedData.basics.icon || null);
      } else if (key === 'platforms') {
        updateData('platforms', importedData.platforms || []);
      } else if (key === 'configs') {
        updateData('configs', importedData.configs || {});
      } else if (key === 'appType') {
        updateData('appType', importedData.appType || '');
      } else if (key === 'screens') {
        updateData('screens', importedData.screens || []);
      } else if (key === 'database') {
        updateData('database', importedData.database || {});
      } else if (key === 'api') {
        updateData('api', importedData.api || {});
      } else if (key === 'signing') {
        updateData('signing', importedData.signing || {});
      } else if (key === 'theme') {
        updateData('theme', importedData.theme || {});
      } else if (key === 'features') {
        updateData('features', importedData.features || {});
      }
    });

    alert('Project imported successfully! You can now review and modify your configuration.');
  };

  const removeFile = () => {
    setUploadedFile(null);
    setParseSuccess(false);
    setParseError(null);
    setImportedData(null);
    updateData('importFile', null);
    updateData('importProject', false);
  };

  const getImportPreview = () => {
    if (!importedData) return null;

    return {
      name: importedData.basics?.name || 'Unknown',
      platforms: importedData.platforms?.join(', ') || 'None',
      appType: importedData.appType || 'Not set',
      features: Object.keys(importedData.features || {}).filter(k => importedData.features[k]).join(', ') || 'None'
    };
  };

  const preview = getImportPreview();

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-[#58a6ff] to-[#1f6feb] rounded-xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="text-5xl">📦</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Import Existing Project</h2>
            <p className="text-white/90">
              Upload a previously saved project configuration to continue where you left off
            </p>
          </div>
        </div>
      </div>

      {/* Skip Import Option */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Skip Import</h3>
            <p className="text-sm text-[#8b949e]">
              Continue with your current configuration without importing
            </p>
          </div>
          <button
            onClick={() => {
              updateData('importProject', false);
              removeFile();
            }}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              !data.importProject
                ? 'bg-[#238636] text-white'
                : 'border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff]'
            }`}
          >
            {data.importProject ? 'Skip Import' : 'Using Current Config'}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {parseError && (
        <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#ef4444] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h4 className="text-[#ef4444] font-medium mb-1">Import Failed</h4>
              <p className="text-sm text-[#ef4444]/80">{parseError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Upload Area */}
      {!uploadedFile && !parsing && !parseSuccess && (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`bg-[#161b22] border-2 border-dashed rounded-xl p-12 text-center transition ${
            dragActive
              ? 'border-[#58a6ff] bg-[#58a6ff]/5'
              : 'border-[#30363d] hover:border-[#58a6ff]/50'
          }`}
        >
          <input
            type="file"
            accept=".json"
            onChange={handleFileInput}
            className="hidden"
            id="import-file"
          />
          
          <label htmlFor="import-file" className="cursor-pointer">
            <svg className="w-16 h-16 text-[#6e7681] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">
              Drop your project file here
            </h3>
            <p className="text-[#8b949e] mb-4">
              or click to browse
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              Choose File
            </div>
            <p className="text-xs text-[#6e7681] mt-4">
              Supports: .json files exported from NativeGen (max 10MB)
            </p>
          </label>
        </div>
      )}

      {/* Parsing State */}
      {parsing && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-[#58a6ff]/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#58a6ff] border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Parsing Project File...</h3>
          <p className="text-[#8b949e]">
            Reading configuration from {uploadedFile?.name}
          </p>
        </div>
      )}

      {/* Success State */}
      {parseSuccess && uploadedFile && preview && (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">Project File Parsed Successfully!</h3>
              <p className="text-sm text-[#8b949e] mb-4">
                Configuration loaded from <span className="text-white">{uploadedFile.name}</span>
              </p>
              
              {/* File Details */}
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-[#8b949e]">File Name:</span>
                    <p className="text-white font-medium">{uploadedFile.name}</p>
                  </div>
                  <div>
                    <span className="text-[#8b949e]">File Size:</span>
                    <p className="text-white font-medium">
                      {(uploadedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <div>
                    <span className="text-[#8b949e]">Format:</span>
                    <p className="text-white font-medium">JSON Config</p>
                  </div>
                  <div>
                    <span className="text-[#8b949e]">Status:</span>
                    <p className="text-[#22c55e] font-medium">✓ Valid</p>
                  </div>
                </div>
              </div>

              {/* Imported Data Preview */}
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 mb-4">
                <h4 className="text-white font-medium mb-3 text-sm">Configuration Preview:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8b949e]">Project Name:</span>
                    <span className="text-white">{preview.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8b949e]">Platforms:</span>
                    <span className="text-white capitalize">{preview.platforms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8b949e]">App Type:</span>
                    <span className="text-white capitalize">{preview.appType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#8b949e]">Features:</span>
                    <span className="text-white capitalize">{preview.features || 'None'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
  onClick={() => {
    // Save imported data to sessionStorage
    sessionStorage.setItem('nativegen_project_draft', JSON.stringify({
      step: 1,
      data: importedData,
      savedAt: new Date().toISOString()
    }));
    alert('Project imported! Refreshing page...');
    window.location.reload();
  }}
  className="flex-1 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-medium transition"
>
  Apply & Reload
</button>

                <button
                  onClick={removeFile}
                  className="px-4 py-2 border border-[#30363d] rounded-lg text-[#c9d1d9] hover:border-[#ef4444] hover:text-[#ef4444] transition text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    {/* How to Export */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">How to Get a Project File</h3>
        
        <div className="space-y-3 text-sm text-[#8b949e]">
          <p>To export your current project configuration:</p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Complete your project setup in the wizard</li>
            <li>Click the "Export Project" button at the bottom of any step</li>
            <li>A .json file will be downloaded to your device</li>
            <li>Save this file to import your project later</li>
          </ol>
          <p className="text-[#22c55e] text-xs mt-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Export feature is now available! Click "Export Project" at the bottom navigation.
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-[#1f6feb]/10 border border-[#1f6feb]/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-[#58a6ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h4 className="text-white font-medium mb-1">About Project Import</h4>
            <p className="text-sm text-[#8b949e]">
              Import allows you to restore a previously saved project configuration. Only .json files exported from NativeGen are supported. All your settings will be restored from the imported file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step11Import;