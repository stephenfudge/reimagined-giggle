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
    <h1 className='ui header' id="title">Technical Skills</h1>
          <h3 className='ui header'><span className='headings'>Languages: </span><span className="list-text"> JavaScript, HTML5, CSS3</span>
          <br />
          <span className='headings'> Tools/Frameworks/Libraries:</span></h3>
           <ul id="list">
            {/* <span className='ui medium text'> */}
            <li>React</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>GraphQL</li>
            <li>NodeJS</li>
            <li>Express.JS</li>
            <li>Object Relational Mapping</li>
            <li>OOP</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Handlebars.JS</li>
            <li>Fomantic-UI</li>
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
