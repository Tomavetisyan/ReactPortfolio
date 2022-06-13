import React from "react";
import './Head.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShrimp } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin,
    faGithub,
    faContao  
} from "@fortawesome/free-brands-svg-icons"

class Head extends React.Component{
    render(){
        return(
            <div className="head">
                <div className="head-container">
                    <div className="left">
                        <h5>TomAvetisyan95@gmail.com</h5>
                    </div>
                    <div className="middle">
                        <a href="https://tomavetisyan.github.io/Toms-Shrimp/" className=""> <i className="fa-solid fa-shrimp"></i></a>
                        <h1>Tommy Avetisyan</h1>
                    </div>

                    <div className="right">
                        <div className="icon"><a href="https://www.linkedin.com/in/tommy-avetisyan/" className=""><FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth /></a></div>
                        <div className="icon"><a href="https://github.com/Tomavetisyan" className=""><FontAwesomeIcon icon={faGithub} size="2x" fixedWidth /></a></div>
                        <div className="icon"><a href="https://www.codecademy.com/profiles/Tomavetisyan" className=""><FontAwesomeIcon icon={faContao} size="2x" fixedWidth /></a></div>
                    </div>
{/* 
                    <div>
                        <h4>TomAvetiysna95@Gmail.com</h4>
                        <h4>(818)-396-2688</h4>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Head