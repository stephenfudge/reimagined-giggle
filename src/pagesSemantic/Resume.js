// import { Document, } from 'react-pdf';
import { Component } from 'react'

import './Resume.css';
import myResume from '../images/resume/StephenFudge_resume.pdf'

// class Resume extends Component {


const Resume = () =>{
    return(
        <div>
           <h1>Technical Skills</h1>
           <h3>Languages: JavaScript </h3>
           <h3>Tools/Frameworks/Libraries</h3>
           <ul>
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
           </ul>
            <br />
           {/* <h4><a href={myResume}>Look At Resume</a></h4>  */}
           {/* <Document file="../imagesresume/StephenFudge_resume.pd">My Resume</Document>  */}
           <h4><a href={myResume}>Download Resume </a></h4>
           <br />
        </div>
    )
}


export default Resume;