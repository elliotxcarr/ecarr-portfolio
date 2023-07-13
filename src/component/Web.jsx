
import { motion } from "framer-motion"
import React from "react"
import project1 from "../assets/project-1.jpeg"
import project2 from "../assets/project-2.jpeg"
import project3 from "../assets/project-3.jpeg"
import project4 from "../assets/project-4.jpeg"
import project5 from "../assets/project-5.jpeg"
import project6 from "../assets/project-6.jpeg"
import project7 from "../assets/project-7.jpeg"

const projectVariant = {
    hidden: { opacity: 0 , scale :0.8},
    visible : {opacity:1 , scale : 1}
}


const Project = ({title}) =>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-dark`;

    
    const ProjectTitle = title.split(" ").join("").toLowerCase();

    return(
        <motion.div
            variants={projectVariant} className="relative">

            <div className={overlayStyles}>
                <p className="text-2xl font-roboto font-bold">{title}</p>
                <p className="mt-7">
                    This is a project created by me to showcase my skills in this that and the next thing
                </p>
            </div>
            <img src={ProjectTitle} alt={ProjectTitle}/>
        </motion.div>
    )
}



const Web = () =>{

    return(
                <> 

                <p className="mt-10 mb-7 justify-center mx-5 text-center md:text-normal flex">
                        My previous website development primarily using ReactJS. I am familiar with standard CSS however I thoroughly enjoy using Tailwind as a more streamlined solution.
                    </p>

                <div className="flex justify-center">

                    <motion.div
                        className="sm:grid sm:grid-cols-4 mx-20 gap-5"
                        
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.2}}
                        transition={{staggerChildren:0.2}}
                        
                    >
                           
                        
                        <Project title={project1}/>
                        <Project title={project2}/>

                        <Project title={project3}/>
                        <Project title={project4}/>
                        <Project title={project5}/>

                        <Project title={project6}/>
                        <Project title={project7}/>

                        

                    </motion.div>

                </div>





                </>
       

    )
    
}

export default Web