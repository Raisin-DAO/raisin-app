import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useContract, useContractRead } from "wagmi";
import abi from "../abi.json";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";
import Footer from "../../components/Footer";
import PageContent from "../../components/PageContent";
const CONTRACT_ADDRESS = "0x5d0cB8c5C90A714B4Ce2891cf8CC20fc2A1bA04F";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  const { data } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: "greet",
    args: [],
  });
  const greeting = (data as string) || "Loading";

  // This is to get around the infamous 'Hydration failed' error. See: https://codingwithmanny.medium.com/understanding-hydration-errors-in-nextjs-13-with-a-web3-wallet-connection-8155c340fbd5
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <main className="py-20 px-32">
      <h1 className="text-3xl font-bold">🪄 create-web3-frontend</h1>
      <div className="mt-4">
        <ConnectButton />
      </div>

      <hr className="mt-8 border border-slate-200" />

      <div className="mt-8">
        <p>
          Just fetched the greeting: <b>{greeting}</b> from{" "}
          <Link
            href={`https://goerli.etherscan.io/address/${CONTRACT_ADDRESS}`}
            className="underline"
          >
            {CONTRACT_ADDRESS}
          </Link>
        </p>

        <p className="mt-4">
          This project has been bootstrapped with Next.js, TailwindCSS, wagmi,
          and Rainbowkit.
        </p>

        <p className="mt-4">
          Refer the{" "}
          <Link className="underline" href="https://wagmi.sh">
            wagmi docs
          </Link>{" "}
          to learn how to use wagmi to read and write information from the
          blockchain.
        </p>

        <p className="mt-4">
          Start editing <code>src/pages/index.tsx</code> to get started!
        </p>
      </div>

      {/* <hr className='mt-8 border border-slate-200' /> */}

      {/* Border added to div container below to make existing site more clear */}
      <div className="border border-4 border-slate-900 ">
        <PageHeader />
        <PageContent />
        <Footer />
      </div>
    </main>
  );
}
