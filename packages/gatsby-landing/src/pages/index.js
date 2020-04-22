import React from "react";
import {ThemeProvider} from 'styled-components';

import Layout from "../components/layout" 
import SEO from "../components/seo" 

import Navigation from 'common/src/sections-gatsby/Navigation'; 
import Banner from 'common/src/sections-gatsby/Banner-default'; 
import About from 'common/src/sections-gatsby/About';
import Features from 'common/src/sections-gatsby/Features';
import Faq from 'common/src/sections-gatsby/Faq';
import Integrations from 'common/src/sections-gatsby/Integrations';
import AppScreens from 'common/src/sections-gatsby/AppScreens';
import Counters from 'common/src/sections-gatsby/Counters';
import Pricing from 'common/src/sections-gatsby/Pricing';
import Testimonial from 'common/src/sections-gatsby/Testimonial';
import News from 'common/src/sections-gatsby/News';
import Getapp from 'common/src/sections-gatsby/Getapp';
import Contact from 'common/src/sections-gatsby/Contact';
import Footer from 'common/src/sections-gatsby/Footer';

import { GlobalStyle } from 'common/src/sections-gatsby/app.style';
import theme from 'common/src/theme/app/themeStyles';

const IndexPage = () => (
  <ThemeProvider theme={theme}> 
    <GlobalStyle />
     <Layout>
      <SEO title="Appion Gatsby Home" />
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
    </Layout>
  </ThemeProvider>
)

export default IndexPage
