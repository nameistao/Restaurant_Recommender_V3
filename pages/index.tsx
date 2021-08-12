import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Main from "components/Main";

const client = new ApolloClient({
  uri: "https://yelp.com/biz/garaje-san-francisco",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    "Content-Type": "application/graphql",
  },
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>Restaurant Recommender</title>
          <meta
            name="description"
            content="web app that recommends nearby restaurants"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Main />
        </main>
      </div>
    </ApolloProvider>
  );
}
