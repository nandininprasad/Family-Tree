import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import family from "../assets/familyMembers";
import { motion } from "framer-motion"

export default function Tree() {

    const { id } = useParams();

    let person = family[id];
    let parents = [];
    let spouse = [];
    let children = [];
    let spouseParents = [];

    if (person.parents.length > 0 ) {
        parents = person.parents;
     
    }

    if (person.spouse.length > 0)  {
        
        spouse = person.spouse;

        if (family[spouse].parents.length > 0) {
            spouseParents = family[spouse].parents;
            
        }
    }
    
    if (person.children.length > 0) {
        children = person.children;
    }

    
    
    

    return (
        <motion.div 

                intial={{width: 0}}
                // animate={{width: "100%"}}
                exit={{x: window.innerWidth, transition: {duration: 1}}}

                className="Tree"
                >
            <div className="Tree-parents">
                { parents.length > 0 && 
                <div className="Tree--person--parents">
                    {parents.map((parent) => 
                    <div className="Tree--parents--div" key= {`${parent}`}  >
                        <Link to={`/tree/${parent}`}>
                            <button className="Tree--parents--button">{family[parent].name}</button>
                        </Link>
                    </div>
                
                    )}
                </div> 
                }
                
            {spouseParents.length > 0 &&
                <div className="Tree--spouse--parents">
                    {spouseParents.map((parent) => 
                    <div className="Tree--parents--div" key= {`${parent}`}  >
                        <Link to={`/tree/${parent}`}>
                            <button className="Tree--parents--button">{family[parent].name}</button>
                        </Link>
                    </div>
                    )}
                </div>
            }
            </div>
            

            <div className="Tree--couple">
                <div className="Tree--person">    
                    <button className="Tree--person--button"> {person.name}</button>
                </div>
                
               {     
                spouse.length > 0 &&
               <div className="Tree--spouse">
                        {person.spouse.map((spouse) =>
                        <div className="Tree--spouse--div" key= {`${spouse}`} >
                            <Link to={`/tree/${spouse}`}> 
                                <button className="Tree--spouse--button">{family[spouse].name}</button>
                            </Link>
                        </div>
                        )}

                    </div>}

            </div>

           {    children.length > 0 &&
            <div className="Tree--children">
                {person.children.map((child) => 
                    <div className="Tree--child--div" key= {`${child}`} >
                        <Link to={`/tree/${child}`}>
                            <button className="Tree--child--button">{family[child].name}</button>
                        </Link>
                    </div>
                )}
                </div>}
        </motion.div>

    )
}
