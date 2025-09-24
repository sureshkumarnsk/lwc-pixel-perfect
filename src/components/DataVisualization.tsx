import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const performanceData = [
  { label: "Sales Pipeline", value: 87, target: 90, status: "success" },
  { label: "Customer Satisfaction", value: 94, target: 95, status: "success" },
  { label: "Lead Conversion", value: 72, target: 80, status: "warning" },
  { label: "System Performance", value: 98, target: 95, status: "success" },
];

const recentActivities = [
  { action: "New lead created", user: "Sarah Johnson", time: "2 minutes ago", status: "new" },
  { action: "Deal closed", user: "Mike Chen", time: "15 minutes ago", status: "success" },
  { action: "Meeting scheduled", user: "Emma Davis", time: "1 hour ago", status: "pending" },
  { action: "Report generated", user: "System", time: "2 hours ago", status: "info" },
];

export const DataVisualization = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Performance Insights</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Track key metrics and stay informed with real-time updates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Metrics */}
        <Card className="shadow-lg border-0 bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl">Performance Metrics</CardTitle>
            <CardDescription>Current performance vs targets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {performanceData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{item.value}%</span>
                    <Badge 
                      variant={item.status === "success" ? "default" : "secondary"}
                      className={item.status === "success" ? "bg-success text-success-foreground" : "bg-warning text-warning-foreground"}
                    >
                      {item.value >= item.target ? "On Track" : "Needs Attention"}
                    </Badge>
                  </div>
                </div>
                <Progress value={item.value} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Target: {item.target}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-lg border-0 bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-xl">Recent Activities</CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === "success" ? "bg-success" :
                  activity.status === "warning" ? "bg-warning" :
                  activity.status === "new" ? "bg-accent" : "bg-primary"
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.action}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    by {activity.user} • {activity.time}
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    activity.status === "success" ? "border-success text-success" :
                    activity.status === "warning" ? "border-warning text-warning" :
                    activity.status === "new" ? "border-accent text-accent" : "border-primary text-primary"
                  }`}
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};