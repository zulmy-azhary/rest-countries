import Head from "next/head";
import React from "react";
import { Footer, Navbar } from "@components";
import { Container, Main } from "@styles/SharedComponents";

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
