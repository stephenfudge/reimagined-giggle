const Nav = (props) =>{
   function pageChange(event){
    const id = event.target.id;
    props.setPage(id);
   }
   
    return (
        <div>
<a href="#" id="about" onClick={pageChange}>About Me</a>
<a href="#" id="portfolio" onClick={pageChange} >Portfolio</a>
<a href="#" id="contact" onClick={pageChange}>Contact Me</a>
        </div>
    )
};

export default Nav;