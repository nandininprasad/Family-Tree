import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import LandingSite from "./LandingSite"
import Tree from "./Tree"

import { AnimatePresence } from "framer-motion"



export default function AnimatedRoutes() {

    const location = useLocation();


    return (
        <AnimatePresence>
            <Routes location={location}>
                <Route path="/" element={<LandingSite/>} />
                <Route path={"/tree/:id"} element={<Tree/>}/>
            </Routes>
        </AnimatePresence>
    );
}