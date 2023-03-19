import React, { useState } from 'react';

function Resume() {
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Resume</h1>
      <a href='/somefile.txt' download>Click to download</a>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
        </ul>
    </div>
  );
}

export default Resume;