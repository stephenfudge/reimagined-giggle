import './App.css';

import { useState } from 'react';


import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
// import Projects from './pages/Projects';
import Resume from './pages/Resume';

import Project2 from './components/Project';

function App() {
  const [page, setPage] = useState('about');

  // function RenderPage(){
  //   switch(page){
  //     case "about":
  //       return <AboutMe />
  //       case "contact":
  //         return <Contact />
  //         case "projects":
  //           return <Projects />
  //           case "resumes":
  //             return <Resume />
  //   } 

  function RenderPage(){
    switch(page){
      case "about":
        return <AboutMe />
       case "contact":
          return <Contact />
          case "projects":
            return <Project2 />
            case "resumes":
              return <Resume />
              default:
        return <AboutMe />
    } 

  }
  return (
    <div className="App">
    <Nav page={page} setPage={setPage}/>
  <RenderPage />
  <Footer />
    </div>
  );
}

export default App;
