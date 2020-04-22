import React from "react"
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "common/src/sections-gatsby/Navigation"
import BlogList from "common/src/sections-gatsby/Blog-list"
import Footer from "common/src/sections-gatsby/Footer"

import { GlobalStyle } from "common/src/sections-gatsby/app.style"
import theme from "common/src/theme/blog/themeStyles"

const BlogListPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <BlogList />
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default BlogListPage
