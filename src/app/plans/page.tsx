import PricingCard from '@/components/PricingCard';
import FarmerPackage from '@/components/FarmerPackage';

export default function PlansPage() {
  const basicFeatures = [
    { text: 'Free HWID Resets' },
    { text: 'Bot Access' },
    { text: '3 HWID Seed Rotations' },
    { text: 'Maximum instance count of 10' },
    { text: 'LIVE Channel Forcing' },
  ];

  const premiumFeatures = [
    { text: 'All Basic Features' },
    { text: 'Priority Bot Access - No throttle' },
    { text: '15 HWID Seed Rotations' },
    { text: 'Maximum instance count of 30' },
    { text: 'LIVE Channel Forcing' },
  ];

  const enterpriseFeatures = [
    { text: 'All Premium Features' },
    { text: 'Priority Bot Access - No throttle' },
    { text: '30 HWID Seed Rotations' },
    { text: 'Maximum instance count of 65' },
    { text: 'Premium Support' },
  ];

  const farmerFeatures = [
    'All Enterprise Features',
    'Unlimited HWID Seed Rotations',
    'Unlimited instances for all redeemed licenses',
    'Premium Bot API commands for specific accounts [/myaccounts, /resethwid, /claim, /fastregister]',
    'Unlimited Account Registrations - Under One Discord',
    'One-time additional 15x Weekly keys for FREE',
  ];

  return (
    <div className="Wrapper">
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="py-4 text-4xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">
              Plans
            </h1>
            <p className="text-zinc-400 font-semibold text-sm mb-24">
              Available priced packages
            </p>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-8">
              <PricingCard
                planName="Basic"
                price="6.99"
                period="Week"
                description="Best option for short term use"
                features={basicFeatures}
              />

              <PricingCard
                planName="Premium"
                price="24.99"
                period="Month"
                description="Best for occasional and constant use"
                isPopular={true}
                features={premiumFeatures}
              />

              <PricingCard
                planName="Enterprise"
                price="59.99"
                period="Quarter"
                description="Extended and profitable usage"
                features={enterpriseFeatures}
              />
            </div>

            <FarmerPackage features={farmerFeatures} />
          </div>
        </div>
      </section>
    </div>
  );
}
