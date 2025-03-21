export default function ClientStatus() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 ring-2 ring-zinc-100/10 hover:ring-zinc-100/30 transition-all duration-150 rounded-[10px]">
        <span className="absolute text-[9px] sm:text-[11px] md:text-[13px] -top-[calc(50%+0.5rem)] left-0 font-semibold text-zinc-500 tracking-tight whitespace-nowrap">
          CLIENT
        </span>
        <span className="absolute text-[14px] sm:text-[16px] md:text-[24px] left-0 -bottom-[calc(84%+0.5rem)] font-medium text-zinc-500 tracking-tight whitespace-nowrap">
          <span className="font-semibold">LATEST BUILD</span>
          <span className="font-semibold text-[0.6em]"> v1.0.0.38</span>
        </span>
        <div className="w-3 h-3 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-tr from-[#FFFFFF] to-[#A7FF87]"></div>
      </div>
      <span
        className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 font-bold text-[14px] sm:text-[16px] md:text-[24px] leading-none tracking-tight -ml-2">
        OPERATIONAL
      </span>
    </div>
  );
}
