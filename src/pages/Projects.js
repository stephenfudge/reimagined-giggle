import * as React from 'react';
// import Box, { BoxProps } from '@mui/material/Box';

import './Projects.css';

import weather from '../images/work/weather.png';
import quiz from '../images/work/quiz.png';
import conversations from '../images/work/conversations.png';
import dayPlanner from '../images/work/dayplanner.png';
import fifa from '../images/work/fifa.png';
import pwGen from '../images/work/pwgen.png';



// function Item(props: BoxProps) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
       
//         p: 1,
//         borderRadius: 2,
//         fontSize: '0.875rem',
//         fontWeight: '700',
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }

export default function Projects() {
  return (
    <div style={{ width: '100%' }} class="project-body">
      {/* <Box
        sx={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: 'repeat(3, 1fr)',  
          // for other sizes gridTemplateColumns repeat(2,1fr), (1, 1fr)
        }} */}
      {/* > */}
        {/* <Item> */}
                <h2 class="project-name">Weather Dashboard</h2><br/>
                <img class="project-images" src={weather} alt="A Weather Dashboard"/><br/>
                <a href="https://stephenfudge.github.io/stunning-robot/" target="_blank">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/stunning-robot" target="_blank">Take a look at the GitHub Repository</a>
                {/* </Item>
        <Item> */}
                <h2 class="project-name">Password Generator</h2><br/>
                <img class="project-images" src={pwGen} alt="Password Generator Page" /><br/>
                <a href="https://stephenfudge.github.io/turbo-robot/" target="_blank">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/turbo-robot" target="_blank">Take a look at the GitHub Repository</a>
        {/* </Item>
        <Item>  */}
                <h2 class="project-name">9-5 Day Planner</h2><br/>
                <img class="project-images" src={dayPlanner} alt="9-5 Day Planner" /><br/>
                <a href="https://stephenfudge.github.io/glowing-octo-waffle/" target="_blank">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/glowing-octo-waffle" target="_blank">Take a look at the GitHub Repository</a>
                {/* </Item>
        <Item>  */}
                <h2 class="project-name">JavaScript Quiz</h2><br/>
                <img class="project-images" src={quiz} alt="Javascript Quiz" /><br/>
                <a href="https://stephenfudge.github.io/furry-umbrella/" target="_blank">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/furry-umbrella" target="_blank">Take a look at the GitHub Repository</a>
                {/* </Item>
        <Item> */}
                <h2 class="project-name">Conversation Starters</h2><br/>
                <img class="project-images" src={conversations} alt="Random Conversation Starters" /><br/>
                <a href="https://github.com/danielfu13/flying-kittens17" target="_blank">See it live!</a><br/>
                <a href="https://danielfu13.github.io/flying-kittens17/" target="_blank">Take a look at the GitHub Repository</a>
        {/* </Item>
        <Item> */}
                <h2 class="project-name">FIFA Fan Site</h2><br/>
                <img class="project-images" src={fifa} alt="FIFA Fan Site" /><br/>
                <a href="https://vigilant-octo-lamp.herokuapp.com/" target="_blank">See it live!</a><br/>
                <a href="https://github.com/stephenfudge/vigilant-octo-lamp" target="_blank">Take a look at the GitHub Repository</a>
        {/* </Item> */}
      {/* </Box> */}
    </div>
  );
}


