// import { Document, } from 'react-pdf';
// import { Component } from 'react'

import './Resume.css';
import myResume from '../images/resume/StephenFudge_resume.pdf'

// class Resume extends Component {


const Resume = () =>{
    return(
        <div class="two column doubling ui grid container">
            <div class="column">
   </div>
      <div class="column">
   <span className='list-text' >
    <span className='ui big text' id="title">Technical Skills</span>
    <br />
          <span className='ui large text'><span className='headings'>Languages: </span><span> JavaScript</span>
          <br />
          <span className='headings'> Tools/Frameworks/Libraries:</span></span>
           <br />
           <ul id="list">
            <span className='ui medium text'>
            <li>React</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>GraphQL</li>
            <li>OOP</li>
            <li>NodeJS</li>
            <li>Express.JS</li>
            <li>Object Relational Mapping</li>
            <li> HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li></li>
            <li></li>
            <li></li>
            </span>
           </ul>
           </span>
            <br />

           <a href={myResume} download>Download My Resume </a>     
           <br />
   </div>
   <div class="column">
   </div>
           
        </div>
    )
}


export default Resume;