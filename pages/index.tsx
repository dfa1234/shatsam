import type { NextPage } from "next";
import Head from "next/head";
import { MainStructure } from "../src/components/MainStructure";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStructure />
    </div>
  );
};

export default Home;
