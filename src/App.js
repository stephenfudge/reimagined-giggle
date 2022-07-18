import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';
import { useState } from 'react';
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
