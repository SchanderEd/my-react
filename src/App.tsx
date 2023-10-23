import React from 'react';
import { Header } from './Components/Header';
import { Layout } from './Components/Layout';
import { Hero } from './Components/Hero';

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
      </main>
    </Layout>
  );
}

export default App;
