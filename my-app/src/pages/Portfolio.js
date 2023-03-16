import React, { useState } from 'react';
import MoodMixerImage from '../mood-mixer.png'
import PantryPalImage from '../pantry-pal.png'
import NoteTakerImage from '../note-taker.png'
import WeatherDashboardImage from '../weather-dashboard.png'

function Portfolio() {

  return (
    <div className="topic">
      <h1>Portfolio</h1>
      <div className="projects">
        <div className="secondary-projects">
            <section>
                <a href="https://the-pantry-pal.herokuapp.com/">
                    <img src={PantryPalImage} />  
                    <div className="title">
                        <h4>Pantry Pal</h4>
                        <h5>MySQL/Express/Javascript/Node</h5>
                    </div>
                </a>
            </section>
            <section>
                <a href="https://sieraford.github.io/mood-mixer/">
                    <img src={MoodMixerImage} /> 
                    <div className="title">
                        <h4>Mood Mixer</h4>
                        <h5>HTML/CSS/Javascript</h5>
                    </div>   
                </a>
            </section>
            <section>
                <a href="https://github.com/sieraford/apis-weather-dashboard-siera">
                    <img src={WeatherDashboardImage} /> 
                    <div className="title">
                        <h4>Weather Dashboard</h4>
                        <h5>HTML/CSS/Javascript</h5>
                    </div> 
                </a>
            </section>
            <section>
                <a href="https://github.com/sieraford/note-taker-siera">
                    <img src={NoteTakerImage} /> 
                    <div className="title">
                        <h4>Note Taker</h4>
                        <h5>HTML/CSS/Javascript/Express</h5>
                    </div> 
                </a>
            </section>
        </div>
    </div>
  </div>
  );
}

export default Portfolio;