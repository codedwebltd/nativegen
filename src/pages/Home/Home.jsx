import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhyNative from '../../components/WhyNative';
import LiveCodePreview from '../../components/LiveCodePreview';
import FAQ from '../../components/FAQ';


function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('java');
  const [displayedCode, setDisplayedCode] = useState('');
  const [fileName, setFileName] = useState('MainActivity.java');

  // Platform typing animation
  const [platformIndex, setPlatformIndex] = useState(0);
  const platforms = [
    { text: 'Android', color: 'text-[#3DDC84]' },
    { text: 'iOS', color: 'text-[#FF9500]' },
    { text: 'Web', color: 'text-[#61DAFB]' },
    { text: 'Desktop', color: 'text-[#A78BFA]' }
  ];

  // Change platform every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlatformIndex((prev) => (prev + 1) % platforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Code typing animation
  useEffect(() => {
    const code = codeSamples[currentLang].code;
    let index = 0;
    setDisplayedCode('');

    const typingInterval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode(code.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 10); // Typing speed - lower is faster

    return () => clearInterval(typingInterval);
  }, [currentLang]);

  // Code samples - exact from your HTML
  const codeSamples = {
    java: {
      fileName: 'MainActivity.java',
      code: `<span style="color: #c792ea">package</span> com.nativegen.ecommerce;

<span style="color: #c792ea">import</span> android.os.Bundle;
<span style="color: #c792ea">import</span> androidx.appcompat.app.AppCompatActivity;
<span style="color: #c792ea">import</span> androidx.lifecycle.ViewModelProvider;
<span style="color: #c792ea">import</span> com.nativegen.ecommerce.databinding.ActivityMainBinding;
<span style="color: #c792ea">import</span> com.nativegen.ecommerce.viewmodel.MainViewModel;

<span style="color: #c792ea">public class</span> <span style="color: #ffcb6b">MainActivity</span> <span style="color: #c792ea">extends</span> <span style="color: #ffcb6b">AppCompatActivity</span> {
    <span style="color: #546e7a">// ViewBinding instance</span>
    <span style="color: #c792ea">private</span> <span style="color: #ffcb6b">ActivityMainBinding</span> binding;
    <span style="color: #c792ea">private</span> <span style="color: #ffcb6b">MainViewModel</span> viewModel;

    <span style="color: #82aaff">@Override</span>
    <span style="color: #c792ea">protected void</span> <span style="color: #82aaff">onCreate</span>(<span style="color: #ffcb6b">Bundle</span> savedInstanceState) {
        <span style="color: #c792ea">super</span>.<span style="color: #82aaff">onCreate</span>(savedInstanceState);
        
        <span style="color: #546e7a">// Initialize ViewBinding</span>
        binding = <span style="color: #ffcb6b">ActivityMainBinding</span>.<span style="color: #82aaff">inflate</span>(<span style="color: #82aaff">getLayoutInflater</span>());
        <span style="color: #82aaff">setContentView</span>(binding.<span style="color: #82aaff">getRoot</span>());
        
        <span style="color: #546e7a">// Initialize ViewModel</span>
        viewModel = <span style="color: #c792ea">new</span> <span style="color: #ffcb6b">ViewModelProvider</span>(<span style="color: #c792ea">this</span>)
            .<span style="color: #82aaff">get</span>(<span style="color: #ffcb6b">MainViewModel</span>.<span style="color: #c792ea">class</span>);
        
        <span style="color: #82aaff">setupObservers</span>();
    }
    
    <span style="color: #c792ea">private void</span> <span style="color: #82aaff">setupObservers</span>() {
        viewModel.<span style="color: #82aaff">getUserData</span>().<span style="color: #82aaff">observe</span>(<span style="color: #c792ea">this</span>, data -> {
            binding.textViewName.<span style="color: #82aaff">setText</span>(data.<span style="color: #82aaff">getName</span>());
        });
    }
}`
    },
    kotlin: {
      fileName: 'MainActivity.kt',
      code: `<span style="color: #c792ea">package</span> com.nativegen.ecommerce

<span style="color: #c792ea">import</span> android.os.Bundle
<span style="color: #c792ea">import</span> androidx.appcompat.app.AppCompatActivity
<span style="color: #c792ea">import</span> androidx.lifecycle.ViewModelProvider
<span style="color: #c792ea">import</span> com.nativegen.ecommerce.databinding.ActivityMainBinding
<span style="color: #c792ea">import</span> com.nativegen.ecommerce.viewmodel.MainViewModel

<span style="color: #c792ea">class</span> <span style="color: #ffcb6b">MainActivity</span> : <span style="color: #ffcb6b">AppCompatActivity</span>() {
    <span style="color: #c792ea">private lateinit var</span> binding: <span style="color: #ffcb6b">ActivityMainBinding</span>
    <span style="color: #c792ea">private lateinit var</span> viewModel: <span style="color: #ffcb6b">MainViewModel</span>

    <span style="color: #c792ea">override fun</span> <span style="color: #82aaff">onCreate</span>(savedInstanceState: <span style="color: #ffcb6b">Bundle</span>?) {
        <span style="color: #c792ea">super</span>.<span style="color: #82aaff">onCreate</span>(savedInstanceState)
        
        <span style="color: #546e7a">// Initialize ViewBinding</span>
        binding = <span style="color: #ffcb6b">ActivityMainBinding</span>.<span style="color: #82aaff">inflate</span>(layoutInflater)
        <span style="color: #82aaff">setContentView</span>(binding.root)
        
        <span style="color: #546e7a">// Initialize ViewModel</span>
        viewModel = <span style="color: #ffcb6b">ViewModelProvider</span>(<span style="color: #c792ea">this</span>)[<span style="color: #ffcb6b">MainViewModel</span>::<span style="color: #c792ea">class</span>.java]
        
        <span style="color: #82aaff">setupObservers</span>()
    }
    
    <span style="color: #c792ea">private fun</span> <span style="color: #82aaff">setupObservers</span>() {
        viewModel.userData.<span style="color: #82aaff">observe</span>(<span style="color: #c792ea">this</span>) { data ->
            binding.textViewName.text = data.name
        }
    }
}`
    },
    php: {
      fileName: 'UserController.php',
      code: `<span style="color: #82aaff"><?php</span>

<span style="color: #c792ea">namespace</span> <span style="color: #ffcb6b">App\\Controllers</span>;

<span style="color: #c792ea">use</span> <span style="color: #ffcb6b">App\\Models\\User</span>;
<span style="color: #c792ea">use</span> <span style="color: #ffcb6b">App\\Services\\AuthService</span>;

<span style="color: #c792ea">class</span> <span style="color: #ffcb6b">UserController</span>
{
    <span style="color: #c792ea">private</span> <span style="color: #ffcb6b">AuthService</span> $authService;

    <span style="color: #c792ea">public function</span> <span style="color: #82aaff">__construct</span>(<span style="color: #ffcb6b">AuthService</span> $auth)
    {
        $<span style="color: #c792ea">this</span>->authService = $auth;
    }

    <span style="color: #546e7a">// Get all users with pagination</span>
    <span style="color: #c792ea">public function</span> <span style="color: #82aaff">index</span>(): <span style="color: #ffcb6b">array</span>
    {
        <span style="color: #c792ea">return</span> <span style="color: #ffcb6b">User</span>::<span style="color: #82aaff">paginate</span>(<span style="color: #b5cea8">20</span>);
    }

    <span style="color: #546e7a">// Get single user by ID</span>
    <span style="color: #c792ea">public function</span> <span style="color: #82aaff">show</span>(<span style="color: #ffcb6b">int</span> $id): <span style="color: #ffcb6b">User</span>
    {
        <span style="color: #c792ea">return</span> <span style="color: #ffcb6b">User</span>::<span style="color: #82aaff">findOrFail</span>($id);
    }

    <span style="color: #546e7a">// Create new user</span>
    <span style="color: #c792ea">public function</span> <span style="color: #82aaff">store</span>(<span style="color: #ffcb6b">array</span> $data): <span style="color: #ffcb6b">User</span>
    {
        $validated = $<span style="color: #c792ea">this</span>-><span style="color: #82aaff">validate</span>($data, [
            <span style="color: #c3e88d">'name'</span> => <span style="color: #c3e88d">'required|string|max:255'</span>,
            <span style="color: #c3e88d">'email'</span> => <span style="color: #c3e88d">'required|email|unique:users'</span>,
            <span style="color: #c3e88d">'password'</span> => <span style="color: #c3e88d">'required|min:8'</span>
        ]);
        
        <span style="color: #c792ea">return</span> <span style="color: #ffcb6b">User</span>::<span style="color: #82aaff">create</span>($validated);
    }
}`
    },
    laravel: {
      fileName: 'User.php',
      code: `<span style="color: #82aaff"><?php</span>

<span style="color: #c792ea">namespace</span> <span style="color: #ffcb6b">App\\Models</span>;

<span style="color: #c792ea">use</span> <span style="color: #ffcb6b">Illuminate\\Database\\Eloquent\\Model</span>;
<span style="color: #c792ea">use</span> <span style="color: #ffcb6b">Illuminate\\Database\\Eloquent\\Relations\\HasMany</span>;
<span style="color: #c792ea">use</span> <span style="color: #ffcb6b">Illuminate\\Notifications\\Notifiable</span>;

<span style="color: #c792ea">class</span> <span style="color: #ffcb6b">User</span> <span style="color: #c792ea">extends</span> <span style="color: #ffcb6b">Model</span>
{
    <span style="color: #c792ea">use</span> <span style="color: #ffcb6b">Notifiable</span>;

    <span style="color: #546e7a">// Mass assignable attributes</span>
    <span style="color: #c792ea">protected</span> $fillable = [
        <span style="color: #c3e88d">'name'</span>, <span style="color: #c3e88d">'email'</span>, <span style="color: #c3e88d">'password'</span>, <span style="color: #c3e88d">'avatar'</span>
    ];

    <span style="color: #546e7a">// Hidden attributes for arrays</span>
    <span style="color: #c792ea">protected</span> $hidden = [
        <span style="color: #c3e88d">'password'</span>, <span style="color: #c3e88d">'remember_token'</span>
    ];

    <span style="color: #546e7a">// Attribute casting</span>
    <span style="color: #c792ea">protected</span> $casts = [
        <span style="color: #c3e88d">'email_verified_at'</span> => <span style="color: #c3e88d">'datetime'</span>,
        <span style="color: #c3e88d">'is_admin'</span> => <span style="color: #c3e88d">'boolean'</span>
    ];

    <span style="color: #546e7a">// User has many posts</span>
    <span style="color: #c792ea">public function</span> <span style="color: #82aaff">posts</span>(): <span style="color: #ffcb6b">HasMany</span>
    {
        <span style="color: #c792ea">return</span> $<span style="color: #c792ea">this</span>-><span style="color: #82aaff">hasMany</span>(<span style="color: #ffcb6b">Post</span>::<span style="color: #c792ea">class</span>);
    }

    <span style="color: #546e7a">// User has many comments</span>
    <span style="color: #c792ea">public function</span> <span style="color: #82aaff">comments</span>(): <span style="color: #ffcb6b">HasMany</span>
    {
        <span style="color: #c792ea">return</span> $<span style="color: #c792ea">this</span>-><span style="color: #82aaff">hasMany</span>(<span style="color: #ffcb6b">Comment</span>::<span style="color: #c792ea">class</span>);
    }
}`
    },
    swift: {
      fileName: 'ContentView.swift',
      code: `<span style="color: #c792ea">import</span> SwiftUI

<span style="color: #c792ea">struct</span> <span style="color: #ffcb6b">ContentView</span>: <span style="color: #ffcb6b">View</span> {
    <span style="color: #82aaff">@StateObject</span> <span style="color: #c792ea">private var</span> viewModel = <span style="color: #ffcb6b">MainViewModel</span>()

    <span style="color: #c792ea">var</span> body: <span style="color: #c792ea">some</span> <span style="color: #ffcb6b">View</span> {
        <span style="color: #ffcb6b">NavigationView</span> {
            <span style="color: #ffcb6b">VStack</span>(spacing: <span style="color: #b5cea8">20</span>) {
                <span style="color: #ffcb6b">Text</span>(<span style="color: #c3e88d">"Native iOS App"</span>)
                    .<span style="color: #82aaff">font</span>(.<span style="color: #82aaff">largeTitle</span>)
                    .<span style="color: #82aaff">fontWeight</span>(.<span style="color: #82aaff">bold</span>)

                <span style="color: #c792ea">if let</span> userData = viewModel.userData {
                    <span style="color: #ffcb6b">Text</span>(<span style="color: #c3e88d">"Welcome, \\(userData.name)"</span>)
                        .<span style="color: #82aaff">font</span>(.<span style="color: #82aaff">title2</span>)
                        .<span style="color: #82aaff">foregroundColor</span>(.<span style="color: #82aaff">secondary</span>)
                }

                <span style="color: #ffcb6b">Button</span>(<span style="color: #c3e88d">"Load Data"</span>) {
                    viewModel.<span style="color: #82aaff">fetchUserData</span>()
                }
                .<span style="color: #82aaff">buttonStyle</span>(.<span style="color: #82aaff">borderedProminent</span>)
            }
            .<span style="color: #82aaff">navigationTitle</span>(<span style="color: #c3e88d">"Home"</span>)
        }
    }
}

<span style="color: #c792ea">class</span> <span style="color: #ffcb6b">MainViewModel</span>: <span style="color: #ffcb6b">ObservableObject</span> {
    <span style="color: #82aaff">@Published</span> <span style="color: #c792ea">var</span> userData: <span style="color: #ffcb6b">User</span>?

    <span style="color: #c792ea">func</span> <span style="color: #82aaff">fetchUserData</span>() {
        <span style="color: #546e7a">// API call implementation</span>
    }
}`
    }
  };

  return (
    <div className="bg-[#0d1117] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation Bar */}
      <nav className="border-b border-[#30363d] bg-[#0d1117] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-white hover:text-[#58a6ff]">
                <span className="text-[#58a6ff]">&lt;</span>NativeGen<span className="text-[#58a6ff]">/&gt;</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#c9d1d9] hover:text-white">Features</a>
              <a href="#how-it-works" className="text-[#c9d1d9] hover:text-white">How It Works</a>
              <a href="#pricing" className="text-[#c9d1d9] hover:text-white">Pricing</a>
              <a href="#docs" className="text-[#c9d1d9] hover:text-white">Docs</a>
            </div>

            {/* CTA Buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-[#c9d1d9] hover:text-white px-4 py-2">
                Login
              </Link>
              <Link to="/dashboard" className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md font-medium">
                Start Building
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#c9d1d9] hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#features" className="block text-[#c9d1d9] hover:text-white py-2">Features</a>
              <a href="#how-it-works" className="block text-[#c9d1d9] hover:text-white py-2">How It Works</a>
              <a href="#pricing" className="block text-[#c9d1d9] hover:text-white py-2">Pricing</a>
              <a href="#docs" className="block text-[#c9d1d9] hover:text-white py-2">Docs</a>
              <div className="pt-4 space-y-2">
                <a href="#login" className="block text-center text-[#c9d1d9] hover:text-white py-2 border border-[#30363d] rounded-md">
                  Login
                </a>
                <Link to="/dashboard" className="block text-center bg-[#238636] hover:bg-[#2ea043] text-white py-2 rounded-md font-medium">
                  Start Building
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span>Generate Native <span className={`${platforms[platformIndex].color} transition-colors duration-500`}>{platforms[platformIndex].text}</span> Apps</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#8b949e] mb-8 max-w-xl mx-auto lg:mx-0">
                Real Java/Kotlin code. No wrappers. No compromises.
                Production-ready Android Studio projects you actually own.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/dashboard" className="bg-[#238636] hover:bg-[#2ea043] text-white px-8 py-3 rounded-md font-semibold text-lg">
                  Start Building Free
                </Link>
                <a href="#demo" className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] hover:text-white px-8 py-3 rounded-md font-semibold text-lg">
                  View Sample Code →
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
                <div>
                  <span className="text-white font-bold text-2xl">100%</span>
                  <span className="text-[#8b949e] ml-2">Native Code</span>
                </div>
                <div>
                  <span className="text-white font-bold text-2xl">Zero</span>
                  <span className="text-[#8b949e] ml-2">Lock-in</span>
                </div>
                <div>
                  <span className="text-white font-bold text-2xl">&lt;5min</span>
                  <span className="text-[#8b949e] ml-2">Generation</span>
                </div>
              </div>
            </div>

            {/* Right: Code Window */}
            <div className="w-full">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden shadow-2xl">

                {/* Code Window Header */}
                <div className="bg-[#0d1117] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                  </div>

                  {/* Language Tabs */}
                  <div className="flex items-center space-x-2 text-xs font-mono overflow-x-auto">
                    {Object.keys(codeSamples).map(lang => (
                      <button
                        key={lang}
                        className={`px-3 py-1 rounded whitespace-nowrap ${currentLang === lang ? 'text-[#58a6ff] bg-[#161b22]' : 'text-[#8b949e] hover:text-[#c9d1d9]'}`}
                        onClick={() => {
                          setCurrentLang(lang);
                          setFileName(codeSamples[lang].fileName);
                        }}
                      >
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Copy Button */}
                  <button className="text-[#8b949e] hover:text-white text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                </div>

                {/* File Name */}
                <div className="bg-[#0d1117] border-b border-[#30363d] px-4 py-2">
                  <span className="text-sm font-mono text-[#8b949e]">{fileName}</span>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-sm overflow-x-auto overflow-y-auto bg-[#0d1117] text-[#c9d1d9]" style={{ maxHeight: '500px' }}>
                  <pre dangerouslySetInnerHTML={{ __html: displayedCode }}></pre>
                </div>

              </div>

              {/* Code Window Footer Note */}
              <p className="text-center text-sm text-[#8b949e] mt-4">
                ↑ This is actual code you'll receive. Not a mockup.
              </p>
            </div>

          </div>
        </div>
     </section>

     {/* Why Native Section */}
      <WhyNative />

      {/* Live Code Preview */}
      <LiveCodePreview />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="relative mt-20 border-t border-[#30363d] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <div className="text-center mb-8">
            <a href="#" className="text-3xl font-bold text-white hover:text-[#58a6ff] inline-block">
              <span className="text-[#58a6ff]">&lt;</span>NativeGen<span className="text-[#58a6ff]">/&gt;</span>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#features" className="text-[#8b949e] hover:text-white transition">Features</a>
            <a href="#pricing" className="text-[#8b949e] hover:text-white transition">Pricing</a>
            <a href="#docs" className="text-[#8b949e] hover:text-white transition">Docs</a>
            <a href="#" className="text-[#8b949e] hover:text-white transition">Privacy</a>
            <a href="#" className="text-[#8b949e] hover:text-white transition">Terms</a>
          </div>

          {/* Copyright & Love */}
          <div className="text-center space-y-2">
            <p className="text-[#8b949e] text-sm">© 2025 NativeGen. All rights reserved.</p>
            <p className="text-[#8b949e] text-sm flex items-center justify-center gap-2">
              Designed with
              <span className="text-red-500">♥</span>
              by
              <span className="text-[#58a6ff] font-semibold">CodedWeb Ventures</span>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Home;