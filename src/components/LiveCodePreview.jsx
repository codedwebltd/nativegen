import React, { useState } from 'react';

function LiveCodePreview() {
  const [activeTab, setActiveTab] = useState('MainActivity.java');

  const codeFiles = {
    'MainActivity.java': `package com.ecommerce.app;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import com.ecommerce.app.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {
    // ViewBinding - No more findViewById!
    private ActivityMainBinding binding;
    private ProductViewModel viewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Initialize ViewBinding
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        
        // Setup ViewModel
        viewModel = new ViewModelProvider(this).get(ProductViewModel.class);
        
        // Observe LiveData
        viewModel.getProducts().observe(this, products -> {
            binding.recyclerView.setAdapter(new ProductAdapter(products));
        });
    }
}`,

    'ProductViewModel.java': `package com.ecommerce.app.viewmodel;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.ViewModel;
import com.ecommerce.app.model.Product;
import com.ecommerce.app.repository.ProductRepository;
import java.util.List;

public class ProductViewModel extends ViewModel {
    private ProductRepository repository;
    private LiveData<List<Product>> products;

    public ProductViewModel() {
        repository = new ProductRepository();
        products = repository.getAllProducts();
    }

    public LiveData<List<Product>> getProducts() {
        return products;
    }

    public void refreshProducts() {
        repository.refresh();
    }
}`,

    'activity_main.xml': `<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recyclerView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager" />

</androidx.constraintlayout.widget.ConstraintLayout>`,

    'build.gradle': `plugins {
    id 'com.android.application'
}

android {
    namespace 'com.ecommerce.app'
    compileSdk 33

    defaultConfig {
        minSdk 21
        targetSdk 33
        versionCode 1
    }

    buildFeatures {
        viewBinding true
    }
}

dependencies {
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'androidx.lifecycle:lifecycle-viewmodel:2.6.1'
    implementation 'com.google.android.material:material:1.9.0'
}`
  };

  const escapeHtml = (text) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  const highlightCode = (code, fileType) => {
    const lines = code.split('\n');
    
    return lines.map((line, idx) => {
      // First escape HTML in the raw code
      let highlightedLine = escapeHtml(line);
      
      if (fileType === 'java') {
        // Keywords
        highlightedLine = highlightedLine.replace(/(package|import|public|private|protected|class|extends|void|new|return|super|this)\b/g, 
          '<span class="keyword">$1</span>');
        // Annotations
        highlightedLine = highlightedLine.replace(/(@\w+)/g, '<span class="annotation">$1</span>');
        // Comments
        highlightedLine = highlightedLine.replace(/(\/\/.*$)/g, '<span class="comment">$1</span>');
        // Strings
        highlightedLine = highlightedLine.replace(/(&quot;[^&]*?&quot;)/g, '<span class="string">$1</span>');
        // Types
        highlightedLine = highlightedLine.replace(/\b([A-Z]\w+)(?=\s|&lt;|;|\)|,)/g, '<span class="type">$1</span>');
      } else if (fileType === 'xml') {
        // XML declaration
        highlightedLine = highlightedLine.replace(/(&lt;\?xml.*?\?&gt;)/g, '<span class="comment">$1</span>');
        // Tags
        highlightedLine = highlightedLine.replace(/(&lt;\/?[\w.:]+)/g, '<span class="xml-tag">$1</span>');
        highlightedLine = highlightedLine.replace(/(\/?&gt;)/g, '<span class="xml-tag">$1</span>');
        // Attributes
        highlightedLine = highlightedLine.replace(/\b([\w:]+)=/g, '<span class="xml-attr">$1</span>=');
        // Strings
        highlightedLine = highlightedLine.replace(/(&quot;[^&]*?&quot;)/g, '<span class="string">$1</span>');
      } else if (fileType === 'gradle') {
        // Keywords
        highlightedLine = highlightedLine.replace(/\b(plugins|android|dependencies|implementation|namespace|compileSdk|minSdk|targetSdk|defaultConfig|buildFeatures|id|versionCode)\b/g, 
          '<span class="keyword">$1</span>');
        // Strings
        highlightedLine = highlightedLine.replace(/(&#39;[^&#]*?&#39;)/g, '<span class="string">$1</span>');
        // Numbers
        highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
        // Booleans
        highlightedLine = highlightedLine.replace(/\b(true|false)\b/g, '<span class="number">$1</span>');
      }
      
      return (
        <div key={idx} className="code-line">
          <span className="line-number">{idx + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: highlightedLine || '&nbsp;' }} />
        </div>
      );
    });
  };

  const getFileType = (filename) => {
    if (filename.endsWith('.java')) return 'java';
    if (filename.endsWith('.xml')) return 'xml';
    if (filename.endsWith('.gradle')) return 'gradle';
    return 'text';
  };

  return (
    <section className="py-16 md:py-24 bg-[#0d1117]">
      <style>{`
        .keyword { color: #c792ea; font-weight: 500; }
        .annotation { color: #82aaff; }
        .comment { color: #546e7a; font-style: italic; }
        .string { color: #c3e88d; }
        .type { color: #ffcb6b; }
        .xml-tag { color: #c792ea; }
        .xml-attr { color: #82aaff; }
        .number { color: #b5cea8; }
        .code-line { display: flex; line-height: 1.6; }
        .line-number { 
          color: #484f58; 
          min-width: 40px; 
          text-align: right; 
          padding-right: 16px; 
          user-select: none;
          flex-shrink: 0;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            See What You'll <span className="text-[#58a6ff]">Get</span>
          </h2>
          <p className="text-lg text-[#8b949e] max-w-2xl mx-auto">
            Real, production-ready code. Not mockups. Click tabs to explore different files.
          </p>
        </div>
        
        {/* Code Window */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
            
            {/* Window Header */}
            <div className="bg-[#0d1117] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <span className="text-xs text-[#8b949e] font-mono">Production-Ready Code</span>
              <div></div>
            </div>
            
            {/* File Tabs */}
            <div className="bg-[#0d1117] border-b border-[#30363d] px-4 py-2 flex gap-2 overflow-x-auto">
              <button 
                className={`px-4 py-2 rounded text-sm font-mono whitespace-nowrap transition-colors ${activeTab === 'MainActivity.java' ? 'text-[#58a6ff] bg-[#161b22] border border-[#30363d]' : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'}`}
                onClick={() => setActiveTab('MainActivity.java')}
              >
                ☕ MainActivity.java
              </button>
              <button 
                className={`px-4 py-2 rounded text-sm font-mono whitespace-nowrap transition-colors ${activeTab === 'ProductViewModel.java' ? 'text-[#58a6ff] bg-[#161b22] border border-[#30363d]' : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'}`}
                onClick={() => setActiveTab('ProductViewModel.java')}
              >
                ☕ ViewModel.java
              </button>
              <button 
                className={`px-4 py-2 rounded text-sm font-mono whitespace-nowrap transition-colors ${activeTab === 'activity_main.xml' ? 'text-[#58a6ff] bg-[#161b22] border border-[#30363d]' : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'}`}
                onClick={() => setActiveTab('activity_main.xml')}
              >
                📄 activity_main.xml
              </button>
              <button 
                className={`px-4 py-2 rounded text-sm font-mono whitespace-nowrap transition-colors ${activeTab === 'build.gradle' ? 'text-[#58a6ff] bg-[#161b22] border border-[#30363d]' : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'}`}
                onClick={() => setActiveTab('build.gradle')}
              >
                ⚙️ build.gradle
              </button>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-sm text-[#c9d1d9] bg-[#0d1117] overflow-x-auto" style={{maxHeight: '450px', overflowY: 'auto'}}>
              {highlightCode(codeFiles[activeTab], getFileType(activeTab))}
            </div>
            
          </div>
          
          {/* Bottom Note */}
          <div className="text-center mt-8">
            <p className="text-[#8b949e] mb-4">
              ✓ ViewBinding • ✓ MVVM Architecture • ✓ Material Design 3 • ✓ Clean Code
            </p>
            <button className="inline-block bg-[#238636] hover:bg-[#2ea043] text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Generate Your Project Now
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default LiveCodePreview;