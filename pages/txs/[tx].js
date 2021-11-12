import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import web3 from "web3";

export default function Transaction({ result }) {
  const { from, to, value, gas } = result;
  console.log(result);

  return (
    <div className={styles.container}>
      <Head>
        <title>Eth transaction</title>
        <meta name="description" content="An ethereum transaction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{`Transaction: ${result.blockHash}`}</h1>

        <h2 style={{ color: "#0070f3" }}>
          <a href={`https://etherscan.io/address/${from}`}>{`${from} ↗`}</a>
        </h2>

        <h3>transferred</h3>

        <div style={{ display: "flex" }}>
          <Image
            src="https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/34ca5/eth-diamond-black.png"
            alt="Ethereum Logo"
            height={50}
            width={50}
          />
          <h2 style={{ marginLeft: 20 }}>
            {web3.utils.fromWei(value, "ether")}
          </h2>
        </div>

        <h3>to</h3>

        <h2 style={{ color: "#0070f3" }}>
          <a href={`https://etherscan.io/address/${to}`}>{`${to} ↗`}</a>
        </h2>

        <h3>for</h3>

        <h2>{`⛽ ${parseInt(gas, 16)} gas`}</h2>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const body = {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getTransactionByHash",
    params: [ctx.query.tx],
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
