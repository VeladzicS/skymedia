import React, { useContext } from "react";
import GlobalStyle from "./globalStyles";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portolio";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Navbar, Footer, TopBar } from "./components";
import ScrollTop from "./components/ScrollTop";
import "./App.scss";
import { I18nProvider } from "./providers/i18n";
import { AppContext } from "./providers/context";

function App() {
  const { state } = useContext(AppContext);
  return (
    <I18nProvider locale={state.siteLang}>
      <GlobalStyle />
      <ScrollTop />
      <TopBar />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/terms" exact component={Terms} />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>

      <Footer />
    </I18nProvider>
  );
}

export default App;
