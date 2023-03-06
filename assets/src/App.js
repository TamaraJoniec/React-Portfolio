import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectGallery from './components/pages/ProjectGallery';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

const projects = [
  {
    id: "1",
    title: "Weather Dashboard",
    description: "A weather dashboard with form inputs, where a user searches for a city and they are presented with current and future conditions for that city.",
    imageUrl: "https://raw.githubusercontent.com/TamaraJoniec/Server-APIs-Weather-Dashboard/main/assets/images/10-server-side-apis-challenge-demo.png",
    deployedUrl: "https://tamarajoniec.github.io/Server-APIs-Weather-Dashboard/",
    githubUrl: "https://github.com/TamaraJoniec/Server-APIs-Weather-Dashboard",
  },
  {
    id: "2",
    title: "AdEvent Astra Horoscope",
    description: "A horoscope web application with NASA images of space created using web APIs. ",
    imageUrl: "https://raw.githubusercontent.com/AdEventAstra/project1-piptambecten/main/images/new-screenshot.jpg",
    deployedUrl: "https://adeventastra.github.io/project1-piptambecten/",
    githubUrl: "https://github.com/AdEventAstra/project1-piptambecten",
  },
  // Add more projects here
];

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
          <Route path="/React-Portfolio/project/" element={<Project projects={projects} />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/React-Portfolio/contact/" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

