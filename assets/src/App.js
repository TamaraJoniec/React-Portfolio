import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectGallery from './components/pages/ProjectGallery';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="/React-Portfolio/">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/React-Portfolio/" element={<Home />} />
          <Route path="/React-Portfolio/about/" element={<About />} />
          <Route path="/React-Portfolio/project-gallery/" element={<ProjectGallery />} />
          <Route path="/React-Portfolio/project/" element={<Project />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/React-Portfolio/contact/" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

