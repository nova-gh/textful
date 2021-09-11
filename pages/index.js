import Head from "next/head";
import MainWrapper from "../components/UI/MainWrapper";
import Hero from "../components/UI/Hero";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>textFul</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
