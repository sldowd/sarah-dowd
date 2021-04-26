import React from 'react';
import './style/index.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Project></Project>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
