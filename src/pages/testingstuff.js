import Box from '@mui/material/Box';

import './Projects.css';

import weather from '../images/work/weather.png';
import quiz from '../images/work/quiz.png';
import conversations from '../images/work/conversations.png';
import dayPlanner from '../images/work/dayplanner.png';
import fifa from '../images/work/fifa.png';
import pwGen from '../images/work/pwgen.png';



const Projects = () => {
    return(
        <div>
  <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <div class="gridRow">
                <img class="project-images" src={weather} alt="A Weather Dashboard"/>
                <p>Weather Dashboard</p>
                <a href="https://stephenfudge.github.io/stunning-robot/" target="_blank">See it live!</a>
                <a href="https://github.com/stephenfudge/stunning-robot" target="_blank">Take a look at the GitHub Repository</a>
            </div>
      </Box>
    </div>
    <Box
  sx={{
    display: 'grid',
    columnGap: 3,
    rowGap: 1,
    gridTemplateColumns: 'repeat(2, 1fr)',
  }}
>
  <Item> 
                <img class="project-images" src={weather} alt="A Weather Dashboard"/>
                <p>Weather Dashboard</p>
                <a href="https://stephenfudge.github.io/stunning-robot/" target="_blank">See it live!</a>
                <a href="https://github.com/stephenfudge/stunning-robot" target="_blank">Take a look at the GitHub Repository</a>
           </Item>
  <Item> <img class="project-images" src={weather} alt="A Weather Dashboard"/>
                <p>Weather Dashboard</p>
                <a href="https://stephenfudge.github.io/stunning-robot/" target="_blank">See it live!</a>
                <a href="https://github.com/stephenfudge/stunning-robot" target="_blank">Take a look at the GitHub Repository</a></Item>
  <Item>3</Item>
  <Item>4</Item>
</Box>


            <h1>Projects</h1>

            <div>
                <img class="project-images" src={weather} alt="A Weather Dashboard"/>
                <p>Weather Dashboard</p>
                <a href="https://stephenfudge.github.io/stunning-robot/" target="_blank">See it live!</a>
                <a href="https://github.com/stephenfudge/stunning-robot" target="_blank">Take a look at the GitHub Repository</a>
            </div>

            <div>
             <img class="project-images" src={quiz} alt="Javascript Quiz" />
                <p>JavaScript Quiz</p>
                <a href="https://stephenfudge.github.io/furry-umbrella/" target="_blank">See it live!</a>
                <a href="https://github.com/stephenfudge/furry-umbrella" target="_blank">Take a look at the GitHub Repository</a>
            </div>

            <div>
            <img class="project-images" src={dayPlanner} alt="9-5 Day Planner" />
                <p>9-5 Day Planner</p>
                <a href="https://stephenfudge.github.io/glowing-octo-waffle/" target="_blank">See it live!</a>
                <a href="https://github.com/stephenfudge/glowing-octo-waffle" target="_blank">Take a look at the GitHub Repository</a>
            </div>

            <div>
            <img class="project-images" src={conversations} alt="Random Conversation Starters" />
                <p>Conversation Starters</p>
                <a href="https://github.com/danielfu13/flying-kittens17" target="_blank">See it live!</a>
                <a href="https://danielfu13.github.io/flying-kittens17/" target="_blank">Take a look at the GitHub Repository</a>
            </div>

            <div>
            <img class="project-images" src={fifa} alt="FIFA Fan Site" />
                <p>FIFA Fan Site</p>
                <a href="https://vigilant-octo-lamp.herokuapp.com/" target="_blank">See it live!</a>
                <a href="https://github.com/stephenfudge/vigilant-octo-lamp" target="_blank">Take a look at the GitHub Repository</a>
            </div>

            <div>
            <img class="project-images" src={pwGen} alt="Password Generator Page" />
                <p>Password Generator</p>
                <a href="https://stephenfudge.github.io/turbo-robot/" target="_blank">See it live!</a>
                <a href="https://github.com/stephenfudge/turbo-robot" target="_blank">Take a look at the GitHub Repository</a>
            </div>
            
        </div>
    )
}

export default Projects;