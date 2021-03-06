import Head from "next/head";
import MainWrapper from "../components/UI/MainWrapper";
import Hero from "../components/UI/Hero";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>textFul</title>
        <meta
          name="description"
          content="Create notes and access them via URL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
