import './Nav.css';
import logo from '../images/name.png'



const Nav = (props) =>{
   function pageChange(event){
    const id = event.target.id;
    props.setPage(id);
   }
   
    return (
       <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-start px-5">
          <a class="navbar-brand" href="#" id="about" onClick={pageChange}>
            <img src={logo} width="222" height="155"/>
          </a>
      
         </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
      
            <a class="navbar-item" id="about" onClick={pageChange}>
              About Me
            </a>
      
            <a class="navbar-item" id="portfolio" onClick={pageChange}>
              Portfolio
            </a>

            <a class="navbar-item" id="resume" onClick={pageChange}>
              Resume
            </a>
      
            <a class="navbar-item" id="contact" onClick={pageChange}>
              Contact Me
            </a>
      
             </div>
        </div>
      </nav>
    )
};

export default Nav;


{/* /      <div>
// <a href="#" id="about" onClick={pageChange}>About Me</a>
// <a href="#" id="portfolio" onClick={pageChange} >Portfolio</a>
// <a href="#" id="contact" onClick={pageChange}>Contact Me</a>
//         </div> */}