import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
  }
  body {
    margin: 0;
    padding: 10px;
  }

  @media screen and (min-width: 2048px) {
    html {
      display: flex;
      justify-content: center;
    }

    body{
      width: 2048px;
    }
  }
  
  html, body, #__next {
    height: 100%;
  }

  h1 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  color: #333333;
  }

  h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    color: #333333;
  }

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
    color: #333333;
  }

  p {
    margin-top: 0.5rem;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    color: #333333;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    color: #2980b9;
  }

`;

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Daniel Alegria | Web Developer</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
