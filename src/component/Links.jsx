import React from "react"
import linkedinPic from "../assets/linkedin.png"
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"



const Links = () =>{
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/elliot-carr-4555a5213/"
            target="_blank"
            rel="noreferrer">
            
            <img alt="linkedin-link" src={linkedinPic}></img>
        </a>

        <a
            className="hover:opacity-50 transition duration-500"
            href="https://github.com/elliotxcarr"
            target="_blank"
            rel="noreferrer">
            
            <img alt="github-link" src={github} className="w-8"></img>
        </a>
        <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com/b0mb0clatty_art/"
            target="_blank"
            rel="noreferrer">
            
            <img alt="insta-link" src={instagram} className="w-8"></img>
        </a>

        
    </div>
    )

}

export default Links