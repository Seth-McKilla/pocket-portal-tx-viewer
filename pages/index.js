import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ethereum Txs Explorer </title>
        <meta
          name="description"
          content="View the most recent transactions on the Ethereum blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="https://ethereum.org/static/810eb64d89629231aa4d8c7fe5f20ee5/31987/developers-eth-blocks.png"
          alt="Ethereum Block Logo"
          height={300}
          width={420}
        />

        <h1 className={styles.title}>Ethereum transaction explorer</h1>

        <p className={styles.description}>
          A simple tool to view who paid who and how much for the most recent
          transactions on the Ethereum blockchain.
        </p>

        <h2>Brought to you by</h2>
        <a href="https://www.pokt.network/">
          <Image
            src="https://assets.website-files.com/609e7a6f2ec5c05d866ed6d3/60a7cd11f632654f936af07b_POKT_Logo_S_Color.svg"
            alt="Pokt Logo"
            height={100}
            width={200}
          />
        </a>

        <div className={styles.grid}>
          <Link href="/txs" passHref>
            <a href="" className={styles.card}>
              <h2>{"Let's gooo! 🚀"}</h2>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
