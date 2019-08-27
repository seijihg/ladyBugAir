import React from 'react';
import './css/App.css';
import NavBar from './components/NavBar'
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grid">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
