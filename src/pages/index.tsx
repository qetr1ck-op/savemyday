import React from 'react';
import Head from 'next/head';

const Home: React.FC<{}> = () => (
  <div className="container m-1">
    <Head>
      <title>My digital garden</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav>nav</nav>

    <main>main</main>
  </div>
);

export default Home;
