import React from "react";
import './Head.css';

class Head extends React.Component{
    render(){
        return(
            <div className="head-container">
                <ul className="head-links center">
                    <li className="">
                        <a href="" className="">Projects</a>
                    </li>
                    <li className="">
                        <a href="" className="">Experience</a>
                    </li>
                    <li className="">
                        <a href="" className="">Contact</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Head