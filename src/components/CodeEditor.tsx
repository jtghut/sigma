export default function CodeEditor() {
  return (
    <div className="w-full max-w-4xl px-4 mb-32">
      <div className="bg-[#171717] rounded-lg border border-zinc-800 overflow-hidden">
        <div className="flex items-center bg-[#232323] px-4 py-2 border-b border-zinc-800">
          <div className="text-white font-medium">AWP.GG</div>
          <div className="ml-4 text-zinc-400 text-sm px-2 border-r border-zinc-700">Scripting</div>
          <div className="flex-1"></div>
          <div className="flex space-x-2">
            <button className="text-zinc-400 hover:text-white">
              <MinimizeIcon />
            </button>
            <button className="text-zinc-400 hover:text-white">
              <MaximizeIcon />
            </button>
            <button className="text-zinc-400 hover:text-white">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 p-4">
            <div className="flex border-b border-zinc-800 pb-2 mb-4">
              <div className="mr-2 text-zinc-500 w-6 text-center">1</div>
              <div className="text-green-400">Welcome to AWP.GG!</div>
            </div>
            <div className="h-48"></div>
          </div>

          <div className="w-64 bg-[#1F1F1F] border-l border-zinc-800 p-4">
            <div className="flex items-center mb-4">
              <FolderIcon className="w-4 h-4 text-zinc-400 mr-2" />
              <div className="text-zinc-300 text-sm">Workspace</div>
            </div>
            <div className="ml-4 space-y-2">
              <div className="flex items-center text-zinc-400 text-sm">
                <FileIcon className="w-4 h-4 mr-2" />
                <div>Infinite Yield.txt</div>
              </div>
              <div className="flex items-center text-zinc-400 text-sm">
                <FileIcon className="w-4 h-4 mr-2" />
                <div>Dex Explorer.txt</div>
              </div>
            </div>

            <div className="flex items-center mt-6 mb-4">
              <StarIcon className="w-4 h-4 text-yellow-500 mr-2" />
              <div className="text-zinc-300 text-sm">Favorites</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1F1F1F] p-2 border-t border-zinc-800 flex items-center justify-between">
          <div className="flex space-x-2 text-zinc-300 text-sm">
            <button className="px-2 py-1 hover:bg-zinc-700 rounded flex items-center">
              <PlayIcon className="w-4 h-4 mr-1" />
              Execute
            </button>
            <button className="px-2 py-1 hover:bg-zinc-700 rounded flex items-center">
              <TrashIcon className="w-4 h-4 mr-1" />
              Clear
            </button>
            <button className="px-2 py-1 hover:bg-zinc-700 rounded flex items-center">
              <FolderOpenIcon className="w-4 h-4 mr-1" />
              Open
            </button>
            <button className="px-2 py-1 hover:bg-zinc-700 rounded flex items-center">
              <PlayIcon className="w-4 h-4 mr-1" />
              Execute
            </button>
            <button className="px-2 py-1 hover:bg-zinc-700 rounded flex items-center">
              <SaveIcon className="w-4 h-4 mr-1" />
              Save
            </button>
          </div>
          <div>
            <SettingsIcon className="w-4 h-4 text-zinc-400" />
          </div>
        </div>

        <div className="bg-[#121212] p-4 border-t border-zinc-800">
          <div className="flex items-center text-red-500 text-sm">
            <span className="text-zinc-500">[00:21:42]</span>
            <span className="ml-2">Test is not a valid member of Modul "Workspace.Part"</span>
          </div>
        </div>

        <div className="bg-[#171717] p-2 border-t border-zinc-800 flex items-center justify-end">
          <div className="text-sm text-zinc-400 flex items-center">
            <UserIcon className="w-4 h-4 mr-2" />
            <span>AwpUser123</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon components

function MinimizeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  );
}

function FolderOpenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 9l.77-4.33A2 2 0 0 1 7.71 3h8.58a2 2 0 0 1 1.94 1.67L19 9"></path>
      <path d="M2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8z"></path>
    </svg>
  );
}

function SaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
      <polyline points="17 21 17 13 7 13 7 21"></polyline>
      <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}
