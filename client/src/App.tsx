import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AuthGuard from "@/components/auth-guard";
import Home from "@/pages/home";
import UserGuide from "@/pages/user-guide";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/user-guide" component={UserGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthGuard>
          <Toaster />
          <Router />
        </AuthGuard>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
