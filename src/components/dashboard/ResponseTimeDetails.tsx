import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const responseTimeData = [
  { id: "T-2309742", name: "TC Nomenclature 1", api: "200", slo: "100", responseTime: "102", date: "09/12/2025", priority: "P0" },
  { id: "T-7384823", name: "TC Nomenclature 2", api: "200", slo: "100", responseTime: "95", date: "09/12/2025", priority: "P1" },
  { id: "T-2347823", name: "TC Nomenclature 3", api: "200", slo: "5000", responseTime: "4800", date: "09/10/2025", priority: "P0" },
  { id: "T-4837845", name: "TC Nomenclature 4", api: "200", slo: "100", responseTime: "92", date: "09/12/2025", priority: "P1" },
  { id: "T-3489387", name: "TC Nomenclature 5", api: "200", slo: "4000", responseTime: "3850", date: "09/10/2025", priority: "P0" },
  { id: "T-3084834", name: "TC Nomenclature 6", api: "200", slo: "100", responseTime: "88", date: "09/12/2025", priority: "P0" },
  { id: "T-2988538", name: "TC Nomenclature 7", api: "200", slo: "100", responseTime: "95", date: "09/12/2025", priority: "P0" },
  { id: "T-4387591", name: "TC Nomenclature 8", api: "200", slo: "100", responseTime: "90", date: "09/12/2025", priority: "P0" }
];

export const ResponseTimeDetails = () => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Response Time Detail - Concurrency</CardTitle>
          <div className="flex space-x-2">
            <Badge variant="outline">All</Badge>
            <Badge variant="outline">Mean SLO</Badge>
            <Badge variant="outline">SLO</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 text-sm font-medium text-muted-foreground">Test Case ID</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">API</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">SLO (ms)</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Response Time (ms)</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Last Successful Run</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Priority</th>
                <th className="pb-3 text-sm font-medium text-muted-foreground">Bug</th>
              </tr>
            </thead>
            <tbody>
              {responseTimeData.map((item, index) => {
                const responseTime = parseInt(item.responseTime);
                const sloTime = parseInt(item.slo);
                const isWithinSLO = responseTime <= sloTime;
                
                return (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="py-3 text-sm font-medium text-primary">{item.id}</td>
                    <td className="py-3 text-sm">{item.name}</td>
                    <td className="py-3 text-sm">
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">
                        {item.slo}
                      </Badge>
                    </td>
                    <td className="py-3 text-sm">
                      <Badge 
                        variant="secondary" 
                        className={isWithinSLO ? "bg-success/20 text-success" : "bg-warning/20 text-warning"}
                      >
                        {item.responseTime}
                      </Badge>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{item.date}</td>
                    <td className="py-3 text-sm">
                      <Badge variant="outline" className="text-xs">
                        {item.priority}
                      </Badge>
                    </td>
                    <td className="py-3 text-sm">
                      {!isWithinSLO && (
                        <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                          W-{item.id.split('-')[1]}
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};