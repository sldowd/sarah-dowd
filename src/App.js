import React, { useState } from 'react';
import './style/index.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [activePage, setActivePage] = useState('about');
  const handleSetActivePage = (page) => {
    if (activePage !== page) {
      setActivePage(page);
    }
  }

  return (
      <div>
        <Header handleSetActivePage={handleSetActivePage}></Header>
        <main>
          {activePage === 'about' ? <About /> : null}
          {activePage === 'projects' ? <Project /> : null}
          {activePage === 'resume' ? <Resume /> : null}
          {activePage === 'contact' ? <ContactForm /> : null}
        </main>
        <Footer></Footer>
      </div>
  );
}

export default App;
