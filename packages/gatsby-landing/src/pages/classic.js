import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "common/src/sections-gatsby/Navigation"
import BannerClassic from "common/src/sections-gatsby/Banner-classic"
import AboutClassic from "common/src/sections-gatsby/About-classic"
import FeaturesClassic from "common/src/sections-gatsby/Features-classic"
import FaqClassic from "common/src/sections-gatsby/Faq-Classic"
import Integrations from "common/src/sections-gatsby/Integrations"
import AppScreens from "common/src/sections-gatsby/AppScreens-classic"
import Counter from "common/src/sections-gatsby/Counters"
import Pricing from "common/src/sections-gatsby/Pricing"
import Testimonial from "common/src/sections-gatsby/Testimonial"
import News from "common/src/sections-gatsby/News"
import Getapp from "common/src/sections-gatsby/Getapp"
import Client from "common/src/sections-gatsby/Client"
import Footer from "common/src/sections-gatsby/Footer-classic"

import { GlobalStyle } from "common/src/sections-gatsby/app.style"
import theme from "common/src/theme/classic/themeStyles"

const ClassicPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <BannerClassic />
      <AboutClassic />
      <Integrations />
      <FeaturesClassic />
      <AppScreens />
      <Counter />
      <Pricing />
      <Testimonial />
      <FaqClassic />
      <Getapp />
      <News />
      <Client />
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default ClassicPage
