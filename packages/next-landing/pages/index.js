import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../components/main";

import Navigation from "common/src/sections/Navigation";
import Banner from "common/src/sections/Banner-default";
import About from "common/src/sections/About";
import Features from "common/src/sections/Features";
import Faq from "common/src/sections/Faq";
import Integrations from "common/src/sections/Integrations";
import AppScreens from "common/src/sections/AppScreens";
import Counters from "common/src/sections/Counters";
import Pricing from "common/src/sections/Pricing";
import Testimonial from "common/src/sections/Testimonial";
import News from "common/src/sections/News";
import Getapp from "common/src/sections/Getapp";
import Contact from "common/src/sections/Contact";
import Footer from "common/src/sections/Footer";

import { GlobalStyle } from "common/src/sections/app.style";
import theme from "common/src/theme/app/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Appion React Gatsby nextjs landing">
      <GlobalStyle />
      <Navigation />
      <Banner />
      <About />
      <Integrations />
      <Features />
      <AppScreens />
      <Counters />
      <Pricing />
      <Testimonial />
      <Faq />
      <Getapp />
      <News />
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
