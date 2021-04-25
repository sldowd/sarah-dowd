import React from 'react';
import './style/index.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Project></Project>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
