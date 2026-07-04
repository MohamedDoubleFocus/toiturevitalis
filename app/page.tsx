import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import ProcessSteps from "@/components/ProcessSteps";
import ComparisonTable from "@/components/ComparisonTable";
import Benefits from "@/components/Benefits";
import ResultsSection from "@/components/ResultsSection";
import Credibility from "@/components/Credibility";
import Testimonials from "@/components/Testimonials";
import SectorsSection from "@/components/SectorsSection";
import FaqSection from "@/components/FaqSection";
import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ProblemSection />
      <ProcessSteps />
      <ComparisonTable />
      <Benefits />
      <ResultsSection />
      <Credibility />
      <Testimonials />
      <SectorsSection />
      <FaqSection />
      <LeadForm />
    </main>
  );
}
