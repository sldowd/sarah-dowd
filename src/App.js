import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
