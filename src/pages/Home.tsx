import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Settings, MessageSquare, BarChart3, Database, History } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const navigationCards = [
    {
      title: "Chatbot",
      description: "Query ocean data using natural language",
      icon: MessageSquare,
      route: "/chatbot",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Visualization",
      description: "Interactive maps and data visualizations",
      icon: BarChart3,
      route: "/visualization",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      title: "Data Explorer",
      description: "Browse and export raw datasets",
      icon: Database,
      route: "/data-explorer",
      gradient: "from-cyan-500 to-teal-600"
    },
    {
      title: "Recent Queries",
      description: "View your search history and saved results",
      icon: History,
      route: "/recent-queries",
      gradient: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">SeaSpeak</h1>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/settings")}
            className="flex items-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to SeaSpeak</h1>
          <p className="text-xl text-muted-foreground">
            Explore oceanographic data through AI-powered insights and interactive visualizations
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary">2,847</div>
              <p className="text-sm text-muted-foreground">Active ARGO Floats</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary">156,493</div>
              <p className="text-sm text-muted-foreground">Recent Profiles</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary">98.7%</div>
              <p className="text-sm text-muted-foreground">Data Coverage</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {navigationCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card 
                key={card.title}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 group"
                onClick={() => navigate(card.route)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Explore {card.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;