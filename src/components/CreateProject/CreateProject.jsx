import { useState, useEffect } from 'react';

// Import Step Components
import Step4AppType from './steps/Step4AppType';
import Step5Database from './steps/Step5Database';
import Step6API from './steps/Step6API';
import Step7Signing from './steps/Step7Signing';
import Step8Theme from './steps/Step8Theme';
import Step9Features from './steps/Step9Features';
import Step10AI from './steps/Step10AI';
import Step11Import from './steps/Step11Import';
import Step12Review from './steps/Step12Review';

function CreateProject() {
    // Session storage key
    const STORAGE_KEY = 'nativegen_project_draft';

    // Current step state
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 12;

    // Project data state
    const [projectData, setProjectData] = useState({
        // Step 1: Basics
        basics: {
            name: '',
            description: '',
            icon: null
        },
        // Step 2: Platforms
        platforms: [],
        // Step 3: Configurations (dynamic per platform)
        configs: {
            android: {
                targetApi: '33',
                minSdk: '21',
                language: 'java',
                packageName: ''
            },
            ios: {
                targetVersion: '16.0',
                language: 'swift',
                bundleId: ''
            },
            web: {
                framework: 'laravel',
                database: 'mysql',
                cssFramework: 'tailwind'
            },
            desktop: {
                platforms: [],
                framework: 'electron'
            },
            template: {
                cssFramework: 'tailwind',
                pages: []
            }
        },
        // Step 4: App Type
        appType: '',
        screens: [],
        // Step 5: Database
        database: {
            type: 'room',
            entities: []
        },
        // Step 6: API
        api: {
            enabled: false,
            option: 'manual',
            type: 'rest',
            docsUrl: '',
            contactEmail: '',
            createApi: false
        },
        // Step 7: Signing
        signing: {
            enabled: false,
            option: 'auto',
            autoConsent: false,
            certificate: null,
            autoGenDetails: {
                firstName: '',
                lastName: '',
                orgUnit: '',
                organization: '',
                city: '',
                state: '',
                country: '',
                validity: '25'
            }
        },
        // Step 8: Theme
        theme: {
            primaryColor: '#6200EE',
            secondaryColor: '#03DAC6',
            darkMode: false
        },
        // Step 9: Advanced Features
        features: {
            auth: false,
            pushNotifications: false,
            analytics: false,
            payments: false,
            maps: false,
            camera: false
        },
        // Step 10: AI Suggestions
        aiSuggestions: [],
        // Step 11: Import
        importProject: false,
        importFile: null,
        // Step 12: Review
        agreedToTerms: false
    });

    // Load from sessionStorage on mount
    useEffect(() => {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setProjectData(parsed.data);
                setCurrentStep(parsed.step);
            } catch (e) {
                console.error('Failed to load draft:', e);
            }
        }
    }, []);

    // Save to sessionStorage whenever data changes
    useEffect(() => {
        const saveData = {
            step: currentStep,
            data: projectData,
            savedAt: new Date().toISOString()
        };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    }, [projectData, currentStep]);

    // Auto-generate package name from app name
    useEffect(() => {
        if (projectData.basics.name && projectData.platforms.includes('android')) {
            const sanitized = projectData.basics.name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '');
            const packageName = `com.user.${sanitized}`;
            setProjectData(prev => ({
                ...prev,
                configs: {
                    ...prev.configs,
                    android: {
                        ...prev.configs.android,
                        packageName
                    }
                }
            }));
        }

        if (projectData.basics.name && projectData.platforms.includes('ios')) {
            const sanitized = projectData.basics.name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '');
            const bundleId = `com.user.${sanitized}`;
            setProjectData(prev => ({
                ...prev,
                configs: {
                    ...prev.configs,
                    ios: {
                        ...prev.configs.ios,
                        bundleId
                    }
                }
            }));
        }
    }, [projectData.basics.name, projectData.platforms]);

    // Step titles
    const stepTitles = [
        'Project Basics',
        'Platform Selection',
        'Platform Configuration',
        'App Type & Features',
        'Database & Entities',
        'API Integration',
        'Signing & Compilation',
        'Theme & Styling',
        'Advanced Features',
        'AI Suggestions',
        'Import Project',
        'Review & Generate'
    ];

    // Navigation handlers
    const goToNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
            window.scrollTo(0, 0);
        }
    };

    const goToPrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const goToStep = (step) => {
        setCurrentStep(step);
        window.scrollTo(0, 0);
    };

    // Update project data helper
    const updateData = (path, value) => {
        setProjectData(prev => {
            const newData = JSON.parse(JSON.stringify(prev));
            const keys = path.split('.');
            let current = newData;

            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }

            current[keys[keys.length - 1]] = value;
            return newData;
        });
    };

    // Progress bar percentage
    const progress = (currentStep / totalSteps) * 100;

    // Calculate pricing
    const calculatePricing = () => {
        let total = 0;
        const breakdown = [];

        if (projectData.platforms.includes('android')) {
            total += 49;
            breakdown.push({ name: 'Android App', price: 49 });
        }
        if (projectData.platforms.includes('ios')) {
            total += 79;
            breakdown.push({ name: 'iOS App', price: 79 });
        }
        if (projectData.platforms.includes('web')) {
            total += 39;
            breakdown.push({ name: 'Web App', price: 39 });
        }
        if (projectData.platforms.includes('desktop')) {
            total += 59;
            breakdown.push({ name: 'Desktop App', price: 59 });
        }
        if (projectData.platforms.includes('template')) {
            total += 99;
            breakdown.push({ name: 'UI/UX Template', price: 99 });
        }

        // Advanced features pricing
        if (projectData.features.auth) {
            total += 29;
            breakdown.push({ name: 'Authentication', price: 29 });
        }
        if (projectData.features.pushNotifications) {
            total += 19;
            breakdown.push({ name: 'Push Notifications', price: 19 });
        }
        if (projectData.features.analytics) {
            total += 15;
            breakdown.push({ name: 'Analytics', price: 15 });
        }
        if (projectData.features.payments) {
            total += 49;
            breakdown.push({ name: 'Payment Integration', price: 49 });
        }
        if (projectData.features.maps) {
            total += 25;
            breakdown.push({ name: 'Maps Integration', price: 25 });
        }
        if (projectData.features.camera) {
            total += 15;
            breakdown.push({ name: 'Camera Features', price: 15 });
        }

        return { total, breakdown };
    };

    const pricing = calculatePricing();

    return (
        <div className="min-h-screen bg-[#0d1117] py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex gap-6">
                    {/* Main Content Area */}
                    <div className="flex-1 max-w-3xl">

                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-[#8b949e]">
                                    Step {currentStep} of {totalSteps}
                                </span>
                                <span className="text-sm text-[#8b949e]">
                                    {Math.round(progress)}% Complete
                                </span>
                            </div>
                            <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#58a6ff] to-[#238636] transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <h1 className="text-2xl font-bold text-white mt-4">
                                {stepTitles[currentStep - 1]}
                            </h1>
                            <p className="text-[#8b949e] text-sm mt-1">
                                {currentStep === 1 && "Let's start with the basics of your project"}
                                {currentStep === 2 && "Choose which platforms you want to target"}
                                {currentStep === 3 && "Configure platform-specific settings"}
                                {currentStep === 4 && "Select your app type and features"}
                                {currentStep === 5 && "Define your database structure"}
                                {currentStep === 6 && "Optional: Add API integration"}
                                {currentStep === 7 && "Configure app signing and compilation"}
                                {currentStep === 8 && "Customize your app's appearance"}
                                {currentStep === 9 && "Add advanced features (Premium)"}
                                {currentStep === 10 && "Get AI-powered recommendations"}
                                {currentStep === 11 && "Import from existing project"}
                                {currentStep === 12 && "Review and confirm your project"}
                            </p>
                        </div>

                        {/* Step Content */}
                        <div className="mb-8">
                            {currentStep === 1 && (
                                <Step1ProjectBasics
                                    data={projectData.basics}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 2 && (
                                <Step2PlatformSelection
                                    data={projectData.platforms}
                                    updateData={updateData}
                                />
                            )}

                            {currentStep === 3 && (
                                <Step3PlatformConfig
                                    platforms={projectData.platforms}
                                    configs={projectData.configs}
                                    appName={projectData.basics.name}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 4 && (
                                <Step4AppType
                                    data={projectData}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 5 && (
                                <Step5Database
                                    data={projectData.database}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 6 && (
                                <Step6API
                                    data={projectData.api}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 7 && (
                                <Step7Signing
                                    data={projectData.signing}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 8 && (
                                <Step8Theme
                                    data={projectData.theme}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 9 && (
                                <Step9Features
                                    data={projectData.features}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 10 && (
                                <Step10AI
                                    projectData={projectData}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 11 && (
                                <Step11Import
                                    data={projectData}
                                    updateData={updateData}
                                />
                            )}
                            {currentStep === 12 && (
                                <Step12Review
                                    projectData={projectData}
                                    pricing={pricing}
                                    updateData={updateData}
                                />
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between sticky bottom-0 bg-[#0d1117] py-4 border-t border-[#30363d]">
                            <button
                                onClick={goToPrevStep}
                                disabled={currentStep === 1}
                                className="px-6 py-3 border border-[#30363d] rounded-lg text-[#c9d1d9] hover:border-[#58a6ff] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                ← Back
                            </button>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        alert('Draft saved successfully!');
                                    }}
                                    className="px-4 py-3 border border-[#30363d] rounded-lg text-[#c9d1d9] hover:border-[#58a6ff] hover:text-white transition text-sm"
                                >
                                    Save Draft
                                </button>
                                <button
                                    onClick={goToNextStep}
                                    disabled={currentStep === totalSteps}
                                    className="px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {currentStep === totalSteps ? 'Generate Project' : 'Next →'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* BATCH 1 ENDS HERE - Right Sidebar will be in BATCH 2 */}
                    {/* Right Sidebar - Pricing & Summary */}
                    <div className="hidden lg:block w-80 flex-shrink-0">
                        <div className="sticky top-8 space-y-4">

                            {/* Pricing Card */}
                            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Project Cost
                                </h3>

                                <div className="space-y-3 mb-4">
                                    {pricing.breakdown.length > 0 ? (
                                        <>
                                            {pricing.breakdown.map((item, idx) => (
                                                <div key={idx} className="flex items-center justify-between text-sm">
                                                    <span className="text-[#8b949e]">{item.name}</span>
                                                    <span className="text-[#22c55e] font-medium">${item.price}</span>
                                                </div>
                                            ))}
                                        </>
                                    ) : (
                                        <div className="text-center py-4">
                                            <p className="text-xs text-[#6e7681]">Select platforms to see pricing</p>
                                        </div>
                                    )}
                                </div>

                                {pricing.breakdown.length > 0 && (
                                    <>
                                        <div className="border-t border-[#30363d] pt-3 mb-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white font-semibold">Total</span>
                                                <span className="text-[#22c55e] font-bold text-xl">
                                                    ${pricing.total}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="text-xs text-[#6e7681] space-y-1">
                                            <p>✓ Full source code</p>
                                            <p>✓ 7-day preview</p>
                                            <p>✓ Free updates (30 days)</p>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Progress Summary Card */}
                            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                                <h3 className="text-sm font-semibold text-white mb-4">Configuration Progress</h3>

                                <div className="space-y-3">
                                    {[
                                        { step: 1, label: 'Project basics', completed: projectData.basics.name },
                                        { step: 2, label: 'Platform selection', completed: projectData.platforms.length > 0 },
                                        { step: 3, label: 'Configuration', completed: currentStep > 3 },
                                        { step: 4, label: 'App type & features', completed: projectData.appType },
                                        { step: 5, label: 'Database setup', completed: currentStep > 5 },
                                        { step: 6, label: 'API integration', completed: currentStep > 6 },
                                    ].map(item => (
                                        <div key={item.step} className="flex items-center gap-3">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.completed ? 'bg-[#22c55e]' : 'bg-[#21262d]'
                                                }`}>
                                                {item.completed ? (
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                ) : (
                                                    <span className="text-xs text-[#6e7681]">{item.step}</span>
                                                )}
                                            </div>
                                            <span className={`text-sm ${item.completed ? 'text-white' : 'text-[#8b949e]'}`}>
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Tips Card */}
                            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#58a6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Quick Tip
                                </h3>
                                <p className="text-xs text-[#8b949e] leading-relaxed">
                                    {currentStep === 1 && "Choose a clear, memorable name. This will be used to generate package names."}
                                    {currentStep === 2 && "You can select multiple platforms. Each platform has its own base price."}
                                    {currentStep === 3 && "Platform configurations will be auto-filled based on your project name."}
                                    {currentStep === 4 && "Select an app type to get pre-configured screens and features."}
                                    {currentStep === 5 && "Database entities define your app's data structure."}
                                    {currentStep === 6 && "API integration is optional but recommended for dynamic apps."}
                                    {currentStep === 7 && "We can auto-generate signing certificates for you."}
                                    {currentStep === 8 && "Choose colors that match your brand identity."}
                                    {currentStep === 9 && "Premium features add extra functionality to your app."}
                                    {currentStep === 10 && "Our AI analyzes your project and suggests improvements."}
                                    {currentStep === 11 && "Import existing projects to continue where you left off."}
                                    {currentStep === 12 && "Review everything before generating your project."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
// BATCH 2 ENDS HERE - Step Components will be in BATCH 3
// BATCH 3 - Step 1 & Step 2 Components

// Step 1: Project Basics Component
function Step1ProjectBasics({ data, updateData }) {
    const [iconPreview, setIconPreview] = useState(null);

    useEffect(() => {
        if (data.icon) {
            setIconPreview(data.icon);
        }
    }, [data.icon]);

    const handleIconUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setIconPreview(reader.result);
                updateData('basics.icon', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4">App Identity</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                        App Name <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => updateData('basics.name', e.target.value)}
                        placeholder="Enter your app name"
                        className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                        required
                    />
                    {data.name.length > 0 && data.name.length < 3 && (
                        <p className="text-xs text-[#ef4444] mt-1">App name must be at least 3 characters</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                        App Description <span className="text-[#8b949e]">(Optional)</span>
                    </label>
                    <textarea
                        value={data.description}
                        onChange={(e) => updateData('basics.description', e.target.value)}
                        placeholder="Briefly describe what your app does..."
                        rows="4"
                        maxLength="500"
                        className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition resize-none"
                    ></textarea>
                    <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-[#8b949e]">Help us understand your project better</p>
                        <span className="text-xs text-[#8b949e]">{data.description.length}/500</span>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                        App Icon <span className="text-[#8b949e]">(Optional)</span>
                    </label>
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-xl bg-[#0d1117] border-2 border-dashed border-[#30363d] flex items-center justify-center overflow-hidden">
                            {iconPreview ? (
                                <img src={iconPreview} alt="App icon" className="w-full h-full object-cover" />
                            ) : (
                                <svg className="w-8 h-8 text-[#6e7681]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                            )}
                        </div>

                        <label className="cursor-pointer">
                            <div className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-sm font-medium transition">
                                Upload Icon
                            </div>
                            <input
                                type="file"
                                accept="image/png,image/jpeg,image/jpg"
                                onChange={handleIconUpload}
                                className="hidden"
                            />
                        </label>

                        <div className="flex-1">
                            <p className="text-xs text-[#8b949e]">
                                Upload a square image (PNG or JPG)<br />
                                Recommended: 1024x1024px
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Step 2: Platform Selection Component
function Step2PlatformSelection({ data, updateData }) {
    const platforms = [
        {
            id: 'android',
            name: 'Android',
            icon: '🤖',
            description: 'Native Java/Kotlin apps',
            basePrice: 49,
            active: true
        },
        {
            id: 'ios',
            name: 'iOS',
            icon: '🍎',
            description: 'Native Swift/Obj-C apps',
            basePrice: 79,
            active: true
        },
        {
            id: 'web',
            name: 'Web App',
            icon: '🌐',
            description: 'Laravel/PHP web apps',
            basePrice: 39,
            active: true
        },
        {
            id: 'desktop',
            name: 'Desktop',
            icon: '💻',
            description: 'Electron/Tauri apps',
            basePrice: 59,
            active: true
        },
        {
            id: 'template',
            name: 'UI/UX Template',
            icon: '🎨',
            description: 'HTML/Tailwind templates',
            basePrice: 99,
            active: true
        }
    ];

    const togglePlatform = (platformId) => {
        const newPlatforms = data.includes(platformId)
            ? data.filter(p => p !== platformId)
            : [...data, platformId];
        updateData('platforms', newPlatforms);
    };

    const calculateSubtotal = () => {
        return platforms
            .filter(p => data.includes(p.id))
            .reduce((sum, p) => sum + p.basePrice, 0);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platforms.map(platform => (
                    <div
                        key={platform.id}
                        onClick={() => platform.active && togglePlatform(platform.id)}
                        className={`relative bg-[#161b22] border-2 rounded-xl p-6 cursor-pointer transition ${data.includes(platform.id)
                                ? 'border-[#58a6ff] bg-[#58a6ff]/5'
                                : 'border-[#30363d] hover:border-[#58a6ff]/50'
                            } ${!platform.active && 'opacity-50 cursor-not-allowed'}`}
                    >
                        <div className="absolute top-4 right-4">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${data.includes(platform.id)
                                    ? 'bg-[#58a6ff] border-[#58a6ff]'
                                    : 'border-[#30363d]'
                                }`}>
                                {data.includes(platform.id) && (
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                )}
                            </div>
                        </div>

                        <div className="text-4xl mb-3">{platform.icon}</div>
                        <h3 className="text-lg font-semibold text-white mb-1">{platform.name}</h3>
                        <p className="text-sm text-[#8b949e] mb-3">{platform.description}</p>
                        <div className="text-[#22c55e] font-semibold text-sm">
                            ${platform.basePrice} base price
                        </div>
                    </div>
                ))}
            </div>

            {data.length > 0 && (
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-white mb-3">Selected Platforms</h3>
                    <div className="space-y-2">
                        {platforms
                            .filter(p => data.includes(p.id))
                            .map(p => (
                                <div key={p.id} className="flex items-center justify-between text-sm">
                                    <span className="text-[#8b949e]">{p.icon} {p.name}</span>
                                    <span className="text-[#22c55e] font-medium">${p.basePrice}</span>
                                </div>
                            ))}
                        <div className="pt-3 border-t border-[#30363d] flex items-center justify-between">
                            <span className="text-white font-semibold">Subtotal</span>
                            <span className="text-[#22c55e] font-bold text-lg">${calculateSubtotal()}</span>
                        </div>
                    </div>
                </div>
            )}

            {data.length === 0 && (
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-center">
                    <p className="text-[#8b949e]">Select at least one platform to continue</p>
                </div>
            )}
        </div>
    );
}
// BATCH 3 ENDS HERE - Step 3 will be in BATCH 4
// BATCH 4 - Step 3: Platform Configuration Component (Part 1)
// Paste this DIRECTLY after "// BATCH 3 ENDS HERE - Step 3 will be in BATCH 4" in BATCH 3

// Step 3: Platform Configuration Component
function Step3PlatformConfig({ platforms, configs, appName, updateData }) {
    if (platforms.length === 0) {
        return (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-center">
                <svg className="w-16 h-16 text-[#6e7681] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <h3 className="text-lg font-semibold text-white mb-2">No Platforms Selected</h3>
                <p className="text-[#8b949e] mb-4">Please go back and select at least one platform to configure.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Android Configuration */}
            {platforms.includes('android') && (
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🤖</span>
                        <h2 className="text-lg font-semibold text-white">Android Configuration</h2>
                    </div>

                    <div className="space-y-4">
                        {/* Package Name */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Package Name <span className="text-[#ef4444]">*</span>
                            </label>
                            <input
                                type="text"
                                value={configs.android.packageName}
                                onChange={(e) => updateData('configs.android.packageName', e.target.value)}
                                placeholder="com.company.appname"
                                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                            />
                            <p className="text-xs text-[#8b949e] mt-1">
                                Auto-generated from app name. Must be unique on Play Store.
                            </p>
                        </div>

                        {/* Language Selection */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Programming Language
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => updateData('configs.android.language', 'java')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.android.language === 'java'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Java</div>
                                    <div className="text-xs mt-1">Classic & Stable</div>
                                </button>
                                <button
                                    onClick={() => updateData('configs.android.language', 'kotlin')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.android.language === 'kotlin'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Kotlin</div>
                                    <div className="text-xs mt-1">Modern & Concise</div>
                                </button>
                            </div>
                        </div>

                        {/* Target API & Min SDK */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                    Target API Level
                                </label>
                                <select
                                    value={configs.android.targetApi}
                                    onChange={(e) => updateData('configs.android.targetApi', e.target.value)}
                                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                                >
                                    <option value="34">API 34 (Android 14)</option>
                                    <option value="33">API 33 (Android 13)</option>
                                    <option value="32">API 32 (Android 12L)</option>
                                    <option value="31">API 31 (Android 12)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                    Minimum SDK
                                </label>
                                <select
                                    value={configs.android.minSdk}
                                    onChange={(e) => updateData('configs.android.minSdk', e.target.value)}
                                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                                >
                                    <option value="21">API 21 (Android 5.0)</option>
                                    <option value="23">API 23 (Android 6.0)</option>
                                    <option value="24">API 24 (Android 7.0)</option>
                                    <option value="26">API 26 (Android 8.0)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* iOS Configuration */}
            {platforms.includes('ios') && (
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🍎</span>
                        <h2 className="text-lg font-semibold text-white">iOS Configuration</h2>
                    </div>

                    <div className="space-y-4">
                        {/* Bundle ID */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Bundle Identifier <span className="text-[#ef4444]">*</span>
                            </label>
                            <input
                                type="text"
                                value={configs.ios.bundleId}
                                onChange={(e) => updateData('configs.ios.bundleId', e.target.value)}
                                placeholder="com.company.appname"
                                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#6e7681] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                            />
                            <p className="text-xs text-[#8b949e] mt-1">
                                Auto-generated from app name. Must be unique on App Store.
                            </p>
                        </div>

                        {/* Language Selection */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Programming Language
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => updateData('configs.ios.language', 'swift')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.ios.language === 'swift'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Swift</div>
                                    <div className="text-xs mt-1">Modern & Fast</div>
                                </button>
                                <button
                                    onClick={() => updateData('configs.ios.language', 'objective-c')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.ios.language === 'objective-c'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Objective-C</div>
                                    <div className="text-xs mt-1">Legacy Support</div>
                                </button>
                            </div>
                        </div>

                        {/* Target iOS Version */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Minimum iOS Version
                            </label>
                            <select
                                value={configs.ios.targetVersion}
                                onChange={(e) => updateData('configs.ios.targetVersion', e.target.value)}
                                className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition"
                            >
                                <option value="17.0">iOS 17.0+</option>
                                <option value="16.0">iOS 16.0+</option>
                                <option value="15.0">iOS 15.0+</option>
                                <option value="14.0">iOS 14.0+</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {/* BATCH 4 PART 1 ENDS HERE - Web, Desktop, Template configs will be in BATCH 5 */}

            {/* Web App Configuration */}
            {platforms.includes('web') && (
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🌐</span>
                        <h2 className="text-lg font-semibold text-white">Web App Configuration</h2>
                    </div>

                    <div className="space-y-4">
                        {/* Framework Selection */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Backend Framework
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => updateData('configs.web.framework', 'laravel')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.web.framework === 'laravel'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Laravel</div>
                                    <div className="text-xs mt-1">PHP Framework</div>
                                </button>
                                <button
                                    onClick={() => updateData('configs.web.framework', 'symfony')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.web.framework === 'symfony'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Symfony</div>
                                    <div className="text-xs mt-1">Enterprise PHP</div>
                                </button>
                                <button
                                    onClick={() => updateData('configs.web.framework', 'php')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.web.framework === 'php'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Plain PHP</div>
                                    <div className="text-xs mt-1">Pure & Simple</div>
                                </button>
                            </div>
                        </div>

                        {/* Database Selection */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Database
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => updateData('configs.web.database', 'mysql')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.web.database === 'mysql'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">MySQL</div>
                                    <div className="text-xs mt-1">Most Popular</div>
                                </button>
                                <button
                                    onClick={() => updateData('configs.web.database', 'postgresql')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.web.database === 'postgresql'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">PostgreSQL</div>
                                    <div className="text-xs mt-1">Advanced</div>
                                </button>
                            </div>
                        </div>

                        {/* CSS Framework */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                CSS Framework
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => updateData('configs.web.cssFramework', 'tailwind')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.web.cssFramework === 'tailwind'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Tailwind CSS</div>
                                    <div className="text-xs mt-1">Utility-First</div>
                                </button>
                                <button
                                    onClick={() => updateData('configs.web.cssFramework', 'bootstrap')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.web.cssFramework === 'bootstrap'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Bootstrap</div>
                                    <div className="text-xs mt-1">Component-Based</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Configuration */}
            {platforms.includes('desktop') && (
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">💻</span>
                        <h2 className="text-lg font-semibold text-white">Desktop Configuration</h2>
                    </div>

                    <div className="space-y-4">
                        {/* Framework Selection */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Desktop Framework
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => updateData('configs.desktop.framework', 'electron')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.desktop.framework === 'electron'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Electron</div>
                                    <div className="text-xs mt-1">Cross-Platform</div>
                                </button>
                                <button
                                    onClick={() => updateData('configs.desktop.framework', 'tauri')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.desktop.framework === 'tauri'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Tauri</div>
                                    <div className="text-xs mt-1">Rust-Powered</div>
                                </button>
                            </div>
                        </div>

                        {/* Target Platforms */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Target Platforms
                            </label>
                            <div className="space-y-2">
                                {['windows', 'macos', 'linux'].map(platform => (
                                    <label key={platform} className="flex items-center gap-3 p-3 bg-[#0d1117] border border-[#30363d] rounded-lg cursor-pointer hover:border-[#58a6ff]/50 transition">
                                        <input
                                            type="checkbox"
                                            checked={configs.desktop.platforms.includes(platform)}
                                            onChange={(e) => {
                                                const newPlatforms = e.target.checked
                                                    ? [...configs.desktop.platforms, platform]
                                                    : configs.desktop.platforms.filter(p => p !== platform);
                                                updateData('configs.desktop.platforms', newPlatforms);
                                            }}
                                            className="w-4 h-4 text-[#58a6ff] bg-[#0d1117] border-[#30363d] rounded focus:ring-2 focus:ring-[#58a6ff]"
                                        />
                                        <span className="text-white capitalize">{platform}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* UI/UX Template Configuration */}
            {platforms.includes('template') && (
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🎨</span>
                        <h2 className="text-lg font-semibold text-white">UI/UX Template Configuration</h2>
                    </div>

                    <div className="space-y-4">
                        {/* CSS Framework */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                CSS Framework
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => updateData('configs.template.cssFramework', 'tailwind')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.template.cssFramework === 'tailwind'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Tailwind CSS</div>
                                    <div className="text-xs mt-1">Modern Utility</div>
                                </button>
                                <button
                                    onClick={() => updateData('configs.template.cssFramework', 'bootstrap')}
                                    className={`px-4 py-3 rounded-lg border-2 transition ${configs.template.cssFramework === 'bootstrap'
                                            ? 'border-[#58a6ff] bg-[#58a6ff]/10 text-white'
                                            : 'border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]/50'
                                        }`}
                                >
                                    <div className="font-semibold">Bootstrap</div>
                                    <div className="text-xs mt-1">Classic Components</div>
                                </button>
                            </div>
                        </div>

                        {/* Template Pages */}
                        <div>
                            <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                                Include Pages
                            </label>
                            <div className="space-y-2">
                                {[
                                    { id: 'home', label: 'Home/Landing Page' },
                                    { id: 'about', label: 'About Page' },
                                    { id: 'services', label: 'Services Page' },
                                    { id: 'portfolio', label: 'Portfolio/Gallery' },
                                    { id: 'contact', label: 'Contact Page' },
                                    { id: 'blog', label: 'Blog/News Page' }
                                ].map(page => (
                                    <label key={page.id} className="flex items-center gap-3 p-3 bg-[#0d1117] border border-[#30363d] rounded-lg cursor-pointer hover:border-[#58a6ff]/50 transition">
                                        <input
                                            type="checkbox"
                                            checked={configs.template.pages.includes(page.id)}
                                            onChange={(e) => {
                                                const newPages = e.target.checked
                                                    ? [...configs.template.pages, page.id]
                                                    : configs.template.pages.filter(p => p !== page.id);
                                                updateData('configs.template.pages', newPages);
                                            }}
                                            className="w-4 h-4 text-[#58a6ff] bg-[#0d1117] border-[#30363d] rounded focus:ring-2 focus:ring-[#58a6ff]"
                                        />
                                        <span className="text-white">{page.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// BATCH 5 ENDS HERE - Export statement will be in BATCH 6
export default CreateProject;