import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const performanceData = [
  { id: "T-2309742", name: "TC Nomenclature 1", slo: "1.4", ept: "", date: "09/12/2025", priority: "P1" },
  { id: "T-2384823", name: "TC Nomenclature 2", slo: "2", ept: "1.2", date: "09/12/2025", priority: "P1" },
  { id: "T-2347823", name: "TC Nomenclature 3", slo: "3", ept: "8.5", date: "09/10/2025", priority: "P0" },
  { id: "T-4837845", name: "TC Nomenclature 4", slo: "3", ept: "3.8", date: "09/12/2025", priority: "P1" },
  { id: "T-3489387", name: "TC Nomenclature 5", slo: "2", ept: "2.3", date: "09/10/2025", priority: "P0" },
];

export const ProductPerformanceInsights = () => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span>Product Performance Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Use-case Breakdown Chart */}
        <div>
          <h3 className="font-medium mb-4">Use-case Breakdown</h3>
          <div className="flex items-center space-x-6">
            {/* Pie Chart */}
            <div className="relative w-32 h-32">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-accent to-blue-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">72</span>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded bg-accent"></div>
                  <span className="text-sm">P0</span>
                </div>
                <span className="text-sm font-medium">48</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded bg-blue-400"></div>
                  <span className="text-sm">P1</span>
                </div>
                <span className="text-sm font-medium">22</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded bg-blue-200"></div>
                  <span className="text-sm">P2</span>
                </div>
                <span className="text-sm font-medium">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded bg-gray-300"></div>
                  <span className="text-sm">P3</span>
                </div>
                <span className="text-sm font-medium">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* EPT Detail Table */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">EPT Detail - Single User</h3>
            <div className="flex space-x-2">
              <Badge variant="outline">All</Badge>
              <Badge variant="outline">Mean SLO</Badge>
              <Badge variant="outline">SLO</Badge>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-2 text-sm font-medium text-muted-foreground">Test Case ID</th>
                  <th className="pb-2 text-sm font-medium text-muted-foreground">Test Case Name</th>
                  <th className="pb-2 text-sm font-medium text-muted-foreground">SLO (s)</th>
                  <th className="pb-2 text-sm font-medium text-muted-foreground">EPT (s)</th>
                  <th className="pb-2 text-sm font-medium text-muted-foreground">Last Successful Run</th>
                  <th className="pb-2 text-sm font-medium text-muted-foreground">Priority</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {performanceData.map((item, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 text-sm font-medium text-primary">{item.id}</td>
                    <td className="py-3 text-sm">{item.name}</td>
                    <td className="py-3 text-sm">
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        {item.slo}
                      </Badge>
                    </td>
                    <td className="py-3 text-sm">
                      {item.ept && (
                        <Badge 
                          variant="secondary" 
                          className={parseFloat(item.ept) > 5 ? "bg-destructive/20 text-destructive" : "bg-success/20 text-success"}
                        >
                          {item.ept}
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{item.date}</td>
                    <td className="py-3 text-sm">
                      <Badge variant="outline" className="text-xs">
                        {item.priority}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};