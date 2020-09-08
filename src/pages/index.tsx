import React from 'react';
import Head from 'next/head';

function Navigation() {
  return <div className="navigation bg-white">nav</div>;
}

function Main() {
  return <div className="main bg-gray-200 flex-grow">main</div>;
}

const Home: React.FC<{}> = () => (
  <div className="flex flex-row">
    <Head>
      <title>My digital garden</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navigation />

    <Main />
  </div>
);

export default Home;
