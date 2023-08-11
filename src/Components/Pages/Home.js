import React from 'react';
import Navbar from '../Navbar';
import Homebody from '../Homebody'
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section
        className="Home bg-[url('Images/bghome.jpg')] bg-cover  md:pt-7"
      >
        <Navbar />
        <Homebody />
        <Footer />
      </section>
    </>
  );
}

export default Home;
