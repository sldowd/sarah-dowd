import React, { useState } from 'react';
import './style/index.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" exact element={<About />}></Route>
            <Route path="/projects" exact element={<Project />}></Route>
            <Route path="/resume" exact element={<Resume />}></Route>
            <Route path="/contact" exact element={<ContactForm />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
