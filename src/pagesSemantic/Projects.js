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
   <div>
<div className="ui stackable three column grid container">
  
  <div className="column center aligned">
    {/* <div className="ui segment> */}
    <h2 className="ui header project-name"><span className="project-name">Weather Dashboard</span></h2><br/>
                <img className="project-images" src={weather} alt="A Weather Dashboard"/><br/>
                <a href="https://stephenfudge.github.io/stunning-robot/" target="_blank"><span className='project-links'>See it live!</span></a><br />
                <a href="https://github.com/stephenfudge/stunning-robot" target="_blank"><span className='project-links'>Take a look at the GitHub Repository</span></a> 
    {/* </div> */}
</div>
  
  <div className="column center aligned">
    {/* <div className="ui segment imagebackground"> */}
    <h2 className="ui header"><span className="project-name">Password Generator</span></h2><br/>
                <img className="project-images" src={pwGen} alt="Password Generator Page" /><br/>
                <a href="https://stephenfudge.github.io/turbo-robot/" target="_blank"><span className='project-links'>See it live!</span></a><br/>
                <a href="https://github.com/stephenfudge/turbo-robot" target="_blank"><span className='project-links'>Take a look at the GitHub Repository</span></a>   
    {/* </div> */}
  </div>
  
  <div className="column center aligned">
    {/* <div className="ui segment"> */}
    <h2 className="ui header project-name"><span className="project-name">9-5 Day Planner</span></h2><br/>
                <img className="project-images" src={dayPlanner} alt="9-5 Day Planner" /><br/>
                <a href="https://stephenfudge.github.io/glowing-octo-waffle/" target="_blank"><span className='project-links'>See it live!</span></a><br/>
                <a href="https://github.com/stephenfudge/glowing-octo-waffle" target="_blank"><span className='project-links'>Take a look at the GitHub Repository</span></a>  
    {/* </div> */}
</div>

</div>

<div className="ui stackable three column grid container">
  <div className="column center aligned">
    {/* <div className="ui segment"> */}
    <h2 className="ui header project-name"><span className="project-name">JavaScript Quiz</span></h2><br/>
                <img className="project-images" src={quiz} alt="Javascript Quiz" /><br/>
                <a href="https://stephenfudge.github.io/furry-umbrella/" target="_blank"><span className='project-links'>See it live!</span></a><br/>
                <a href="https://github.com/stephenfudge/furry-umbrella" target="_blank"><span className='project-links'>Take a look at the GitHub Repository</span></a> 
    {/* </div> */}
  </div>

  <div className="column center aligned">
    {/* <div className="ui segment"> */}
    <h2 className="ui header project-name"><span className="project-name" id="title2">Conversation Starters</span></h2><br/>
                <img className="project-images" src={conversations} alt="Random Conversation Starters" /><br/>
                <a href="https://github.com/danielfu13/flying-kittens17" target="_blank"><span className='project-links'>See it live!</span></a><br/>
                <a href="https://danielfu13.github.io/flying-kittens17/" target="_blank"><span className='project-links'>Take a look at the GitHub Repository</span></a> 
    {/* </div> */}
  </div>

  <div className="column center aligned">
    {/* <div className="ui segment"> */}
    <h2 className="ui header project-name"><span className="project-name" id="title3">FIFA Fan Site</span></h2><br/>
                <img className="project-images" src={fifa} alt="FIFA Fan Site" /><br/>
                <a href="https://vigilant-octo-lamp.herokuapp.com/" target="_blank"><span className='project-links'>See it live!</span></a><br/>
                <a href="https://github.com/stephenfudge/vigilant-octo-lamp" target="_blank"><span className='project-links'>Take a look at the GitHub Repository</span></a> 
    {/* </div> */}
  </div>


</div>
</div>
  );
}

