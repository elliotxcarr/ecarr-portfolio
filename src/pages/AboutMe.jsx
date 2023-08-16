import React from "react"
import { motion} from "framer-motion"
import skillsList from "../component/skillsList"
import useMediaQuery from "../hooks/useMediaQuery"
import skillsLogos from "../assets/skillLogos.png"

const AboutMe = ({selectedPage, setSelectedPage}) =>{

    const isAboveSmall  = useMediaQuery("(min-width:768px)")
    const isAboveLarge = useMediaQuery("(min-width:1060px)")

    
    return(
        
        <section id="about" className="flex md:flex-row flex-col mb-10 relative w-full bg-dark md:h-full justify-between mx-auto">
        
        <div className="flex flex-col md:basis-3/6 justify-center md:p-10 md:mx-20 mt-14">
    
        <motion.div 
                        
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}>
                <h2 className="font-roboto font-semibold text-5xl md:text-left text-center">ABOUT ME</h2>
                <div className= " h-1 mx-10 md:mx-0 md:w-full mt-3 bg-red"></div>
                <p className="font-roboto font-light mt-10 px-5 md:px-0 text-center md:text-left text-md">An ambitious, recent computing graduate with a First Class Bachelor Honour’s degree in Digital Media looking
                 to start a career in Front End Design and Development. The course has provided me with a diverse 
                 technical skillset involving many fundamental principles of UI design and implementation and granted
                  experienced in languages such as JavaScript, HTML and C#.</p>
                  </motion.div>


        <div className="flex flex-row md:mt-20 justify-center mt-5 ">
                <motion.div
                    className="items-center pl-2  "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}>

                       <img className="sm:max-w-[600px]"  src={skillsLogos} alt="logos"></img>

                </motion.div>
                 


        </div>

                    
            
            
        </div>
            
                    {isAboveSmall ? ( <motion.div className="flex flex-col py-10 md:mr-40 my-10 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:50},
                            visible: {opacity:1, x:0}
                        }}>
                        {(isAboveLarge) ? (
                            <div className=" ">
                            <div className="flex flex-row">
                            <div className="md:order-2 flex justify-center z-10 md:mt-1 sm-mt-0 mt-0">
                                <div className="relative z-0 ml-20 before:absolute before:-top-4 before:left-5
                                    before:w-full before:max-w-[500px] before:h-24 before:border-4 before:border-blue
                                    before:z-[-1]">
                            

                                    <h1 className="bg-red p-4 font-roboto font-semibold text-grey text-center sm:text-2xl md:text-3xl">React Development</h1>

                                
                                </div>

                                
                            </div>

                            <div className="md:order-2 flex justify-center z-10 mt-5 md:mt-20 sm:mt-0">
                                <div className="relative z-0 ml-20 before:absolute before:-top-4 before:left-5
                                    before:w-full before:max-w-[400px] before:h-24 before:border-4 before:border-blue
                                    before:z-[-1]">
                            

                                    <h1 className="bg-red p-4 font-roboto font-semibold text-grey text-center sm:text-2xl text-3xl">UI Design</h1>

                                
                                </div>

                                
                            </div>
                        </div>
                        <div className="flex md:flex-row">
                            <div className="md:order-2 flex justify-center z-10 mt-0 md:mt-35 sm:mt-0 ">
                                <div className="relative z-0 ml-20 before:absolute before:-top-4 before:left-5
                                    before:w-full before:max-w-[400px] before:h-16 before:border-4 before:border-blue
                                    before:z-[-1]">
                            

                                    <h1 className="bg-red p-4 font-roboto font-semibold text-grey text-center sm:text-2xl text-3xl">3D Development</h1>

                                
                                </div>

                                
                            </div>

                           
                    

                            </div>

                        </div>
                        ) :(
                            <div className="flex flex-row items-center  mb-10">
                            <div className="md:order-2 flex justify-center z-10">
                                <div className="relative z-0 ml-20 before:absolute before:-top-4 before:left-5
                                    before:w-full before:max-w-[500px] before:h-24 before:border-4 before:border-blue
                                    before:z-[-1]">
                            

                                    <h1 className="bg-red p-4 font-roboto font-semibold text-grey text-center sm:text-2xl md:text-3xl">React Development</h1>

                                
                                </div>

                                
                            </div>
                            <div className="md:order-2 flex justify-center z-10">
                                <div className="relative z-0 ml-20 before:absolute before:-top-4 before:left-5
                                    before:w-full before:max-w-[500px] before:h-24 before:border-4 before:border-blue
                                    before:z-[-1]">
                            

                                    <h1 className="bg-red p-4 font-roboto font-semibold text-grey text-center sm:text-2xl md:text-3xl">UI Design</h1>

                                
                                </div>

                                
                            </div>
                            <div className="md:order-2 flex justify-center z-10">
                                <div className="relative z-0 ml-20 before:absolute before:-top-4 before:left-5
                                    before:w-full before:max-w-[500px] before:h-24 before:border-4 before:border-blue
                                    before:z-[-1]">
                            

                                    <h1 className="bg-red p-4 font-roboto font-semibold text-grey text-center sm:text-2xl md:text-3xl">3D Development</h1>

                                
                                </div>

                                
                            </div>
                            </div>
                        )}
                       
                        <motion.div
                  className=" flex flex-col md:mt-24 mt-10 sm:items-center "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}>

                            <h2 className="font-roboto font-semibold text-3xl ">TECH SKILLS</h2>
                            <div className= " h-1 w-[200px] mt-3 bg-blue"></div>
                    
                                <motion.div className="mt-5 grid grid-cols-3 items-center"
                                initial={{opacity:0, translateX: -50}}
                                            animate={{opacity:1, translateX :0}}
                                            transition={{ delay:0.8,duration:1}}
                                >
                                    {skillsList.map((skill,i)=>{
                                        return(
                                        
                                            <motion.div
                                            
                                             initial="hidden"
                                                whileInView="visible"
                                                viewport={{once: true, amount:0.5}}
                                                transition={{delay:0.1 * i, duration:0.7}}
                                                 variants={{
                                                        hidden:{opacity:0, x:-50},
                                                        visible: {opacity:1, x:0}
                                                    }}
                                            
                                            className="font-roboto  text-lg py-2 font-light">{skill}</motion.div>
                                            
                                        
                                            
                                            
                                        )
                                    })}


                                </motion.div>
                                
                            </motion.div>
                        
                        
            </motion.div>):(
                
                <motion.div
                  className="  flex flex-col items-center mt-10 sm:justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}>

                            <h2 className="font-roboto font-semibold text-3xl ">TECH SKILLS</h2>
                            <div className= " h-1 w-[200px] mt-3 bg-blue"></div>
                    
                                <motion.div className="mt-5 flex flex-col relative sm:grid sm:grid-cols-3"
                                initial={{opacity:0, translateX: -50}}
                                            animate={{opacity:1, translateX :0}}
                                            transition={{ delay:0.8,duration:1}}
                                >
                                    {skillsList.map((skill,i)=>{
                                        return(
                                        
                                            <motion.div
                                             initial="hidden"
                                                whileInView="visible"
                                                viewport={{once: true, amount:0.5}}
                                                transition={{delay:0.1 * i, duration:0.7}}
                                                 variants={{
                                                        hidden:{opacity:0, x:-50},
                                                        visible: {opacity:1, x:0}
                                                    }}
                                            
                                            className="font-roboto text-center relative text-lg py-2 font-light">{skill}</motion.div>
                                            
                                        
                                            
                                            
                                        )
                                    })}


                                </motion.div>
                                
                            </motion.div>
                
                
            )}

           
        </section>
    )
}

export default AboutMe