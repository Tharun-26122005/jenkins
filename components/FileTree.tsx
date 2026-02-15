
import React from 'react';
// Fix: Removed FolderIcon as it is not exported from ../constants and is unused in this component.
import { FileIcon } from '../constants';

interface FileTreeProps {
  files: { path: string; filename: string }[];
  activeFile: string;
  onSelect: (path: string) => void;
}

const FileTree: React.FC<FileTreeProps> = ({ files, activeFile, onSelect }) => {
  return (
    <div className="bg-gray-800 border-r border-gray-700 w-80 flex flex-col h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-700 flex items-center gap-2">
        <i className="fas fa-project-diagram text-blue-400"></i>
        <h2 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Project Explorer</h2>
      </div>
      <div className="p-2 space-y-1">
        {files.map((file) => (
          <button
            key={file.path}
            onClick={() => onSelect(file.path)}
            className={`w-full text-left px-3 py-2 rounded flex items-center gap-3 transition-colors ${
              activeFile === file.path 
                ? 'bg-blue-600/20 text-blue-300 border border-blue-600/50' 
                : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <FileIcon />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{file.filename}</span>
              <span className="text-xs text-gray-500 truncate">{file.path}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FileTree;
