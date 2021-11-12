# Welcome to the Simple Ethereum Transaction Explorer 👋

![image](https://user-images.githubusercontent.com/63591760/141452270-4c02946b-9c8a-4a2b-a156-5ab5d13e7daf.png)

## View the [Live Site](https://pocket-portal-tx-viewer.vercel.app/)

## This repo serves as my submittal for the *Pocket Network DAO Global Bounty - Integrate A Pocket-Powered Endpoint Into Your Project*
![image](https://user-images.githubusercontent.com/63591760/141452571-0d8d55c0-dc08-46d7-9d82-80e5a1684caf.png)

## Check out the short [demo video](https://youtu.be/94Dq6JLBJvA)

## Steps Involved to create this project
It is SO easy to get up and running with the pocket portal! The following is a basic step-by-step outline of how I integrated a pocket portal into my project.

#### 1. Created and minted an RPC endpoint:
![image](https://user-images.githubusercontent.com/63591760/141453083-e4662d63-2113-4af8-abab-b40f1e7e9ddd.png)
Note: MVPP = Minimum Viable Pocket Portal 😉
Refer to the official [documentation](https://docs.pokt.network/home/paths/app-developer) for a detailed step-by-step of this process.

#### 2. Enabled security for the app
![image](https://user-images.githubusercontent.com/63591760/141453410-fb711ecb-6dc3-4aa5-a190-583e82e2434b.png)

#### 3. Spun up a NextJS app:
```bash
npx create-next-app@latest pocket-portal-tx-viewer
```

#### 4. Created simple requests to the RPC endpoint within my app using Basic HTTP Authentication, here's an example of one:
```javascript
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
```

## That's all folks, thanks for stopping by!
