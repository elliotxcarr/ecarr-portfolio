import { useState, useEffect } from 'react'
import React from 'react'
import DotGroup from "./component/DotGroup"
import NavBar from "./pages/NavBar"
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import useMediaQuery from './hooks/useMediaQuery';
import Projects from "./pages/Projects";
import LineDiv from './component/LineDiv';
import Contact from './pages/Contact'

function App() {


  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0 ) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  },[])

  return (
   <div className='app bg-dark'>
   
      <NavBar
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      /> 

       <div className=' mx-auto md:h-full'>
      
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          
        )}
        <Home 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}/>
        
        </div>
        

      <AboutMe/>

      <LineDiv color='grey'/>

      <Projects/>

      <LineDiv color='grey'/>

      <Contact/>
      

   </div>
    
  )
}

export default App
