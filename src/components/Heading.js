import React from "react";
import { heading } from "../styles/homeStyles";
import { motion } from "framer-motion";
const Heading = () => <motion.h1 
      initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
style={heading}>Games</motion.h1>;

export default Heading;