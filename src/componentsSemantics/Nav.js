
import './Nav.css';
import name from '../images/name_nobg.png';



const Nav = (props) =>{
   function pageChange(event){
    const id = event.target.id;
    props.setPage(id);
   }
   
    return (
        <div className="ui grid stackable menu container" id="menu">
        {/* <div class="ui grid"> */}
  <div className="twelve wide stretched column">
    {/* <div className="ui segment"> */}
      <img src={name} alt="Logo of my name"/>
    {/* </div> */}
  </div>
  <div className="four wide column">
    <div className="ui vertical fluid right tabular menu" id="links">
      <a className="item" id="about" onClick={pageChange}>
     <span className="links"> About Me </span>  
      </a>
      <a className="item" id="projects" onClick={pageChange}>
        <span className="links"> Projects</span>
      </a>
      <a className="item" id="resumes" onClick={pageChange}>
        <span className="links"> Resume</span>
      </a>
      <a className="item" id="contact" onClick={pageChange}>
         <span className="links">Contact Me</span>
      </a>
    </div>
  </div>
      {/* <div className='four wide stretched column'>
        </div> */}

</div>
// </div>
    )
};

export default Nav;



// <div className="ui stackable menu">
// <div className="item">
//   <img src={name} />
// </div>
// <a className="item" id="about" onClick={pageChange}>About Me</a>
// <a className="item" id="projects" onClick={pageChange}>Projects</a>
// <a className="item" id="resume" onClick={pageChange}>Resume</a>
// <a className="item" id="contact" onClick={pageChange}>Contact Me</a>
// </div>