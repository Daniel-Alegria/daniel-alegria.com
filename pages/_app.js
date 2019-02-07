import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: $box-sizing;
}
html, body, #__next {
  height: 100%;
  // for demo purposes:
  padding: 5px;
}
`

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>Daniel Alegria | Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </Container>
    )
  }
}