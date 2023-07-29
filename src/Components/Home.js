import React from 'react';
import Navbar from './Navbar';
import Homebody from './Homebody';
import backgroundImage from '../Images/bghome.jpg'; // Import the background image\
import Footer from './Footer';

function Home() {
  return (
    <>
      <section
        className="Home md:pt-7"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover'
        }}
      >
        <Navbar />
        <Homebody />
        <Footer />
      </section>
    </>
  );
}

export default Home;
