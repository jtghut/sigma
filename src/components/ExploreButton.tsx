import Link from 'next/link';

export default function ExploreButton() {
  return (
    <Link href="/plans" passHref>
      <button
        className="mx-auto flex items-center gap-2 px-6 py-3 bg-[#282828] text-white rounded-lg border border-[#424040] font-semibold text-sm md:text-base duration-150 hover:bg-opacity-90 relative overflow-hidden shadow-[0_4px_14px_0_rgba(0,0,0,0.4)]"
      >
        <span className="relative z-10 flex items-center">
          Explore Pricing Plans
          <ArrowRight className="inline-block ml-2" />
        </span>
      </button>
    </Link>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z"
        fill="currentColor"
      />
    </svg>
  );
}
