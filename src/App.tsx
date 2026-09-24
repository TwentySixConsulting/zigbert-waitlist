import { Route, Switch, Router, useLocation } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";
import Landing from "./pages/Landing";
import Methodology from "./pages/Methodology";
import FAQ from "./pages/FAQ";

// "" in dev (base "/"), "/zigbert-waitlist" on GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <Router base={base}>
      <Shell />
    </Router>
  );
}

// Inside <Router> so it can read the current route.
function Shell() {
  const [location] = useLocation();
  // The landing page opens with the full-width launch band, so the thin
  // strip would just repeat it. Inner pages still get the strip.
  const onLanding = location === "/";

  return (
    <>
      <div className="flex min-h-screen flex-col">
        {!onLanding && <AnnouncementBar />}
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Landing} />
            <Route path="/methodology" component={Methodology} />
            <Route path="/faq" component={FAQ} />
            <Route>
              <div className="mx-auto max-w-3xl px-5 py-32 text-center">
                <h1 className="display text-3xl font-bold">Page not found</h1>
                <a href={import.meta.env.BASE_URL} className="btn-primary mt-6">
                  Back to Zigbert
                </a>
              </div>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}
