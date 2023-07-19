
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

import Modal from "./ProjectModal"

import mobileProjects from "../projectData/MobileProjectData"


const projectVariant = {
    hidden: { opacity: 0 , scale :0.8},
    visible : {opacity:1 , scale : 1}
}


const Mobile = () =>{

    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [id, setId] = useState()
    const [desc, setDesc]= useState()
    const [link, setLink]= useState()


    
    const handleModal = (id, name, desc, img, link)=>{
        
            setOpenModal(true);
       
            setSelectedProject(name);
            setId(id);
            setDesc(desc);
            setLink(link);
            setImgUrl(img);
            console.log(name)

      
        
        
        
        
    }

    return(
                <section > 
                
                <p className="mt-10 mb-7 justify-center mx-5 text-center md:text-normal flex">
                        My mobile development projects using React Native. In some respects I enjoy having a smaller screen to work on and design a UI for.ned solution.
                        PROJECTS PENDING
                    </p>

                <div className={`flex justify-center `}>

                    <motion.div
                        className={`sm:grid sm:grid-cols-4 mx-20 gap-5 ${openModal ? document.body.style.overflow ='hidden'  :document.body.style.overflow ='scroll'}`}
                        
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.2}}
                        transition={{staggerChildren:0.2}}
                        
                    >
                           
                           
                      
                        
                       
                        {mobileProjects.map((project)=>{

                            const overlayStyles = `absolute h-full w-full opacity-0 ${!openModal ? "hover:opacity-90 transition duration-500" : "" }
                                    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-dark`;
                            return(
                                <motion.div
                                    variants={projectVariant} className="relative">

                                    <div className={ overlayStyles} >
                                        <p className="text-2xl font-roboto font-bold">{project.name}</p>
                                        <p className="mt-7" >
                                            {project.description}
                                        </p>
                                        <button className="bg-blue p-1 mt-2" onClick={()=>{handleModal(project.id, project.name, project.description, project.image, project.link)}}>Press here</button>
                                    </div>
                                    
                                    <img src={project.image} alt={project.name} />
                                    
                                </motion.div>
                            )
                        })}
                        
                        

                    </motion.div>

                    
                </div>

                <Modal open={openModal} id={id} selectedProject={selectedProject} description={desc} img={imgUrl} link={link} setOpenModal={setOpenModal} onClose={()=>{setOpenModal(false)}}/> 
                
                
                </section>
      

    )
    
}

export default Mobile