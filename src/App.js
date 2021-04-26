import React, { useState } from 'react';
import './style/index.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Project></Project>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
