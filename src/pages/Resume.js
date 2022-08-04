import '../styles/Resume.css';
import myResume from '../images/resume/StephenFudge_resume.pdf'

const Resume = () =>{
    return(
        <div className='resume-container'>
           <h1 id='title'>Technical Skills</h1>
           <h3 className='headings'>Languages:<span className='list-text'> JavaScript</span> </h3>
           <h3 className='headings'>Tools/Frameworks/Libraries</h3>
           <ul className='list-text'>
            <li>ReactJS</li>
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
           </ul>

           <h4><a className='links' href={myResume} download>Download Resume</a></h4>
        </div>
    )
}

export default Resume;