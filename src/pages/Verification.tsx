import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Mail } from "lucide-react";

const Verification = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerification = () => {
    // Simulate verification success
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-primary to-ocean-secondary flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Waves className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          <CardDescription>
            We've sent a verification code to your email address
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <Mail className="w-16 h-16 mx-auto text-primary mb-4" />
            <p className="text-sm text-muted-foreground">
              Please check your email and enter the 6-digit verification code below
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="code">Verification Code</Label>
            <Input
              id="code"
              placeholder="Enter 6-digit code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              maxLength={6}
              className="text-center text-lg tracking-widest"
            />
          </div>
          
          <Button 
            className="w-full" 
            onClick={handleVerification}
            disabled={verificationCode.length !== 6}
          >
            Verify Account
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Didn't receive the code?
            </p>
            <Button variant="link" className="p-0 h-auto">
              Resend Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verification;