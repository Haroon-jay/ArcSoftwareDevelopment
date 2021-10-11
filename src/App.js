import React, { useState } from "react";
import Header from "./components/ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/ui/Footer";
import theme from "./components/ui/Theme";
import LandingPage from "./components/LandingPage";
import CustomSoftware from "./components/CustomSoftware";
import Services from "./components/Services";
import MobileApps from "./components/MobileApps";
import Revolution from "./components/Revolution";
import Websites from "./components/Websites";
import About from "./components/About";
import Contact from "./components/Contact";
import Estimate from "./components/Estimate";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => (
              <MobileApps
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/websites"
            render={(props) => (
              <Websites
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/revolution"
            render={(props) => (
              <Revolution
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => (
              <About
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
          <Route
            exact
            path="/estimate"
            render={(props) => (
              <Estimate
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
