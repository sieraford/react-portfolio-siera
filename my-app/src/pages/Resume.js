import React from 'react';
import ResumePDF from '../resume-placeholder.pdf'

function Resume() {

  return (
    <div className='resumePage'>
      <h1>Resume</h1>
      <div className='sub-content'>
        <h2 className='mt-2'>Front-end Proficiencies</h2>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          </ul>
          <h2>Back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>GraphQL</li>
          </ul>
      </div>
      <a href={ResumePDF} download>Download my resume</a>
    </div>
  );
}

export default Resume;