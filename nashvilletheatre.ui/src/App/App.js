import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
import './App.scss';
import AllShows from '../components/pages/AllShows/AllShows';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <AllShows />
    </div>
  );
}

export default App;
