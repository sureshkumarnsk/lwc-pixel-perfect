import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const resourceData = [
  { label: "Memory", value: "65%", color: "bg-yellow-500" },
  { label: "CPU", value: "20%", color: "bg-green-500" },
  { label: "DB CPU", value: "30%", color: "bg-blue-500" },
  { label: "I/O", value: "15%", color: "bg-purple-500" }
];

export const ResourcesOverview = () => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-card">
      <CardHeader>
        <CardTitle>Resources at a Glance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Donut Chart */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48">
            {/* Outer ring segments */}
            <div className="absolute inset-0 rounded-full" style={{
              background: `conic-gradient(
                #eab308 0deg 234deg,
                #22c55e 234deg 306deg,
                #3b82f6 306deg 414deg,
                #a855f7 414deg 468deg,
                #f3f4f6 468deg 360deg
              )`
            }}>
              {/* Inner circle */}
              <div className="absolute inset-6 bg-background rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 gap-4">
          {resourceData.map((resource, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded ${resource.color}`}></div>
                <span className="text-sm font-medium">{resource.label}</span>
              </div>
              <span className="text-sm font-bold">{resource.value}</span>
            </div>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold text-foreground">65%</div>
          <div className="text-sm text-muted-foreground">Peak Resource Utilization</div>
        </div>
      </CardContent>
    </Card>
  );
};