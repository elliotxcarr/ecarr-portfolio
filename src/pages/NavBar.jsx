
import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg"
import closeIcon from  "../assets/close-icon.svg"
import { useState } from "react";

import logo from "../assets/Logo.png"

const Link = ({page, selectedPage, setSelectedPage})=>{
    
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-red" : "" }
            
            hover:text-red font-semibold transition duration-500`}

            href={`#${lowerCasePage}`}
            onClick={()=>{setSelectedPage(lowerCasePage)}}
        >
            {page}
        </AnchorLink>
    )
}


const NavBar =({isTopOfPage,selectedPage, setSelectedPage}) =>{

    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)")
    const navBarBackground = isTopOfPage ? " transition duration:500" : "bg-lightDark transition duration:500";
    return(
    <nav className= {`${navBarBackground} z-40 w-full fixed top-0 py-2`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
               
                <img src={logo}/>


            {isAboveSmallScreens ? (
                <div className="flex justify-between gap-16 text-md font-semibold">
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    
                    <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />

                    </div>
            )
            
            
            :(
                <button className="rounded-full bg-red p-2" 
                    onClick={()=> setIsMenuToggled(!isMenuToggled)}
                    >
                        <img  src={menuIcon} alt="menu-icon"/>
                        
                    </button>
            )}

             {/* MOBILE MENU POPUP */}
             {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-dark w-[300px]">
                        {/*CLOSE ICON */}

                        <div className="flex justify-end p-12">
                            <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                                <img  src={closeIcon} alt="close-icon"/>
                            </button>
                        </div>

                        {/*MENU ITEMS */}
                        <div className="flex flex-col gap-8 ml-[9%] text-2xl text-white ">
                        <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link
                            page="Education"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />





                        </div>
                    </div>
                    )}
               
        </div>
        
        
    </nav>
    )
    

}

export default NavBar