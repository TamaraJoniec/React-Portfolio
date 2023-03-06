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
  {
    id: "3",
    title: "Daily Planner",
    description: "A simple calendar web app for scheduling your work day. Created using jQuery. ",
    imageUrl: "https://raw.githubusercontent.com/TamaraJoniec/Daily-Planner/main/assets/images/05-third-party-apis-homework-demo.png",
    deployedUrl: "https://tamarajoniec.github.io/Daily-Planner/",
    githubUrl: "https://github.com/TamaraJoniec/Daily-Planner",
  },
  {
    id: "4",
    title: "Bootstrap Portfolio",
    description: "A portfolio created using Bootstrap version 4. ",
    imageUrl: "https://github.com/TamaraJoniec/Bootstrap-Portfolio/raw/main/assets/images/screencapture.jpg",
    deployedUrl: "https://tamarajoniec.github.io/Bootstrap-Portfolio/",
    githubUrl: "https://github.com/TamaraJoniec/Bootstrap-Portfolio",
  },
  {
    id: "5",
    title: "Furniture store",
    description: "An online furniture store re-created. ",
    imageUrl: "https://github.com/TamaraJoniec/Furniture-Website/raw/main/images/screencapture.jpg",
    deployedUrl: "https://tamarajoniec.github.io/Furniture-Website/",
    githubUrl: "https://github.com/TamaraJoniec/Furniture-Website",
  },
  {
    id: "6",
    title: "Marketing agency",
    description: "Scouting and refactoring code from a marketing agency websited. ",
    imageUrl: "https://github.com/TamaraJoniec/Code-Refactor/raw/main/assets/images/screenshot.png",
    deployedUrl: "https://tamarajoniec.github.io/Code-Refactor/",
    githubUrl: "https://github.com/TamaraJoniec/Code-Refactor",
  },
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
          <Route path="/React-Portfolio/project-gallery/" element={<ProjectGallery projects={projects}/>} />
          <Route path="/React-Portfolio/project/" element={<Project projects={projects} />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/React-Portfolio/contact/" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

