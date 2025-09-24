import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, BarChart3, Target, Zap } from "lucide-react";

const metrics = [
  {
    title: "Total Revenue",
    value: "$124,592",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Active Users",
    value: "2,847",
    change: "+8.2%",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.8%",
    icon: Target,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    title: "Performance Score",
    value: "94.2",
    change: "+2.1%",
    icon: TrendingUp,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    title: "Data Processing",
    value: "1.2M",
    change: "+15.3%",
    icon: BarChart3,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    title: "System Health",
    value: "99.9%",
    change: "+0.1%",
    icon: Zap,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100"
  }
];

export const DashboardCards = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Real-Time Analytics</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Monitor your business performance with rich, interactive dashboards
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-gradient-card"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`w-4 h-4 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-success mr-1" />
                  <span className="text-success font-medium">{metric.change}</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};