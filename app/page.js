import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MEFrameworkSection from "@/components/MEFrameworkSection";
import BudgetAllocationSection from "@/components/BudgetAllocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SimplifyingDataSection  from "@/components/SimplifyingDataSection";
import SolvingAffordabilitySection from "@/components/SolvingAffordabilitySection";
import InnovatingTechnologySection from "@/components/InnovatingTechnologySection";

export default function Home() {
  return (
    <div className="">
      <main className=" ">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <MEFrameworkSection />
        <SimplifyingDataSection />
        <SolvingAffordabilitySection />
        <InnovatingTechnologySection />
        <BudgetAllocationSection />
        <ContactSection />
        <Footer />  
      </main>
     
    </div>
  );
}
