import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";

const metrics = [
  {
    title: "Environment Health",
    value: "2.1",
    subtitle: "SDB environment",
    trend: "-15%",
    trendDirection: "down",
    status: "Low",
    statusColor: "destructive"
  },
  {
    title: "Total Executions",
    value: "227",
    subtitle: "Day to day",
    trend: "+5%",
    trendDirection: "up",
    status: "High",
    statusColor: "success"
  },
  {
    title: "Automation Health",
    value: "72%",
    subtitle: "Overall aggregate",
    trend: "28%",
    trendDirection: "down",
    status: "Warning",
    statusColor: "warning",
    hasChart: true
  },
  {
    title: "Tests Impacted",
    value: "41",
    subtitle: "",
    trend: "-19%",
    trendDirection: "down",
    status: "High",
    statusColor: "destructive"
  },
  {
    title: "Unique use cases",
    value: "2.3K",
    subtitle: "",
    trend: "-29%",
    trendDirection: "down",
    status: "High",
    statusColor: "success"
  }
];

export const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="relative shadow-md border-0 bg-gradient-card">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Badge 
                variant={metric.statusColor === "success" ? "default" : "destructive"}
                className={`text-xs ${
                  metric.statusColor === "success" ? "bg-success text-success-foreground" :
                  metric.statusColor === "warning" ? "bg-warning text-warning-foreground" :
                  "bg-destructive text-destructive-foreground"
                }`}
              >
                {metric.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold text-foreground">{metric.value}</span>
              {metric.hasChart && (
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
            </div>
            {metric.subtitle && (
              <div className="text-xs text-muted-foreground">{metric.subtitle}</div>
            )}
            <div className="flex items-center space-x-1 text-xs">
              {metric.trendDirection === "up" ? (
                <TrendingUp className="w-3 h-3 text-success" />
              ) : (
                <TrendingDown className="w-3 h-3 text-destructive" />
              )}
              <span className={metric.trendDirection === "up" ? "text-success" : "text-destructive"}>
                {metric.trend}
              </span>
              <span className="text-muted-foreground">vs yesterday</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};