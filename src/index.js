import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import {projectList, Projects} from './pages/projects.jsx'

import reportWebVitals from './reportWebVitals';

var projectsMap = [];
for (var i = 0; i < projectList.length; ++i){
    const ProjectPage = require('./pages/projects/' + projectList[i].id).default;
    projectsMap.push([projectList[i].id, <ProjectPage/>]);
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                {projectsMap.map((project) =>
                    <Route key={project[0]} path={"projects/" + project[0]} element={project[1]}/>
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </HashRouter>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
