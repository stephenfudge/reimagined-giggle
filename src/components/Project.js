import * as React from 'react';

import '../pages/Projects.css';

import weather from '../images/work/weather.png';
import quiz from '../images/work/quiz.png';
import conversations from '../images/work/conversations.png';
import dayPlanner from '../images/work/dayplanner.png';
import fifa from '../images/work/fifa.png';
import pwGen from '../images/work/pwgen.png';
import stocker from '../images/work/stocker.png';

const projects = [
    {
        id: 4,
        title: 'Weather Dashboard',
        image: weather,
        deployed: 'https://github.com/stephenfudge/stunning-robot',
        repo: 'https://stephenfudge.github.io/stunning-robot/',
    },
    {
        id: 1,
        title: 'Conversation Starters',
        image: conversations,
        deployed: 'https://github.com/danielfu13/flying-kittens17',
        repo: 'https://danielfu13.github.io/flying-kittens17/',
    },
    {
        id: 5,
        title: '9-5 Day Planner',
        image: dayPlanner,
        deployed: 'https://stephenfudge.github.io/glowing-octo-waffle/',
        repo: 'https://github.com/stephenfudge/glowing-octo-waffle',
    },
    {
        id: 2,
        title: 'Stocker Inventory Management',
        image: stocker,
        deployed: 'https://stockerinventory.herokuapp.com/',
        repo: 'https://github.com/SuedePritch/furry-leftover-broccoli.git',
    },
    {
        id: 6,
        title: 'JavaScript Quiz',
        image: quiz,
        deployed: 'https://stephenfudge.github.io/furry-umbrella/',
        repo: 'https://github.com/stephenfudge/furry-umbrella',
    },
    {
        id: 3,
        title: 'FIFA Fan Site',
        image: fifa,
        deployed: 'https://vigilant-octo-lamp.herokuapp.com/',
        repo: 'https://github.com/stephenfudge/vigilant-octo-lamp',
    },
    
]

const Project2 = () => {
    return(
<div className='project-body'>
{/* <ul> */}
    {projects.map((project) => (
        <li className='project-list' key={project.id}>
            <div className='project-body'>
            <div className='item'>
                <h2 className='project-name'>{[project.title]}</h2><br />
                <img className='project-images' src={project.image} alt='screenshot of {project.title}'/> <br />
                <a href={project.deployed} target="_blank" rel="noopener noreferrer">See it live!</a><br/>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">Take a look at the GitHub Repository</a>
            </div>
            </div>
        </li>
    ))}
{/* </ul> */}

</div>
    )

}

export default Project2;