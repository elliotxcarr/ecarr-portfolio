import React from "react";
import { motion } from "framer-motion";
const MobileModal =({open, id, selectedProject, description, img, link, fade, onClose}) =>{

    if(!open) return null

    return(

        <motion.div className={`absolute inset-0 bg-dark bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-100`}
        initial={{opacity:0}}
        exit={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.2}}
        
        
        >
            <div className="w-[800px]">
                <div className="bg-white p-2 rounded text-black flex flex-row">
                
                    <div className="basis-1/2">
                        <img className="p-2 " src={img} alt={selectedProject}></img>
                    </div>
                    

                    <div className="flex flex-col items-center py-2 basis-1/2">
                        <h2 className=" font-roboto text-3xl text-center py-2 font-semibold">{selectedProject}</h2>
                        <div className="font-roboto text-md">
                            {description}
                        </div>

                        <button className="  bg-blue p-2">{link}</button>
                        
                        
                    </div>
                    <button className=" flex w-7 h-7 bg-red top-0 text-white justify-center items-center" onClick={onClose} >X</button>
                </div>
                
            </div>
        </motion.div>


    )

}

export default MobileModal