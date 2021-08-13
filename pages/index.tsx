import Head from "next/head";
import Main from "components/Main";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant Recommender</title>
        <meta
          name="description"
          content="web app that recommends nearby restaurants"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
