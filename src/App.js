import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from './components/about/About'
import { Contact } from './components/Contact/Contact'
import { Intro } from './components/intro/Intro'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
