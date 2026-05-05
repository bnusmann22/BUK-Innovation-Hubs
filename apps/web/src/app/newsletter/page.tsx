import { HeroSection, SubscriptionForm, BenefitsSection, ArchiveSection, PrivacyNotice } from '@/components/sections/newsletter';

export default function NewsletterPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SubscriptionForm />
      <BenefitsSection />
      <ArchiveSection />
      <PrivacyNotice />
    </div>
  );
}
