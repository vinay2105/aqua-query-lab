import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Map, BarChart3, TrendingUp, Waves } from "lucide-react";

const Visualization = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate("/home")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold">Data Visualization</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="maps" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="maps">Interactive Maps</TabsTrigger>
            <TabsTrigger value="profiles">Profiles</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="comparisons">Comparisons</TabsTrigger>
          </TabsList>

          <TabsContent value="maps" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="w-5 h-5" />
                  <span>ARGO Float Positions</span>
                </CardTitle>
                <CardDescription>
                  Real-time positions and trajectories of active ARGO floats worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 h-96 rounded-lg flex items-center justify-center border">
                  <div className="text-center">
                    <Map className="w-16 h-16 mx-auto text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Interactive Ocean Map</h3>
                    <p className="text-muted-foreground">
                      This would display a Leaflet/Cesium map showing ARGO float positions,
                      <br />trajectories, and real-time data collection points.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profiles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Temperature Profiles</CardTitle>
                  <CardDescription>Depth vs temperature data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-b from-red-100 to-blue-100 dark:from-red-900/20 dark:to-blue-900/20 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Temperature-Depth Profile Chart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Salinity Profiles</CardTitle>
                  <CardDescription>Depth vs salinity measurements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-b from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Waves className="w-12 h-12 mx-auto text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Salinity-Depth Profile Chart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Time Series Analysis</span>
                </CardTitle>
                <CardDescription>
                  Long-term trends in oceanographic parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 mx-auto text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Time Series Visualization</h3>
                    <p className="text-muted-foreground">
                      Interactive charts showing temperature, salinity, and BGC parameter trends
                      <br />over time with filtering and zoom capabilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparisons" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regional Comparison</CardTitle>
                  <CardDescription>Compare data across different ocean regions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Map className="w-12 h-12 mx-auto text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Regional Comparison Charts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Parameter Correlation</CardTitle>
                  <CardDescription>Analyze relationships between measurements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-cyan-900/20 dark:to-purple-900/20 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Correlation Analysis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Visualization;