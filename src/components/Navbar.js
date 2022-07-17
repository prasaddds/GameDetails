import React from "react";
import { icons } from "../styles/global";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { icon, links, logo, navbar, signs } from "../styles/homeStyles";

function Navbar() {
  return (
    <nav style={navbar}>
      <div style={logo}>
        <motion.h1       
        initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}>D</motion.h1>
      </div>

      <motion.div style={links}
      initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
      >
        <Link to="/">
          <span className="link">Home</span>
        </Link>
        <Link to="/create">
          <span className="link">Cnlknkl</span>
        </Link>
      </motion.div>

      <motion.div 
            initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
      style={signs}>
        <span style={icon}>{icons.twitter}</span>
        <span style={icon}>{icons.insta}</span>
        <span style={icon}>{icons.blogIcon}</span>
      </motion.div>
    </nav>
  );
}

export default Navbar;