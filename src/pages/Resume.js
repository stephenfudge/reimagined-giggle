import './Resume.css';
import Resume from '../images/resume/StephenFudge_resume'

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

           <h4><a href={Resume}>Look At Resume </a></h4> <h4><a href={Resume} download>Download Resume</a></h4>
        </div>
    )
}

export default Resume;