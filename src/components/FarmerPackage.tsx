interface FarmerPackageProps {
  features: string[];
}

export default function FarmerPackage({ features }: FarmerPackageProps) {
  return (
    <div className="relative p-8 bg-[#1F1F1F] backdrop-blur-sm rounded-[10px] border border-zinc-100/10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
        <div className="flex-1 flex flex-col">
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-2">Farmer Package</h3>
            <p className="text-zinc-400 font-semibold text-sm mb-6">Monthly Subscription, Infinite Possibilities</p>
          </div>

          <ul className="space-y-3 mt-auto pb-[14px]">
            {features.map((feature, index) => (
              <li key={index} className="text-sm font-semibold flex items-center gap-3 text-zinc-300">
                <CheckIcon />
                {feature}
              </li>
            ))}
          </ul>

          <p className="text-zinc-400 text-sm mt-4 font-semibold leading-relaxed">
            Industrial-grade solution offering unlimited VPS instances with automated HWID rotation, integrated Discord bot management, Includes cross-device synchronization, license chaining protection, and instant reseeding for large-scale operations.
            <span className="block mt-2 font-semibold text-zinc-300">
              Cost-efficient infrastructure for professional farming environments.
            </span>
          </p>
        </div>

        <div className="w-full md:w-[300px] flex flex-col justify-between">
          <div className="md:text-right">
            <div className="text-4xl font-bold text-zinc-100">$199.99</div>
            <p className="text-zinc-400 font-semibold text-xs">/ Month</p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              className="w-full py-2.5 font-bold text-[15px] rounded-md transition-colors
                flex items-center justify-center gap-2 border border-[#424040]
                shadow-[0_4px_14px_0_rgba(0,0,0,0.4)] bg-[#282828] text-white
                hover:bg-[#313131] hover:text-white"
            >
              <span>Purchase</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3332 4L5.99984 11.3333L2.6665 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
