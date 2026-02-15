
import React, { useState } from 'react';
import FileTree from './components/FileTree';
import CodeBlock from './components/CodeBlock';
import CalculatorDemo from './components/CalculatorDemo';
import Terminal from './components/Terminal';
import { POM_XML, APP_JAVA, APP_TEST_JAVA, JENKINSFILE } from './constants';
import { ProjectFile } from './types';

const projectFiles: ProjectFile[] = [
  {
    path: 'pom.xml',
    filename: 'pom.xml',
    content: POM_XML,
    language: 'xml'
  },
  {
    path: 'src/main/java/com/example/App.java',
    filename: 'App.java',
    content: APP_JAVA,
    language: 'java'
  },
  {
    path: 'src/test/java/com/example/AppTest.java',
    filename: 'AppTest.java',
    content: APP_TEST_JAVA,
    language: 'java'
  },
  {
    path: 'Jenkinsfile',
    filename: 'Jenkinsfile',
    content: JENKINSFILE,
    language: 'groovy'
  }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'pipeline'>('demo');
  const [activePath, setActivePath] = useState(projectFiles[0].path);

  const activeFile = projectFiles.find(f => f.path === activePath) || projectFiles[0];

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-900 font-sans">
      {/* Header */}
      <header className="h-14 border-b border-gray-700 bg-gray-800 flex items-center justify-between px-6 shrink-0 z-20">
        <div className="flex items-center gap-4">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <i className="fas fa-microchip text-white text-lg"></i>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">Java Calculator Project</h1>
            <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest leading-none">Maven • JUnit • DevOps</p>
          </div>
        </div>

        <nav className="flex items-center bg-gray-950 p-1 rounded-xl border border-gray-700">
          <button 
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'demo' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <i className="fas fa-play mr-2"></i>APP DEMO
          </button>
          <button 
            onClick={() => setActiveTab('code')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'code' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <i className="fas fa-code mr-2"></i>PROJECT SOURCE
          </button>
          <button 
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === 'pipeline' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <i className="fas fa-terminal mr-2"></i>CI PIPELINE
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-gray-500 font-bold uppercase">Pipeline Status</p>
            <p className="text-xs text-green-400 font-mono">STABLE</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-gray-400">
            <i className="fas fa-user-gear text-sm"></i>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden relative">
        {activeTab === 'code' && (
          <FileTree 
            files={projectFiles.map(f => ({ path: f.path, filename: f.filename }))}
            activeFile={activePath}
            onSelect={setActivePath}
          />
        )}

        <div className="flex-1 flex flex-col bg-gray-950 overflow-hidden relative">
          {activeTab === 'demo' && <CalculatorDemo />}
          {activeTab === 'code' && (
            <CodeBlock 
              code={activeFile.content}
              language={activeFile.language}
              filename={activeFile.filename}
            />
          )}
          {activeTab === 'pipeline' && <Terminal />}
        </div>

        {/* Requirements Sticky Note - Only on demo/code */}
        {activeTab !== 'pipeline' && (
          <div className="hidden lg:flex flex-col w-72 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto shrink-0 space-y-8">
            <section>
              <h3 className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-4">Core Specification</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[10px]"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-200">add(int a, int b)</p>
                    <p className="text-[10px] text-gray-500">Pure Java implementation with integer overflow checks.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[10px]"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-200">JUnit 4.13.2</p>
                    <p className="text-[10px] text-gray-500">Verifying add(2,3) == 5 as required by DevOps pipeline.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-gray-900 p-4 rounded-xl border border-gray-700">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Project Structure</h3>
              <div className="font-mono text-[10px] text-gray-400 space-y-1">
                <p>├── pom.xml</p>
                <p>├── Jenkinsfile</p>
                <p>└── src</p>
                <p className="pl-4">├── main/java/.../App.java</p>
                <p className="pl-4">└── test/java/.../AppTest.java</p>
              </div>
            </section>
            
            <div className="flex-1"></div>
            
            <div className="text-[10px] text-gray-600 font-mono">
              PROMPT: Senior Java Dev / DevOps
              <br/>
              COMPLIANCE: 100%
            </div>
          </div>
        )}
      </main>

      {/* Footer / Status Bar */}
      <footer className="h-6 bg-indigo-700 flex items-center px-4 justify-between shrink-0 text-white">
        <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1 opacity-80">
            <i className="fas fa-code-branch"></i> git:main
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-check-double"></i> MAVEN BUILD PASSED
          </span>
        </div>
        <div className="text-[9px] font-mono opacity-80">
          artifact: com.example.calculator-app:1.0-SNAPSHOT
        </div>
      </footer>
    </div>
  );
};

export default App;
