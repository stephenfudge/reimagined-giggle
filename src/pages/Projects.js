import * as React from 'react';

import '../styles/Projects.css';

import weather from '../images/work/weather.png';
// import quiz from '../images/work/quiz.png';
import conversations from '../images/work/conversations.png';
// import dayPlanner from '../images/work/dayplanner.png';
import fifa from '../images/work/fifa.png';
import stocker from '../images/work/stocker.png';

const projects = [
    {
        id: 1,
        title: 'Conversation Starters',
        image: conversations,
        deployed: 'https://github.com/danielfu13/flying-kittens17',
        repo: 'https://danielfu13.github.io/flying-kittens17/',
        description: "A website to help with conversation starters in a Post-Pandemic world.",
        technologies: "HTML5, CSS3, Bulma, JavaScript, Third Party APIs",
    },
  {
        id: 2,
        title: 'Stocker Inventory Management',
        image: stocker,
        deployed: 'https://stockerinventory.herokuapp.com/',
        repo: 'https://github.com/SuedePritch/furry-leftover-broccoli.git',
        description: "An inventory management system that integrates seamlessly with a fully functional eCommerce site",
        technologies: "MongoDB, Express, React, Node, GraphQL, Apollo, JWT authentication and authorization",
    },
{
        id: 3,
        title: 'FIFA Fan Site',
        image: fifa,
        deployed: 'https://vigilant-octo-lamp.herokuapp.com/',
        repo: 'https://github.com/stephenfudge/vigilant-octo-lamp',
        description: "A fan site for 2022 Qatar FIFA World Cup",
        technologies: "MySQL, Express, Node, JavaScript, HandlebarsJS, CSS",
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        image: weather,
        deployed: 'https://github.com/stephenfudge/stunning-robot',
        repo: 'https://stephenfudge.github.io/stunning-robot/',
        description: "A website to check the 5 day forecast for any city",
        technologies: "JavaScript, Third Party APIs",
    },
  
    // {
    //     id: 5,
    //     title: '9-5 Day Planner',
    //     image: dayPlanner,
    //     deployed: 'https://stephenfudge.github.io/glowing-octo-waffle/',
    //     repo: 'https://github.com/stephenfudge/glowing-octo-waffle',
    // },
  
    // {
    //     id: 6,
    //     title: 'JavaScript Quiz',
    //     image: quiz,
    //     deployed: 'https://stephenfudge.github.io/furry-umbrella/',
    //     repo: 'https://github.com/stephenfudge/furry-umbrella',
    // },
    
    
]

const Projects = () => {
    return(
        <div className='project-container'>
<div className='project-body'>
    {projects.map((project) => (
        <li className='project-list' key={project.id}>
            <div>
            <div className='item'>
                <h2 className='project-name'>{[project.title]}</h2><br />
                <h3 className="project-description">{project.description}</h3>
                <img className='project-images' src={project.image} alt='screenshot of {project.title}'/> <br />
                <p id="project-tech">Technologies Used: {project.technologies}</p>
                <a href={project.deployed} target="_blank" rel="noopener noreferrer">See it live!</a><br/>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">Take a look at the GitHub Repository</a>
            </div>
            </div>
        </li>
    ))}

</div>
</div>
    )

}

export default Projects;