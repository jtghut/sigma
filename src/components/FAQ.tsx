import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="border-t border-zinc-500/10 py-16 md:py-24">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-4">
        <div className="flex flex-col items-center justify-center gap-8 pb-8 md:gap-16 md:pb-48 xl:pb-24">
          <section className="container mx-auto px-4">
            <h1 className="py-4 text-4xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
              Frequently Asked Questions
            </h1>
            <p className="text-zinc-400 text-center font-semibold text-sm mb-32">
              Answering anything you might ask
            </p>

            <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-6">
              <AccordionItem value="item-1" className="border-b border-zinc-700/30 pb-6">
                <AccordionTrigger className="text-md font-medium text-left text-zinc-200">
                  How does the AWP client ensure security?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pt-4">
                  Our AWP client utilizes advanced encryption protocols and Byfron emulation to ensure your activity remains undetected.
                  The client operates with minimal system footprint and doesn't leave traceable files or registry entries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-zinc-700/30 pb-6">
                <AccordionTrigger className="text-md font-medium text-left text-zinc-200">
                  What systems does the client support?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pt-4">
                  The AWP client supports Windows 10/11 (both 64-bit and 32-bit versions). Our software is regularly updated to ensure
                  compatibility with the latest Roblox updates and security measures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-zinc-700/30 pb-6">
                <AccordionTrigger className="text-md font-medium text-left text-zinc-200">
                  How often are updates released?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pt-4">
                  We release updates on a weekly basis to keep pace with Roblox's security updates. Premium users receive priority updates
                  within hours of any Roblox security changes. Emergency patches are pushed immediately when needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-zinc-700/30 pb-6">
                <AccordionTrigger className="text-md font-medium text-left text-zinc-200">
                  How easy is it to setup AWP?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pt-4">
                  Setting up AWP is designed to be straightforward. Simply download the client, run the installer, and follow the on-screen instructions.
                  Premium users have access to our quick-start wizard and can receive personalized setup assistance from our support team if needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </section>
  );
}
