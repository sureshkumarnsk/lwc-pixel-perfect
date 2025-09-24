import { Button } from "@/components/ui/button";
import { Menu, Bell, User } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SF</span>
            </div>
            <span className="text-xl font-bold text-foreground">SalesForce Pro</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/unified-framework" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Analytics</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Reports</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Settings</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="/unified-framework" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Analytics</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Reports</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Settings</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};