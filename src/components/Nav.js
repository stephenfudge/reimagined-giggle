import '../styles/Nav.css';

import name from '../images/name_nobg.png';



const Nav = (props) =>{
   function pageChange(event){
    const id = event.target.id;
    props.setPage(id);
   }

   
   
    return (
      <div className='navbar'>
      
        <div>
            <img id="logo" src={name} alt="logo of my name"/>
    
         </div>
      
        <div className="navbar-menu">
          <ul className={props.page}>
          <li> <button id="about" onClick={pageChange}>
              About Me
            </button>
      </li>
      <li>
            <button id="projects" onClick={pageChange}>
              Projects
            </button>
      </li>
      <li>
            <button id="resumes" onClick={pageChange}>
              Resume
            </button>
      </li>
         </ul>
   </div>
      </div>
    )
};

export default Nav;