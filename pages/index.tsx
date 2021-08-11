import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

import Main from "components/Main";

export default function Home() {
  return (
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
  );
}
