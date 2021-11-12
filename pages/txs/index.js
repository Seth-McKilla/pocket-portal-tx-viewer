import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function CurrentBlockTxs({ result }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Current Eth Txs</title>
        <meta name="description" content="Most recent ethereum transactions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Most recent Ethereum transactions</h1>

        <p className={styles.description}>
          Simply click on one of the transaction hashes to view who paid who and
          how much.
        </p>

        <ul>
          {result.transactions.map((tx) => {
            return (
              <Link href={`/txs/${tx}`} key={tx} passHref>
                <a>
                  <li style={{ color: "#0070f3" }}>
                    <h3>{`${tx} ↗`}</h3>
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const body = {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBlockByNumber",
    params: ["latest", null],
  };

  const response = await fetch(
    `https://user:${process.env.POCKET_SECRET}@eth-mainnet.gateway.pokt.network/v1/lb/618d53223853830035c7a414`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const { result } = await response.json();
  return {
    props: { result },
  };
}
