import React from 'react';
import MoodMixerImage from '../mood-mixer.png'
import PantryPalImage from '../pantry-pal.png'
import NoteTakerImage from '../note-taker.png'
import WeatherDashboardImage from '../weather-dashboard.png'
import CodingQuizImage from '../coding-quiz.png'
import WorkDaySchedulerImage from '../work-day-scheduler.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Project() {
    const projects = [
        {
            url: "https://the-pantry-pal.herokuapp.com/",
            image: PantryPalImage,
            title: "Pantry Pal",
            tech: "MySQL/Express/Javascript/Node",
            github: "https://github.com/sieraford/pantry-pal"
        },
        {
            url: "https://sieraford.github.io/mood-mixer/",
            image: MoodMixerImage,
            title: "Mood Mixer",
            tech: "HTML/CSS/Javascript",
            github: "https://github.com/sieraford/mood-mixer"
        },
        {
            url: "https://github.com/sieraford/apis-weather-dashboard-siera",
            image: WeatherDashboardImage,
            title: "Weather Dashboard",
            tech: "HTML/CSS/Javascript",
            github: "https://github.com/sieraford/apis-weather-dashboard-siera"
        },
        {
            url: "https://github.com/sieraford/note-taker-siera",
            image: NoteTakerImage,
            title: "Note Taker",
            tech: "HTML/CSS/Javascript/Express",
            github: "https://github.com/sieraford/note-taker-siera"
        },
        {
            url: "https://github.com/sieraford/work-day-scheduler-siera",
            image: WorkDaySchedulerImage,
            title: "Work Day Scheduler",
            tech: "HTML/CSS/Javascript/jQuery",
            github: "https://github.com/sieraford/work-day-scheduler-siera"
        },
        {
            url: "https://github.com/sieraford/web-apis-code-quiz-siera",
            image: CodingQuizImage,
            title: "Coding Quiz",
            tech: "HTML/CSS/Javascript",
            github: "https://github.com/sieraford/web-apis-code-quiz-siera"
        },
    ]

  return (
    <div className="secondary-projects row">
    {projects.map((project, index) =>
        <section className="col-3" key={project.title + index}>
                <img className="image" src={project.image} />  
                <div className="title overlay">
                    <a className="projectTitle" href={project.url} target="_blank">
                        <h4>{project.title}</h4>
                    </a>
                    <a className="m-2" href={project.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <h5>{project.tech}</h5>
                </div>
        </section>
    )}
</div>
  )
}

export default Project;