
import { motion } from "framer-motion"
import React from "react"


const projectVariant = {
    hidden: { opacity: 0 , scale :0.8},
    visible : {opacity:1 , scale : 1}
}


const Project = ({title}) =>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-dark`;

    
    const ProjectTitle = title.split(" ").join("-").toLowerCase();

    return(
        <motion.div
            variants={projectVariant} className="relative">

            <div className={overlayStyles}>
                <p className="text-2xl font-roboto font-bold">{title}</p>
                <p className="mt-7">
                    This is a project created by me to showcase my skills in this that and the next thing
                </p>
            </div>
            <img src={`src/assets/${ProjectTitle}.jpeg`} alt={ProjectTitle}/>
        </motion.div>
    )
}



const Mobile = () =>{

    return(
                <> 

                <p className="mt-10 mb-7 justify-center flex mx-5 text-center md:text-normal">
                        Mobile development projects using React Native. In some respects I enjoy having a smaller screen to work on and design a UI for.
                    </p>

                <div className="flex justify-center">

                    <motion.div
                        className="sm:grid sm:grid-cols-4 mx-20 gap-5"
                        
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.2}}
                        transition={{staggerChildren:0.2}}
                        
                    >
                           
                        
                        <Project title="Project 3"/>
                        <Project title="Project 6"/>

                        <Project title="Project 1"/>
                        <Project title="Project 4"/>
                        <Project title="Project 7"/>

                        <Project title="Project 2"/>
                        <Project title="Project 5"/>

                        

                    </motion.div>

                </div>





                </>
       

    )
    
}

export default Mobile