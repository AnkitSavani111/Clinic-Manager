import React from 'react';
import Navbar from './Navbar';
import Homebody from './Homebody';
import backgroundImage from '../Images/bghome.jpg'; // Import the background image

function Home() {
  return (
    <>
      <section
        className="Home "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        }}
      >
        <Navbar />
        <Homebody />
      </section>
    </>
  );
}

export default Home;
