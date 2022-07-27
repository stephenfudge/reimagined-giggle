import * as React from 'react';

import './Projects.css';

import weather from '../images/work/weather.png';
import quiz from '../images/work/quiz.png';
import conversations from '../images/work/conversations.png';
import dayPlanner from '../images/work/dayplanner.png';
import fifa from '../images/work/fifa.png';
import pwGen from '../images/work/pwgen.png';




export default function Projects() {
  return (
    <div class="project-body">
    
              <div className='item'>
                <h2 className="project-name">Weather Dashboard</h2><br/>
                <img className="project-images" src={weather} alt="A Weather Dashboard"/><br/>
                <a href="https://stephenfudge.github.io/stunning-robot/" target="_blank" rel="noopener noreferrer">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/stunning-robot" target="_blank" rel="noopener noreferrer">Take a look at the GitHub Repository</a>
               </div>

               <div className='item'>
                <h2 className="project-name">Conversation Starters</h2><br/>
                <img className="project-images" src={conversations} alt="Random Conversation Starters" /><br/>
                <a href="https://github.com/danielfu13/flying-kittens17" target="_blank" rel="noopener noreferrer">See it live!</a><br/>
                <a href="https://danielfu13.github.io/flying-kittens17/" target="_blank" rel="noopener noreferrer">Take a look at the GitHub Repository</a>
                </div>

                <div className='item'>
                <h2 className="project-name">9-5 Day Planner</h2><br/>
                <img className="project-images" src={dayPlanner} alt="9-5 Day Planner" /><br/>
                <a href="https://stephenfudge.github.io/glowing-octo-waffle/" target="_blank" rel="noopener noreferrer">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/glowing-octo-waffle" target="_blank" rel="noopener noreferrer">Take a look at the GitHub Repository</a>
                </div>

                <div className='item'>
                <h2 className="project-name">Password Generator</h2><br/>
                <img className="project-images" src={pwGen} alt="Password Generator Page" /><br/>
                <a href="https://stephenfudge.github.io/turbo-robot/" target="_blank" rel="noopener noreferrer">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/turbo-robot" target="_blank" rel="noopener noreferrer">Take a look at the GitHub Repository</a>
                </div>

                <div className='item'>
                <h2 className="project-name">JavaScript Quiz</h2><br/>
                <img className="project-images" src={quiz} alt="Javascript Quiz" /><br/>
                <a href="https://stephenfudge.github.io/furry-umbrella/" target="_blank" rel="noopener noreferrer">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/furry-umbrella" target="_blank" rel="noopener noreferrer">Take a look at the GitHub Repository</a>
                </div>
           
                <div className='item'>
                <h2 className="project-name">FIFA Fan Site</h2><br/>
                <img className="project-images" src={fifa} alt="FIFA Fan Site" /><br/>
                <a href="https://vigilant-octo-lamp.herokuapp.com/" target="_blank" rel="noopener noreferrer">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/vigilant-octo-lamp" target="_blank" rel="noopener noreferrer">Take a look at the GitHub Repository</a>
                </div>
    </div>
  );
}


