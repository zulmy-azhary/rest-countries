import Head from 'next/head';
import React from 'react'
import { Container } from 'src/styles/sharedstyles'

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <Container>
      <Head>
        <title>Rest Countries | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Container>
  )
}

export default Layout;