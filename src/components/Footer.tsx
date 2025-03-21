import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bottom-0 border-t border-zinc-500/10">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-10 mx-auto text-xs font-semibold text-[#FFF] max-w-7xl lg:px-8">
        <div className="flex flex-col items-center lg:items-start">
          <div className="mb-6 flex items-center">
            <Image
              src="https://ext.same-assets.com/2947577290/4290961355.svg"
              alt="AWP Logo"
              width={80}
              height={30}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-[10px] text-zinc-400">Experience unrivaled performance, total Byfron emulation,</p>
          <p className="text-[10px] text-zinc-400 mb-2">and effortless compatibility—all in one package!</p>
          <p className="text-[10px] text-zinc-400 mb-5">Operated by a third-party seller, not affiliated with AWP.GG</p>
          <p className="text-[10px] text-zinc-400">Copyright 2025 BUYAWP.GG, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
