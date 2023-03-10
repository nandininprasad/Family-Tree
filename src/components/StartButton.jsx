import React from "react"
import  {Link}  from "react-router-dom"

export default function StartButton() {

    return (
        
        <div className="StartButton" >
            <Link to="/tree/a2">
            <button className="StartButton--button">Start</button>
            </Link>
        </div>
        
    )
}