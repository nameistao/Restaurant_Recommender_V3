import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
        <h1 className={styles.title}>Welcome to Restaurant Recommender</h1>
      </main>
    </div>
  );
}
