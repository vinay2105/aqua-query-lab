import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Download, Filter, Search } from "lucide-react";

const DataExplorer = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("csv");

  // Mock data
  const mockData = [
    {
      floatId: "5906468",
      latitude: "45.123",
      longitude: "-123.456",
      date: "2024-01-15",
      temperature: "12.4°C",
      salinity: "34.8 PSU",
      pressure: "150 dbar"
    },
    {
      floatId: "5906469",
      latitude: "42.789",
      longitude: "-125.123",
      date: "2024-01-15",
      temperature: "11.8°C",
      salinity: "34.6 PSU",
      pressure: "200 dbar"
    },
    {
      floatId: "5906470",
      latitude: "40.456",
      longitude: "-127.890",
      date: "2024-01-14",
      temperature: "13.2°C",
      salinity: "35.1 PSU",
      pressure: "175 dbar"
    }
  ];

  const handleExport = () => {
    console.log(`Exporting data in ${selectedFormat} format`);
  };

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
          <h1 className="text-2xl font-bold">Data Explorer</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Data Filters</span>
            </CardTitle>
            <CardDescription>
              Filter and search through ARGO float datasets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Search by Float ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7days">Last 7 days</SelectItem>
                  <SelectItem value="last30days">Last 30 days</SelectItem>
                  <SelectItem value="last6months">Last 6 months</SelectItem>
                  <SelectItem value="lastyear">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ocean Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pacific">Pacific Ocean</SelectItem>
                  <SelectItem value="atlantic">Atlantic Ocean</SelectItem>
                  <SelectItem value="indian">Indian Ocean</SelectItem>
                  <SelectItem value="arctic">Arctic Ocean</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Parameter Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="temperature">Temperature</SelectItem>
                  <SelectItem value="salinity">Salinity</SelectItem>
                  <SelectItem value="pressure">Pressure</SelectItem>
                  <SelectItem value="bgc">BGC Parameters</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>ARGO Float Data</CardTitle>
                <CardDescription>
                  Raw dataset with filtering and export capabilities
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="netcdf">NetCDF</SelectItem>
                    <SelectItem value="ascii">ASCII</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleExport}>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Float ID</TableHead>
                  <TableHead>Latitude</TableHead>
                  <TableHead>Longitude</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Temperature</TableHead>
                  <TableHead>Salinity</TableHead>
                  <TableHead>Pressure</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.floatId}</TableCell>
                    <TableCell>{row.latitude}</TableCell>
                    <TableCell>{row.longitude}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.temperature}</TableCell>
                    <TableCell>{row.salinity}</TableCell>
                    <TableCell>{row.pressure}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="mt-4 flex justify-between items-center text-sm text-muted-foreground">
              <div>Showing 3 of 156,493 results</div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DataExplorer;