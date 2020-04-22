import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../components/main";

import Navigation from "common/src/sections/Navigation";
import BlogSinglePage from "common/src/sections/Blog-single";
import Footer from "common/src/sections/Footer";

import { GlobalStyle } from "common/src/sections/app.style";
import theme from "common/src/theme/blog/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Appion React Gatsby nextjs landing">
      <GlobalStyle />
      <Navigation />
      <BlogSinglePage />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
