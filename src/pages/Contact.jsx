
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import contactImage from "../assets/contact-image.jpeg"
import LineDiv from "../component/LineDiv";

const Contact = ()=>{

    const{
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e)=>{
        const isValid = await trigger();

        if(!isValid){
            e.preventDefault();
        }

    }

    return(
        <section id="contact" className="py-20  bg-dark">
            {/* HEADING */}

           

        {/* FORM AND IMAGE SECTION */}
        <div className="md:flex md:justify-between gap-20 mt-10 mx-10">

                    <motion.div
                    className="basis-1/2 justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible: {opacity:1, y:0}
                        }}>

                           <div className="relative z-0 ml-4 before:absolute before:-top-10 before:left-7 md:before:left-20
                     before:w-full before:max-w-[520px] before:h-full before:border-4 before:border-blue
                    before:z-[-1]">
                <div className="relative z-0 ml-10 before:absolute before:top-10 before:-left-10
                     before:w-full before:max-w-[500px] before:h-full before:border-8 before:border-red
                    before:z-[-1]">

            <img src={contactImage} alt="contact"></img>

                    </div>
                    </div>
                        </motion.div>


                        <motion.div
                        className="basis-3/5 mx-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible: {opacity:1, y:0}
                        }}>

        <motion.div 
                    className="mb-10 mt-20 md:mt-0"
                        initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount:0.5}}
                                transition={{duration:0.5}}
                                variants={{
                                    hidden:{opacity:0, x:-50},
                                    visible: {opacity:1, x:0}
                                }}>

                                <div>
                                    <p className="font-roboto font-semibold text-center md:text-left text-4xl  ">
                                        CONTACT ME

                                    </p>
                                    <div className= " h-1 w-full mt-3 bg-red "></div>
                                    
                                    

                                </div>
                            

        </motion.div>
                            <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/a4658ad99a7c5fbb43aa6663b5f6b6c1"
                            method="POST"
                            >
                                <input
                                    className="w-full bg-blue font-semibold placeholder-slate-600 p-3"
                                    type="text"
                                    placeholder="NAME"
                                    {...register("name",{
                                        required:true,
                                        maxLength:100,
                                    })}
                                />
                                {errors.name &&(
                                    <p className="text-red mt-1">
                                        {errors.name.type === 'required' && "This field is required."}
                                        {errors.name.type === 'maxLength' && "Max length is 00 char."}

                                    </p>
                                )}

                                <input
                                    className="w-full bg-blue font-semibold placeholder-slate-600 p-3 mt-5"
                                    type="text"
                                    placeholder="EMAIL"
                                    {...register("email",{
                                        required:true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    })}
                                />
                                {errors.email &&(
                                    <p className="text-red mt-1">
                                        {errors.email.type === 'required' && "This field is required."}
                                        {errors.email.type === 'pattern' && "Invalid email address"}

                                    </p>
                                )}

                                <textarea
                                    className="w-full bg-blue font-semibold placeholder-slate-600 p-3 mt-5"
                                    type="text"
                                    placeholder="MESSAGE"
                                    rows="4"
                                    cols="50"
                                    {...register("message",{
                                        required:true,
                                        maxLength:2000
                                    })}
                                />
                                {errors.message &&(
                                    <p className="text-red mt-1">
                                        {errors.message.type === 'required' && "This field is required."}
                                        {errors.message.type === 'maxLength' && "Max length is 2000 char."}

                                    </p>
                                )}

                                <button
                                type="submit"
                                className="p-3 bg-blue font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition-none duration-500">
                                    SEND ME A MESSAGE
                                </button>

                            </form>


                        </motion.div>

        </div>

        <div className="flex md:flex-row flex-col justify-center md:justify-start mt-20 text-center text-xl md:ml-20 gap-10">
        <div>
            <p>Email: elliotcarro@gmail.com</p>
        </div>
        <div>
            <p>Tel: 07804004281</p>
        </div>
            

        </div>




        </section>
    )
}

export default Contact