import React from  'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Projects from  '../projects/projects';
import Resume from   '../resume/resume';

function Paths() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default Paths;