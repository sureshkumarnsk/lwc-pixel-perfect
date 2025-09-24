import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const useCaseData = [
  { feature: "Feature 1", value: 40, color: "bg-blue-500" },
  { feature: "Feature 2", value: 32, color: "bg-blue-400" },
  { feature: "Feature 3", value: 12, color: "bg-blue-300" },
  { feature: "Feature 4", value: 10, color: "bg-blue-200" },
  { feature: "Feature 5", value: 6, color: "bg-blue-100" },
];

const testCases = [
  { id: "T-2309742", name: "TC Nomenclature 1", status: "PASS", date: "09/12/2025", priority: "P0" },
  { id: "T-2384823", name: "TC Nomenclature 2", status: "PASS", date: "09/12/2025", priority: "P1" },
  { id: "T-2347823", name: "TC Nomenclature 3", status: "PASS", date: "09/10/2025", priority: "P2" },
  { id: "T-4837845", name: "TC Nomenclature 4", status: "PASS", date: "09/12/2025", priority: "P0" },
  { id: "T-3489387", name: "TC Nomenclature 5", status: "FAIL", date: "09/10/2025", priority: "P0" },
];

export const ProductQualityInsights = () => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">Q</span>
          </div>
          <span>Product Quality Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Use-case Breakdown */}
        <div>
          <h3 className="font-medium mb-4">Use-case Breakdown</h3>
          <div className="flex items-center space-x-6">
            {/* Pie Chart Representation */}
            <div className="relative w-32 h-32">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">94</span>
                </div>
              </div>
            </div>
            
            {/* Feature Breakdown */}
            <div className="flex-1 space-y-2">
              {useCaseData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded ${item.color}`}></div>
                    <span className="text-sm">{item.feature}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-3">
          {useCaseData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{item.feature}</span>
                <span>{item.value}%</span>
              </div>
              <Progress value={item.value} className="h-2" />
            </div>
          ))}
        </div>

        {/* Use-case Detail Table */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Use-case Detail</h3>
            <div className="flex space-x-2">
              <Badge variant="outline">All</Badge>
              <Badge variant="outline">Pass</Badge>
              <Badge variant="outline">Fail</Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            {testCases.map((testCase, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-primary">{testCase.id}</span>
                  <span className="text-sm">{testCase.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant={testCase.status === "PASS" ? "default" : "destructive"}
                    className={testCase.status === "PASS" ? "bg-success text-success-foreground" : ""}
                  >
                    {testCase.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{testCase.date}</span>
                  <Badge variant="outline" className="text-xs">
                    {testCase.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};