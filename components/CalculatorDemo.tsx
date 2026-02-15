
import React, { useState } from 'react';

const CalculatorDemo: React.FC = () => {
  const [val1, setVal1] = useState<number>(2);
  const [val2, setVal2] = useState<number>(3);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    // Simulating the Java App.add(int a, int b) method
    setResult(val1 + val2);
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center h-full bg-gray-900">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl w-full max-w-sm">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <i className="fas fa-calculator text-blue-500"></i>
          Java Add Logic
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Integer A</label>
            <input 
              type="number" 
              value={val1} 
              onChange={(e) => setVal1(parseInt(e.target.value) || 0)}
              className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="flex justify-center py-2">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Integer B</label>
            <input 
              type="number" 
              value={val2} 
              onChange={(e) => setVal2(parseInt(e.target.value) || 0)}
              className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <button 
            onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/40 transition-all active:scale-95 mt-4"
          >
            EXECUTE ADD()
          </button>

          {result !== null && (
            <div className="mt-8 pt-6 border-t border-gray-700 text-center animate-in fade-in slide-in-from-bottom-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Result Output</span>
              <span className="text-5xl font-mono text-green-400 font-bold">{result}</span>
            </div>
          )}
        </div>
      </div>
      <p className="mt-6 text-sm text-gray-500 font-mono italic">
        This UI simulates the com.example.App class behavior
      </p>
    </div>
  );
};

export default CalculatorDemo;
