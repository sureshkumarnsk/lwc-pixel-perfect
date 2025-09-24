import { Header } from "@/components/Header";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { ProductQualityInsights } from "@/components/dashboard/ProductQualityInsights";
import { ProductPerformanceInsights } from "@/components/dashboard/ProductPerformanceInsights";
import { ConcurrencyMetrics } from "@/components/dashboard/ConcurrencyMetrics";
import { ResourcesOverview } from "@/components/dashboard/ResourcesOverview";
import { ResponseTimeDetails } from "@/components/dashboard/ResponseTimeDetails";

const UnifiedFrameworkDetailedView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-6 space-y-6">
        <DashboardHeader />
        <MetricsGrid />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ProductQualityInsights />
          <ProductPerformanceInsights />
        </div>
        <ConcurrencyMetrics />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ResourcesOverview />
          <ResponseTimeDetails />
        </div>
      </main>
    </div>
  );
};

export default UnifiedFrameworkDetailedView;