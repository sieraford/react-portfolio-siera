import React, { useState } from 'react';
import HeadshotImage from '../headshot.png'

function AboutMe() {

  return (
    <div className='aboutPage'>
      <h1>About Me</h1>
      <div className='sub-content'>
        <img className="headshot" src={HeadshotImage} alt="headshot"></img>
          <h2>Hi, I'm Siera!</h2>
          <p>I'm currently enrolled in the UCLA Extension Full Stack Web Development Coding Bootcamp, where I'm learning the fundamentals of full stack web development. I'm passionate about solving problems and I take a customer centric approach to building software. I graduated with a degree in Mathematics/ Economics and have worked in the tech industry as a Quality Assurance Engineer for the past 6 years. The technologies I have experience working with are HTML, CSS, Javascript, React, SQL, Node, Cypress, Ruby and GraphQL.</p>
      </div>
    </div>
  );
}

export default AboutMe;

