import './Nav.css';
import name from '../images/name_nobg.png';



const Nav = (props) =>{
   function pageChange(event){
    const id = event.target.id;
    props.setPage(id);
   }
   
    return (
      <div className='navbar'>
      
        <div>
            <img id="logo" src={name} width="300" height="255" />
    
         </div>
      
        <div className="navbar-menu">
          <div className='links'>
          <ul>
          <li> <a class="navbar-item" id="about" onClick={pageChange}>
              About Me
            </a>
      </li>
      <li>
            <a class="navbar-item" id="projects" onClick={pageChange}>
              Projects
            </a>
      </li>
      <li>
                    <a class="navbar-item" id="resumes" onClick={pageChange}>
              Resume
            </a>
      </li>
      <li>
            <a class="navbar-item" id="contact" onClick={pageChange}>
              Contact Me
            </a>
          </li>
            </ul>
         </div>
   </div>
      </div>
    )
};

export default Nav;