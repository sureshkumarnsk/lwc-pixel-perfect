import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";

const metrics = [
  {
    title: "User Load",
    subtitle: "Time",
    value: "500",
    trend: "+1.6%",
    trendDirection: "up",
    period: "vs last run"
  },
  {
    title: "Throughput Achieved",
    subtitle: "Time",
    value: "23K",
    trend: "+3%",
    trendDirection: "up",
    period: "period vs period",
    badge: "Value"
  },
  {
    title: "Transactions Meeting SLO",
    subtitle: "Time Effect",
    value: "52%",
    trend: "+9.6%",
    trendDirection: "up",
    period: "vs last month"
  },
  {
    title: "Transactions per Second",
    subtitle: "Time",
    value: "48",
    trend: "+7.3%",
    trendDirection: "up",
    period: "period vs period"
  },
  {
    title: "Transactions above SLO",
    subtitle: "Time Effect",
    value: "40%",
    trend: "+5.6%",
    trendDirection: "up",
    period: "vs last month"
  },
  {
    title: "Total Orders Created",
    subtitle: "Time",
    value: "5400",
    trend: "+5%",
    trendDirection: "up",
    period: "period vs period"
  }
];

export const ConcurrencyMetrics = () => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Concurrency Metrics</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Overview</Button>
            <Button variant="outline" size="sm">Details</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground">{metric.subtitle}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded"></div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                  {metric.badge && (
                    <span className="text-sm text-accent">{metric.badge}</span>
                  )}
                </div>
                <div className="flex items-center space-x-1 text-xs">
                  {metric.trendDirection === "up" ? (
                    <TrendingUp className="w-3 h-3 text-success" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-destructive" />
                  )}
                  <span className={metric.trendDirection === "up" ? "text-success" : "text-destructive"}>
                    {metric.trend}
                  </span>
                  <span className="text-muted-foreground">{metric.period}</span>
                </div>
              </div>
              
              {/* Simple line chart representation */}
              <div className="h-20 bg-muted/20 rounded flex items-end p-2">
                <div className="flex items-end space-x-1 w-full">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-primary flex-1 rounded-t"
                      style={{
                        height: `${Math.random() * 60 + 20}%`,
                        opacity: i === 11 ? 1 : 0.6
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Time</span>
                <span>Time</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">
            View Detailed Results
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};