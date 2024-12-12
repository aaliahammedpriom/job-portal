import { easeOut, motion } from "framer-motion";
import meeting from "../../assets/meeting.jpg";
import talking from "../../assets/talking.jpg";
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img

                        src={talking}
                        animate={{ y: [50,100,50] }}
                        transition={{duration:10, repeat:Infinity}}
                        className="max-w-sm w-52 rounded-t-[40px] rounded-br-[40px] border-white border-4 shadow-2xl" />
                    <motion.img

                        src={meeting}
                        animate={{ x: [100,150,100] }}
                        transition={{duration:10, repeat:Infinity, delay:5}}
                        className="max-w-sm w-52 rounded-t-[40px] rounded-br-[40px] border-white border-4 shadow-2xl" />
                    
                </div>
                <div className="flex-1 m-auto">
                    <motion.h1 animate={{ x: 50 }} transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }} className="text-5xl font-bold">Latest <motion.span animate={{ color: ['#ecff33', '#FF6133', '#33ffe3'] }} transition={{ duration: 1, repeat: Infinity }}>Jobs</motion.span> for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;