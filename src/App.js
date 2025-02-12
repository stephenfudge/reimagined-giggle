// import './App.css';

// import { useState } from 'react';

// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import AboutMe from './pages/AboutMe';
// import Projects from './pages/Projects';
// import Resume from './pages/Resume';

// function App() {
//   const [page, setPage] = useState('about');

//   function RenderPage(){
//     switch(page){
//       case "about":
//         return <AboutMe />
//          case "projects":
//             return <Projects />
//             case "resumes":
//               return <Resume />
//               default:
//                return <AboutMe />
//     }

//   }
//   return (
//     <div className="App">
//     <Nav page={page} setPage={setPage}/>
//   <RenderPage />
//   <Footer />
//     </div>
//   );
// }

// export default App;

import { useEffect } from "react";
import './App.css';

export default function App() {
 
  useEffect(()=>{
    window.location.href="https://stephenfudge-portfolio.vercel.app";
  },[])
  return (
    <div className="redirect-text">
      <h1>Redirecting to my new portfolio...</h1>
    </div>
  );
}