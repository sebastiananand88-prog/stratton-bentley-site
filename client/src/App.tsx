import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import StrattonHome from "./pages/StrattonHome";
import TestPage from "./pages/TestPage";
import About from "./pages/About";
import EyeExaminations from "./pages/EyeExaminations";
import OctScans from "./pages/OctScans";
import Eyewear from "./pages/Eyewear";
import ContactLenses from "./pages/ContactLenses";
import ChildrensEyeCare from "./pages/ChildrensEyeCare";
import VisualStress from "./pages/VisualStress";
import Faq from "./pages/Faq";
import Book from "./pages/Book";
import Contact from "./pages/Contact";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={StrattonHome} />
      <Route path={"/about"} component={About} />
      <Route path={"/eye-examinations"} component={EyeExaminations} />
      <Route path={"/oct-scans"} component={OctScans} />
      <Route path={"/eyewear"} component={Eyewear} />
      <Route path={"/contact-lenses"} component={ContactLenses} />
      <Route path={"/childrens-eye-care"} component={ChildrensEyeCare} />
      <Route path={"/visual-stress-assessments"} component={VisualStress} />
      <Route path={"/faq"} component={Faq} />
      <Route path={"/book"} component={Book} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/audit"} component={Home} />
      <Route path={"/test"} component={TestPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
