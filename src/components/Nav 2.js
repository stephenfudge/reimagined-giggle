import './Nav.css';
import logo from '../images/name.png'
import name from '../images/name_nobg.png';



const Nav = (props) =>{
   function pageChange(event){
    const id = event.target.id;
    props.setPage(id);
   }
   
    return (
       <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-start px-5">
          <a class="navbar-brand" id="about" onClick={pageChange}>
            <img id="logo" src={name} width="300" height="255" />
          </a>
      
         </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
      
            <a class="navbar-item" id="about" onClick={pageChange}>
              About Me
            </a>
      
            <a class="navbar-item" id="projects" onClick={pageChange}>
              Projects
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