import stephen from '../images/stephen1.png';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return(
    <div className="aboutme">
<header>
    <img src={stephen} alt="Headshot of Stephen" height="200" width="200" style={{ alignItems: "center" }}/>
    </header>
   <div className='aboutme-text'>
   <p> Full Stack Web Developer with an extensive background in IT Sales and training. 
    7+ years of experience working with tech leader Apple in sales, training, and support gaining a unique inside perspective on customer service and end-user needs in the tech industry. </p>
      <p>
      Graduate of the University of Toronto Full Stack Coding Boot Camp with hands-on experience using JavaScript, CSS3, HTML5, and jQuery to create applications that solve problems in a post-pandemic world.
      </p>
        <p>Contact me at <a href="mailto:sfudge@gmail.com" id="email">sfudge@gmail.com</a></p>

</div>
    </div>
    )
}

export default AboutMe;