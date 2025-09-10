import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, User, Globe, Palette, Shield, LogOut } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();

  const settingsOptions = [
    {
      title: "Profile",
      description: "Manage your account information and preferences",
      icon: User,
      action: () => console.log("Profile clicked")
    },
    {
      title: "Language",
      description: "Change your language preferences",
      icon: Globe,
      action: () => console.log("Language clicked")
    },
    {
      title: "Preferences",
      description: "Customize your data visualization and query preferences",
      icon: Palette,
      action: () => console.log("Preferences clicked")
    },
    {
      title: "Security",
      description: "Update your password and security settings",
      icon: Shield,
      action: () => console.log("Security clicked")
    }
  ];

  const handleLogout = () => {
    navigate("/");
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
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your account preferences and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {settingsOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={option.title}>
                  <div 
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                    onClick={option.action}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Configure
                    </Button>
                  </div>
                  {index < settingsOptions.length - 1 && <Separator />}
                </div>
              );
            })}
            
            <Separator />
            
            <div 
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-destructive/5 cursor-pointer transition-colors"
              onClick={handleLogout}
            >
              <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                <LogOut className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-destructive">Log Out</h3>
                <p className="text-sm text-muted-foreground">Sign out of your account</p>
              </div>
              <Button variant="destructive" size="sm">
                Log Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Settings;