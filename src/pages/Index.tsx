import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DashboardCards } from "@/components/DashboardCards";
import { DataVisualization } from "@/components/DataVisualization";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <DashboardCards />
          </div>
        </section>
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <DataVisualization />
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;