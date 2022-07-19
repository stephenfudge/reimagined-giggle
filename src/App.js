import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';

import { useState } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';

import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  const [page, setPage] = useState('about');

  function RenderPage(){
    switch(page){
      case "about":
        return <AboutMe />
        case "contact":
          return <Contact />
          case "portfolio":
            return <Portfolio />
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
