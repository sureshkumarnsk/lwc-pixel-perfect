import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingDown } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Morning, Krishnan!</h1>
          <div className="flex items-center space-x-2">
            <span className="text-muted-foreground">Heads up. Your current SDB environment health is trending</span>
            <Badge variant="destructive" className="bg-destructive text-destructive-foreground">
              negative
            </Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground mb-1">View: Executive</div>
          <Button variant="outline" size="sm">
            Switch View
          </Button>
        </div>
      </div>
      
      <Alert className="border-warning bg-warning/10">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <AlertDescription className="text-warning-foreground">
          <strong>Contributing Factors:</strong> Consistent high resource utilization - CPU
          <Button variant="link" size="sm" className="ml-2 p-0 h-auto text-primary">
            Simulate Real Agent Attention
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
};