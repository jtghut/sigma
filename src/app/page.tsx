import ClientStatus from '@/components/ClientStatus';
import CodeEditor from '@/components/CodeEditor';
import ExploreButton from '@/components/ExploreButton';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
      <div className="flex flex-col items-center justify-center max-w-7xl px-4 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
        <ClientStatus />
        <CodeEditor />
        <ExploreButton />
      </div>

      <FAQ />
    </div>
  );
}
