import React from "react";
import video from "../assets/Space.mp4"
import profilePic from "../assets/profilepic.png"
import { motion } from "framer-motion";
import Links from "../component/Links";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = ({selectedPage, setSelectedPage})=>{

    const isAboveLarge = useMediaQuery("(min-width:1060px)");
    const isAboveMed = useMediaQuery("(min-width: 760px )")
    return(
        <>
        <div className=" flex absolute object-cover w-full ">
        {isAboveLarge ? (
            <video src={video} muted autoPlay  loop type='video/mp4'>
            
            </video>
        ):(
            <div></div>
        )}
            
        </div>
            
        <section id="home" className="md:flex md:justify-between items-center h-full gap-1 -z-50 py-10">

            {isAboveLarge ? (
                <div className="md:order-2 flex justify-center basis-4/5 z-10 mt-5 md:mt-10">
                <div className="relative z-0 ml-10 before:absolute before:-top-10 before:left-28
                     before:w-full before:max-w-[450px] before:h-full before:border-4 before:border-red
                    before:z-[-1]">
                <div className="relative z-0 ml-20 before:absolute before:top-10 before:-left-20
                     before:w-full before:max-w-[400px] before:h-full before:border-8 before:border-blue
                    before:z-[-1]">

                        <img alt="profile" className="hover:filter hover:brightness-125 transition duration-500 z-10 
                        md:max-w-[450px]" src={profilePic}  />

                    </div>
                    </div>
                </div>
                ): (
                    <div className="md:order-2 flex justify-center basis-4/5 z-10  w-full mt-20 md:mt-20 ">
                    <div className="relative z-0 before:absolute before:-top-10 before:left-5
                     before:w-full before:max-w-[400px] before:h-full before:border-4 before:border-red
                    before:z-[-1]">
                <div className="relative z-0 ml-5 before:absolute before:top-10 before:-left-10
                     before:w-full before:max-w-[400px] before:h-full before:border-8 before:border-blue
                    before:z-[-1]">

                        <img alt="profile" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-[360px]
                        max-w-[250px] md:max-w-[350px]" src={profilePic} />

                    </div>
                    </div>
                </div>
                )}
        
                
                    <div className="z-30 basis-2/5 mt-32 md:ml-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}

                    >
                        <p className="text-7xl md:text-8xl font-roboto font-bold z-10 text-center md:text-start">
                            Elliot Carr
                            
                        </p>
                        <div className= " h-1 w-full justify-center mt-3 bg-red"></div>
                        
                    </motion.div>
                    

                    <motion.div
                    initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}
                    >
                    <p className=" mt-12 mb-7 font-roboto text-2xl text-center md:text-start">
                        Student Graduate
                        </p>
                        <p className="mt-7 mb-7 font-roboto text-2xl text-center md:text-start">
                        First Class BSc Hons in Digital Media
                        </p>
                        <div className="justify-center flex md:justify-start ">
                        <AnchorLink className="bg-blue px-2 py-1 text-xl text-dark font-roboto font-bold hover:bg-grey "
                        href={"#about"}
                        onClick={()=>{setSelectedPage("about")}}>
                            See More
                        </AnchorLink>
                        </div>

                       

                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{delay:0.4,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}>

                        <Links/>

                    </motion.div>

                </div>
                
                
        </section>
        

        </>
        

    )
}

export default Home