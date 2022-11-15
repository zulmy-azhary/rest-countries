import Head from "next/head";
import React from "react";
import { Container, Main } from "src/styles";
import { Footer, Navbar } from "src/components";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Rest Countries | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
