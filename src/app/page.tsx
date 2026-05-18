import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="bg-bg">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
