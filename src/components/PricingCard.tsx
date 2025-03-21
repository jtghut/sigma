import { ReactNode } from 'react';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  planName: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: PricingFeature[];
  className?: string;
}

export default function PricingCard({
  planName,
  price,
  period,
  description,
  isPopular = false,
  features,
  className = '',
}: PricingCardProps) {
  return (
    <div
      className={`
        relative p-6 bg-[#191818] backdrop-blur-sm rounded-[10px] border w-[390px]
        ${isPopular
          ? 'bg-[#FFFF] backdrop-blur-lg shadow-premium border-[#FFFF] bg-gradient-card transform translate-y-[-10px] z-10'
          : 'bg-[#1F1F1F] backdrop-blur-sm border-[#424040]'
        }
        transition-all duration-300 hover:translate-y-[-2px]
        ${className}
      `}
    >
      <div className="absolute top-4 right-5 min-w-fit h-8 px-4 rounded-[13px] border-[2px] flex items-center justify-center bg-transparent shadow-[0_4px_14px_0_rgba(0,0,0,0.4)] border-white">
        <span className={`text-xs font-semibold whitespace-nowrap ${isPopular ? 'text-[#191818]' : 'text-white'}`}>
          {planName}
        </span>
      </div>

      <div className="flex justify-between items-start mb-6">
        <p className={`font-semibold text-xs ${isPopular ? 'text-[#191818]' : 'text-zinc-500'} drop-shadow-xl`}>
          Chosen by 3000x customers
        </p>
      </div>

      <div className="flex items-baseline gap-1.5 mb-5">
        <span className={`text-lg font-semibold align-top ${isPopular ? 'text-[#191818]' : 'text-zinc-100'} drop-shadow-lg`}>$</span>
        <span className={`text-4xl font-bold ${isPopular ? 'text-[#191818]' : 'text-zinc-100'} drop-shadow-lg`}>
          {price}
        </span>
        <span className={`text-sm font-semibold ml-1.5 ${isPopular ? 'text-[#191818]' : 'text-zinc-400'} drop-shadow-lg`}>
          / {period}
        </span>
      </div>

      <div className="mb-7">
        <p className={`text-xs font-semibold ${isPopular ? 'text-[#191818]' : 'text-zinc-400'} drop-shadow-lg`}>
          {description}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`
              text-sm font-semibold flex items-center gap-3
              ${isPopular ? 'text-[#191818]' : 'text-zinc-300'}
            `}
          >
            <CheckIcon />
            {feature.text}
          </li>
        ))}
      </ul>

      <button
        className={`
          w-full py-2.5 font-bold text-[15px] rounded-md transition-colors
          flex items-center justify-center gap-2 border border-[#424040]
          shadow-[0_4px_14px_0_rgba(0,0,0,0.4)]
          ${isPopular
            ? 'bg-[#191818] text-white hover:bg-zinc-300 hover:text-[#191818]'
            : 'bg-[#282828] text-white hover:bg-[#313131] hover:text-white'
          }
        `}
      >
        <span>Purchase</span>
      </button>
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
