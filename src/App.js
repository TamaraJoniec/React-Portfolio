import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';
import projectsData from "./components/pages/ProjectsData";
import './styles.css';

function App() {
  return (
    <Router basename="/">
      <div>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-gallery/" element={<ProjectGallery projects={projectsData} />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

