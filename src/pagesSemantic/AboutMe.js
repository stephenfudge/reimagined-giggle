import stephen from '../images/stephen1.png';
import './AboutMe.css';


const AboutMe = () => {
    return(
      
<div class="four column doubling ui grid container">
    <div class="row">
  <div class="column">
   </div>
  <div class="column">
   <img src={stephen} alt="Stephen" height="200" width="200"/>

  </div>
  <div class="column">
    <span className="aboutme-text">
  <p> Full Stack Web Developer with an extensive background in IT Sales and training. 
    7+ years of experience working with tech leader Apple in sales, training, and support gaining a unique inside perspective on customer service and end-user needs in the tech industry. </p>
      <p>
      Graduate of the University of Toronto Full Stack Coding Boot Camp with hands-on experience using Javascript, CSS3, HTML5, and jQuery to create applications that solve problems in a post-pandemic world.
      </p>
      </span>
        
  </div>
  <div class="column">
  </div>
</div>
</div>
    )
}

export default AboutMe;