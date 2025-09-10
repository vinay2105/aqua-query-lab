import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Waves, BarChart3, MessageSquare, Database } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-primary via-ocean-secondary to-ocean-accent">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-white">SeaSpeak</h1>
          </div>
          <div className="space-x-4">
            <Button 
              onClick={() => navigate("/home")}
              className="bg-white text-ocean-primary hover:bg-white/90"
            >
              Enter SeaSpeak
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered Ocean Intelligence
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Unlock the secrets of ARGO float data through natural language queries. 
            Explore oceanographic data like never before with intelligent visualization and analysis.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/home")}
            className="bg-white text-ocean-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            Start Exploring
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <MessageSquare className="w-12 h-12 mb-4 text-ocean-accent" />
            <h3 className="text-xl font-semibold mb-2">Natural Language Queries</h3>
            <p className="text-white/80">Ask questions in plain English and get instant insights from oceanographic data.</p>
          </Card>
          
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <BarChart3 className="w-12 h-12 mb-4 text-ocean-accent" />
            <h3 className="text-xl font-semibold mb-2">Interactive Visualization</h3>
            <p className="text-white/80">Explore data through dynamic charts, maps, and 3D visualizations.</p>
          </Card>
          
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Database className="w-12 h-12 mb-4 text-ocean-accent" />
            <h3 className="text-xl font-semibold mb-2">Data Explorer</h3>
            <p className="text-white/80">Access raw ARGO datasets with powerful filtering and export capabilities.</p>
          </Card>
          
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Waves className="w-12 h-12 mb-4 text-ocean-accent" />
            <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
            <p className="text-white/80">Monitor ARGO float positions and data collection in real-time.</p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dive Deep?
          </h2>
          <p className="text-white/90 mb-6">
            Join researchers worldwide in exploring ocean data with AI assistance.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/home")}
            className="bg-white text-ocean-primary hover:bg-white/90"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;