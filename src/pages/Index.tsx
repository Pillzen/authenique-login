import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl text-muted-foreground">Get started by signing in to your account</p>
        <Button asChild>
          <Link to="/auth">Sign In</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;