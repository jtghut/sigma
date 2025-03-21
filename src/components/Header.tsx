import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="top-0 z-30 w-full px-4 sm:fixed backdrop-blur from-[#282828] to-bg-zinc-900/50">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center justify-between h-16 sm:h-20 relative">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/2947577290/4290961355.svg"
                alt="AWP Logo"
                width={80}
                height={30}
                className="h-8 w-auto"
              />
            </Link>

            <nav className="hidden md:flex flex-1 justify-center absolute left-0 right-0">
              <ul className="flex items-center gap-8 lg:gap-12 xl:gap-32">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-semibold duration-150 hover:text-zinc-50 text-zinc-200"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plans"
                    className="text-sm font-semibold duration-150 hover:text-zinc-50 text-zinc-400"
                  >
                    PLANS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm font-semibold duration-150 hover:text-zinc-50 text-zinc-400"
                  >
                    COMMUNITY
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden md:block w-[110px]"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
