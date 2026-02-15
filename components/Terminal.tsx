
import React, { useState, useEffect } from 'react';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runBuild = () => {
    setIsRunning(true);
    setLines([]);
    
    const logs = [
      "[INFO] Scanning for projects...",
      "[INFO] -------------------< com.example:calculator-app >-------------------",
      "[INFO] Building calculator-app 1.0-SNAPSHOT",
      "[INFO] --------------------------------[ jar ]---------------------------------",
      "[INFO] --- maven-clean-plugin:3.1.0:clean (default-clean) ---",
      "[INFO] --- maven-resources-plugin:3.0.2:resources (default-resources) ---",
      "[INFO] --- maven-compiler-plugin:3.8.0:compile (default-compile) ---",
      "[INFO] Changes detected - recompiling the module!",
      "[INFO] Compiling 1 source file to /target/classes",
      "[INFO] --- maven-resources-plugin:3.0.2:testResources (default-testResources) ---",
      "[INFO] --- maven-compiler-plugin:3.8.0:testCompile (default-testCompile) ---",
      "[INFO] Compiling 1 source file to /target/test-classes",
      "[INFO] --- maven-surefire-plugin:3.0.0-M5:test (default-test) ---",
      "[INFO] Using configured provider org.apache.maven.surefire.junit4.JUnit4Provider",
      "[INFO] Running com.example.AppTest",
      "[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.042 s - in com.example.AppTest",
      "[INFO] Results:",
      "[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0",
      "[INFO] ------------------------------------------------------------------------",
      "[INFO] BUILD SUCCESS",
      "[INFO] ------------------------------------------------------------------------",
      "[INFO] Total time:  1.245 s",
      "[INFO] Finished at: 2024-05-20T10:00:00Z",
      "[INFO] ------------------------------------------------------------------------"
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < logs.length) {
        setLines(prev => [...prev, logs[current]]);
        current++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 100);
  };

  return (
    <div className="bg-black text-green-500 font-mono text-xs p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800">
      <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
        <span className="text-gray-500 uppercase tracking-widest font-bold">Terminal - Maven CI</span>
        <button 
          onClick={runBuild}
          disabled={isRunning}
          className="bg-green-600/10 border border-green-600 hover:bg-green-600 hover:text-white px-3 py-1 rounded text-green-500 transition-all disabled:opacity-50"
        >
          {isRunning ? 'BUILDING...' : 'RUN PIPELINE (mvn clean test)'}
        </button>
      </div>
      <div className="space-y-1">
        {lines.length === 0 && !isRunning && <span className="text-gray-600">Ready for CI execution...</span>}
        {lines.map((line, i) => (
          <div key={i} className={line.includes('ERROR') ? 'text-red-500' : line.includes('SUCCESS') ? 'text-green-400 font-bold' : ''}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
