
import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  filename: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden bg-gray-900">
      <div className="bg-gray-800 px-6 py-3 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center gap-2">
          <i className={`fas ${filename.endsWith('.java') ? 'fa-coffee text-orange-400' : 'fa-code text-blue-400'}`}></i>
          <span className="text-sm font-mono text-gray-300">{filename}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-xs flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1.5 rounded transition-all active:scale-95"
        >
          <i className={`fas ${copied ? 'fa-check text-green-400' : 'fa-copy'}`}></i>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="relative flex-1 overflow-auto p-6 font-mono text-sm leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gray-700">
        <pre className="whitespace-pre">
          {code.split('\n').map((line, i) => (
            <div key={i} className="flex group">
              <span className="w-10 text-gray-600 select-none text-right pr-4">{i + 1}</span>
              <span className="flex-1">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
