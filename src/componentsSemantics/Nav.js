import './Nav.css';
import name from '../images/name_nobg.png';



const Nav = (props) =>{
   function pageChange(event){
    const id = event.target.id;
    props.setPage(id);
   }
   
    return (
     

        <div className="ui grid stackable menu container" id="navbar">
        
          <div className="twelve wide stretched column" >
             <img src={name} alt="Logo of my name"/>
            </div>
  
          <div className="four wide column">
    <div className="ui vertical fluid right menu links" id="navbar-links">
    <span className="links">
      <button className="item" id="about" onClick={pageChange}>
      <span className="link"> About Me </span>
      </button>
      <button className="item" id="projects" onClick={pageChange}>
      <span className="link"> Projects </span>
      </button>
      <button className="item" id="resumes" onClick={pageChange}>
      <span className="link"> Resume </span>
      </button>
      <button className="item" id="contact" onClick={pageChange}>
      <span className="link"> Contact Me </span>  
      </button>
      </span>
    </div>
  </div>
     
</div>

    )
};

export default Nav;