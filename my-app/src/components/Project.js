import React from 'react';
import MoodMixerImage from '../mood-mixer.png'
import PantryPalImage from '../pantry-pal.png'
import NoteTakerImage from '../note-taker.png'
import WeatherDashboardImage from '../weather-dashboard.png'
import CodingQuizImage from '../coding-quiz.png'
import WorkDaySchedulerImage from '../work-day-scheduler.png'

function Project() {
    const projects = [
        {
            url: "https://the-pantry-pal.herokuapp.com/",
            image: PantryPalImage,
            title: "Pantry Pal",
            tech: "MySQL/Express/Javascript/Node"
        },
        {
            url: "https://sieraford.github.io/mood-mixer/",
            image: MoodMixerImage,
            title: "Mood Mixer",
            tech: "HTML/CSS/Javascript"
        },
        {
            url: "https://github.com/sieraford/apis-weather-dashboard-siera",
            image: WeatherDashboardImage,
            title: "Weather Dashboard",
            tech: "HTML/CSS/Javascript"
        },
        {
            url: "https://github.com/sieraford/note-taker-siera",
            image: NoteTakerImage,
            title: "Note Taker",
            tech: "HTML/CSS/Javascript/Express"
        },
        {
            url: "https://github.com/sieraford/work-day-scheduler-siera",
            image: WorkDaySchedulerImage,
            title: "Work Day Scheduler",
            tech: "HTML/CSS/Javascript/jQuery"
        },
        {
            url: "https://github.com/sieraford/web-apis-code-quiz-siera",
            image: CodingQuizImage,
            title: "Coding Quiz",
            tech: "HTML/CSS/Javascript"
        },
    ]

  return (
    <div className="secondary-projects">
    {projects.map((project, index) =>
        <section key={project.title + index}>
            <a href={project.url}>
                <img src={project.image} />  
                <div className="title">
                    <h4>{project.title}</h4>
                    <h5>{project.tech}</h5>
                </div>
            </a>
        </section>
    )}
</div>
  )
}

export default Project;