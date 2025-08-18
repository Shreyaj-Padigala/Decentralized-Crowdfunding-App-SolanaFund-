import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  LayoutDashboard, 
  Plus, 
  Wallet, 
  Code, 
  BarChart3, 
  Sun, 
  Moon,
  Github,
  ExternalLink
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: LayoutDashboard,
  },
  {
    title: "Create Campaign",
    url: createPageUrl("CreateCampaign"),
    icon: Plus,
  },
  {
    title: "My Wallet",
    url: createPageUrl("Wallet"),
    icon: Wallet,
  },
  {
    title: "Analytics",
    url: createPageUrl("Analytics"),
    icon: BarChart3,
  },
  {
    title: "Code & Docs",
    url: createPageUrl("Documentation"),
    icon: Code,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <style>{`
        :root {
          --primary: 139 92 246;
          --primary-foreground: 255 255 255;
          --secondary: 30 41 59;
          --background: 255 255 255;
          --foreground: 2 8 23;
        }
        
        .dark {
          --background: 2 8 23;
          --foreground: 248 250 252;
          --secondary: 71 85 105;
        }
        
        .solana-gradient {
          background: linear-gradient(135deg, #9945FF 0%, #14F195 100%);
        }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .glow {
          box-shadow: 0 0 20px rgba(153, 69, 255, 0.3);
        }
      `}</style>
      
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background text-foreground transition-colors duration-300">
          <Sidebar className="border-r border-gray-200 dark:border-gray-800">
            <SidebarHeader className="border-b border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 solana-gradient rounded-xl flex items-center justify-center animate-float">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <div>
                  <h2 className="font-bold text-xl bg-gradient-to-r from-violet-600 to-emerald-400 bg-clip-text text-transparent">
                    SolanaFund
                  </h2>
                  <p className="text-xs text-muted-foreground">Decentralized Crowdfunding</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent className="p-2">
              <SidebarGroup>
                <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-2">
                  Navigation
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className={`hover:bg-violet-50 dark:hover:bg-violet-950 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-200 rounded-lg mb-1 ${
                            location.pathname === item.url ? 'bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300' : ''
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-3 py-2">
                            <item.icon className="w-4 h-4" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-2">
                  Technical Showcase
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="px-3 py-2 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Framework</span>
                      <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">Anchor</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Language</span>
                      <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Rust</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Network</span>
                      <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">Devnet</Badge>
                    </div>
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="w-8 h-8"
                  >
                    {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
                <Badge variant="outline" className="text-xs">
                  Portfolio
                </Badge>
              </div>
            </SidebarFooter>
          </Sidebar>

          <main className="flex-1 flex flex-col">
            <header className="bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 px-6 py-4 md:hidden">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200" />
                <h1 className="text-xl font-semibold">SolanaFund</h1>
              </div>
            </header>

            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
