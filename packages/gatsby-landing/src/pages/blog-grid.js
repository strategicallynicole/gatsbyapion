import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "common/src/sections-gatsby/Navigation"
import BlogPage from "common/src/sections-gatsby/Blog-grid"
import Footer from "common/src/sections-gatsby/Footer"

import { GlobalStyle } from "common/src/sections-gatsby/app.style"
import theme from "common/src/theme/blog/themeStyles"

const BlogGridPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <BlogPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
)
export default BlogGridPage
