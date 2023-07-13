import AnchorLink from "react-anchor-link-smooth-scroll"




const DotGroup = ({selectedPage, setSelectedPage})=>{

    const selectedStyles = `relative bg-blue before:absolute before:w-6 before:h-6 
    before:border-2 before:border-blue before:left-[-50%] before:top-[-50%]`;
    return(
        <div className="flex z-50 flex-col gap-6 fixed top-[60%] right-7">
             <AnchorLink
            className={`${selectedPage === 'home' ? selectedStyles : "bg-red" }
            
            w-3 h-3 `}

            href="#home"
            onClick={()=>{setSelectedPage('home')}}
        />
         <AnchorLink
            className={`${selectedPage === 'about' ? selectedStyles : "bg-red" }
            
            w-3 h-3`}

            href="#about"
            onClick={()=>{setSelectedPage('about')}}
        />
         <AnchorLink
            className={`${selectedPage === 'projects' ? selectedStyles : "bg-red" }
            
            w-3 h-3 `}

            href="#projects"
            onClick={()=>{setSelectedPage('projects')}}
        />
         
         <AnchorLink
            className={`${selectedPage === 'contact' ? selectedStyles : "bg-red" }
            
            w-3 h-3 `}

            href="#contact"
            onClick={()=>{setSelectedPage('contact')}}
        />
        
        </div>
    )
}

export default DotGroup