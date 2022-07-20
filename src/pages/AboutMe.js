import stephen from '../images/stephen1.png';
import './AboutMe.css';

const AboutMe = () => {
    return(
    <div class="aboutme">
<header>
    <img src={stephen} alt="About Me Image of Stephen" height="200" width="200" style={{ alignItems: "center" }}/>
    </header>
   <div>
  <p> 
    Full Stack Web Developer with an extensive background in IT Sales and training. 
    7+ years of experience working with tech leader Apple in sales, training, and support gaining a unique inside perspective on customer service and end-user needs in the tech industry. 
    </p>
    <p>
    Graduate of the University of Toronto Full Stack Coding Boot Camp with hands-on experience using Javascript, CSS3, HTML5, and jQuery to create applications that solve problems in a post-pandemic world.
    </p>
   <p>
    Recently created a website to help lockdown weary users start conversations online. 
    Known as a creative out of the box problem solver passionate about making the user experience enjoyable.  
    With each project, my aim is to learn and improve my skill set while creating something to be proud of.   
    I’m excited to leverage my skills as part of a quality-driven team to build better experiences.
    </p>
</div>
    </div>
    )
}

export default AboutMe;