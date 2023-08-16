import React ,{useRef, useState} from "react";
import { motion } from "framer-motion";
const Modal =({open, id, selectedProject, description, mainDesc, img, link, video, onClose}) =>{

    if(!open) return null

  

    
    return(

        <motion.div className={`md:absolute inset-0 bg-dark bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-100`}
        initial={{opacity:0}}
        exit={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.2}}
        
        
        >
            <div className="w-[800px]" >
                <div className="bg-white p-4 rounded text-black flex md:flex-row flex-col">
                
                    <div className="md:basis-1/2 p-8 align-middle md:w-[100px] ">
                     <video src={video} className="md:h-[500px] overflow-hidden rounded-3xl border-4 border-black" muted autoPlay  type='video/mp4'/>
                        
                    </div>
                    

                    <div className="flex flex-col md:basis-3/5 justify-center">
                        <h2 className=" font-roboto text-3xl text-left py-6 font-semibold">{selectedProject}</h2>
                        <div className="font-roboto text-md py-6 leading-7">
                            {mainDesc}
                        </div>

                        <div className="flex justify-center">
                            <a href={link}>
                                        <button className="bg-blue p-2 items-center border-2 border-white hover:bg-white hover:border-blue hover:border-2">View on Github</button>
                            </a>
                        </div>
                 
                        
                        
                    </div>
                    <button className=" absolute md:relative m-3 md:m-0 flex w-7 h-7 bg-red top-0 text-white justify-center items-center" onClick={onClose} >X</button>
                </div>
                
            </div>
        </motion.div>


    )

}

export default Modal