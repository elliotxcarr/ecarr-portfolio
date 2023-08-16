
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"



import Lottie from 'lottie-react'
import construction from '../assets/construction.json'





const ThreeDWork = () =>{



 

    return(
                <section > 
                
                

                    <div className="flex justify-center w-full">
                        <Lottie animationData={construction} loop={true} />
                    </div>
                
                    <p className=" justify-center mx-5 text-3xl font-bold text-center md:text-normal flex" >
                       PROJECTS PENDING
                    </p>
                </section>
      

    )
    
}

export default ThreeDWork