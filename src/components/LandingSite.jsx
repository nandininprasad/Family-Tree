import React from "react";
import MainTitle from "./MainTitle";
import StartButton from "./StartButton";
import { motion } from "framer-motion"


export default function LandingSite() {
    return (
        <motion.div 
        
            className="LandingSite"
            
            // intial={{width: 0}}
            // animate={{width: "100%"}}
            // exit={{x: window.innerWidth}}
            
            >
            
            
            <MainTitle />
            <StartButton />
        </motion.div>
    )
}

