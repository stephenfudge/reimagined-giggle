import './App.css';
import 'bulma/css/bulma.min.css';

import { useState } from 'react';

import Nav from './componentsSemantics/Nav';
import Footer from './componentsSemantics/Footer';
import AboutMe from './pagesSemantic/AboutMe';
import Contact from './pagesSemantic/Contact';
import Projects from './pagesSemantic/Projects';
import Resume from './pagesSemantic/Resume';



function App() {
  const [page, setPage] = useState('about');

  function RenderPage(){
    switch(page){
      case "about":
        return <AboutMe />
        case "contact":
          return <Contact />
          case "projects":
            return <Projects />
            case "resumes":
              return <Resume />
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
