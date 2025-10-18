import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import DhanterasPage from "@/pages/DhanterasPage";
import PlaceholderFestivalPage from "@/pages/PlaceholderFestivalPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/festival/dhanteras" component={DhanterasPage} />
      <Route path="/festival/choti-diwali">
        {() => <PlaceholderFestivalPage festivalName="Choti Diwali" />}
      </Route>
      <Route path="/festival/diwali">
        {() => <PlaceholderFestivalPage festivalName="Diwali" />}
      </Route>
      <Route path="/festival/govardhan-pooja">
        {() => <PlaceholderFestivalPage festivalName="Govardhan Pooja" />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
