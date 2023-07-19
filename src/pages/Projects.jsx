
import { motion,  } from "framer-motion";
import { useState } from "react";

import Web from "../component/Web";
import Mobile from "../component/Mobile";
import Games from "../component/Games";
import ThreeDWork from "../component/3D";
import useMediaQuery from "../hooks/useMediaQuery";







const Projects = ()=>{

    
    const isAboveMed = useMediaQuery("(min-width:760px)");

    const [selectedTab, setSelectedTab] = useState('web')

        const handleSelect=(id)=>{
            setSelectedTab(id)
        }
    

var tabs =[ {
    title:"Web Dev",
    id:"web"

},
{
    title:"Mobile Dev",
    id:"mob"

},
{
    title:"3D Work",
    id:"3d"

},
{
    title:"Game Dev",
    id:"game"

},
]




    return(
        <section id="projects" className=" bg-dark relative mt-10 md:mt-20 pb-48">

            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:-50},
                    visible: {opacity:1, y:0}
                }}>
                
                <div>
                    <p className="font-roboto font-semibold text-4xl">
                       PROJECTS
                    </p>
                    <div className= " h-1 mx-10 md:w-full mt-3 bg-red"></div>


                {isAboveMed ? (
                    <div className="mt-10 gap-10 flex justify-center">
                       
                        
                       {tabs.map((tab)=>{
                           return(
                               <button
                               key={tab.id}
                              className={`text-2xl font-roboto p-1 border-4  font-bold hover:text-blue ${selectedTab === tab.id ? "border-blue" : "border-dark " }  `}
                               onClick={()=>{handleSelect(tab.id)}}
                           >
                           {tab.title}
                           

                           </button>

                           )
                           
                       })}
                   </div>
                ):(
                    <div className="flex justify-center mt-10">
                        <select className="bg-dark border-2 border-blue font-roboto text-blue text-2xl"
                        onChange={(e)=>{handleSelect(e.target.value)}}
                        >
                            {tabs.map((tab)=>{
                                    return(
                                        
                                            <option
                                            value={tab.id}
                                            className="border-blue border-2"
                                            

                                            >{tab.title}</option>
                                        
                                        
                                    )
                                    
                            })}

                        </select>
                        
                    </div>
                )}
                    
                   
                    
                    
                </div>
                    

                   

                    

                </motion.div>
                {selectedTab ==="web" ? (<Web/>):<div></div>}
                {selectedTab ==="mob" ? (<Mobile/>):<div></div>}
                {selectedTab ==="3d" ? (<ThreeDWork/>):<div></div>}
                {selectedTab ==="game" ? (<Games/>):<div></div>}
                
                

        </section>
    )
}

export default Projects