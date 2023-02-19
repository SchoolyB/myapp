import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import '../src/styles/index.css'

function App() {
  return (
    <>
      <Header/>
      <About />
      <TechStack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
