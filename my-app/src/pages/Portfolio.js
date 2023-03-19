import React, { useState } from 'react';
import Project from '../components/Project';

function Portfolio() {

  return (
    <div className="topic flex-column">
      <h1>Portfolio</h1>
      <div className="projects sub-content">
        <Project />
    </div>
  </div>
  );
}

export default Portfolio;