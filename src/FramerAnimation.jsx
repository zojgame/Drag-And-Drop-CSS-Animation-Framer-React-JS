import { motion } from "framer-motion";

export default function FramerAnimationComponent(){
    return (<>
    <motion.div
      whileHover={{background: 'black'}}
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,//на какое время растянится анимация
        // delay: 0.5,//задержка с какого момента начнется анимация
        ease: [0, 1, 0.2, 1.01]
        // ease: "easeOut"
      }}>


        fsdfsd
      </motion.div>
    
    </>)
}