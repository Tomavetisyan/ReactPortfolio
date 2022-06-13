import React from "react";
import './Body.css'


class Body extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="projects">
                    <h1>Projects</h1>
                    <ul className="project-list">
                        <li>
                            <a href="https://github.com/Tomavetisyan/microgreens"  class="image"><img src={require("./images/Microgreeny.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>Microgreeney</h4>
                                <p>&emsp; 
                                    Microgreeny is a react E-commerce website I am making for a startup company in West Hollywood, CA. I am working with the owner directly on the design.
                                    Direct contact is constant with the owner as they are able to view the live website as it is being hosted on Github Pages. The company is still
                                    in its very early stages so not everything is going to be final.
                                </p>
                                <h5 className="">Follow me on <a href="https://www.tiktok.com/@toms_shrimp" className="">Tiktok</a></h5>
                            </div>
                        </li>
                        <li>
                            <a href="https://github.com/Tomavetisyan/Toms-Shrimp"  class="image"><img src={require("./images/Shrimp-1.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>Tom's Shrimp</h4>
                                <p>&emsp; 
                                    Tom's Shrimp is my personal website where I post pictures of the exotic pets that I take care of in my hobby. We breed unique colored shrimp. Some of these breeding
                                    projects are 8 generation of shrimp in and over 1 year old.
                                </p>
                                <h5 className="">Follow me on <a href="https://www.tiktok.com/@toms_shrimp" className="">Tiktok</a></h5>
                            </div>
                        </li>
                        <li>
                            <a href="https://github.com/Tomavetisyan/ReactYelp"  class="image"><img src={require("./images/YelpSearch.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>YelpSearch</h4>
                                <p>&emsp; 
                                    YelpSearch is a React project designed to utilize the Yelp API to return a list of restaurants. The user can input the type of food and the location that they want to search for.
                                    Results can be sorted by best match, rating, and most reviewed YelpSearch is a React project designed to utilize the Yelp API to return a list of restaurants.
                                </p>
                            </div>
                        </li>
                        <li >
                            <a href="https://github.com/Tomavetisyan/jamming"  class="image"><img src={require("./images/Jamming.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>Spotify: Jamming</h4>
                                <p>&emsp; 
                                    Jamming is a React course final project that makes API calls to Spotify and returns a list of songs searched by the user. The results shows the user names, artists, and albums 
                                    that might match what the user is looking for. When the user finds the songs they are looking for, they may add the each song to a playlist that they can export to their Spotify.
                                </p>
                            </div>
                        </li>
                        <li >
                            <a href="https://github.com/Tomavetisyan/CircuitPlaygroundExpress"  class="image"><img src={require("./images/circuitBoard.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>Circuit Playground Express</h4>
                                <p>&emsp;The Playground Express is an interactive LED light board with built in temperature sensors, light sensors, and touch sensitivity.
                                    Using Python, I built an interactive game of "Simon Says", with increasing levels of complexity. The board will generate a pattern every round and the user will
                                    need to copy the pattern to move on. 									
                                </p>
                            </div>
                        </li>
                        <li >
                            <a href="https://github.com/Tomavetisyan/Python-Pokemon"  class="image"><img src={require("./images/pokemon.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>Python-Pokemon Battle System</h4>
                                <p>&emsp;Using Python, I built a program to replicate the Pokemon battle system. Taking inspiration from the original games, I pulled public Pokemon 
                                    data from a JSON file to implement type match-ups and stats. Two Trainers can choose their 6 pokemon and battle each other until all opponent pokemon are 
                                    knocked out.
                                    
                                </p>
                            </div>
                        </li>
                        <li >
                            <a href="https://github.com/Tomavetisyan/C-Math-Solver"  class="image"><img src={require("./images/math.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>C++ Math Solver</h4>
                                <p>&emsp;This is a C++ application to calculate mathematical attributes (angles, volume, circumference, length, etc.) for 2D and 3D shapes. 
                                    It uses Microsoft's CPP Unit Test Framework to run test cases with with 100% code coverage.
                                    Math Solver uses class hierarchy for different shapes to inherit variables and functions from the generic parent class.
                                </p>
                            </div>
                        </li>
                        <li >
                            <a href="https://github.com/Tomavetisyan/C.O.O.L.---C-Object-Oriented-Language" class="image"><img src={require("./images/cool.png")} alt="" /></a>
                            <div class="inner">
                                <h4>C.O.O.L.---C-Object-Oriented-Language</h4>
                                <p> &emsp;With a small team, we created a compiler using Java, which would translate and output workable C code. 
                                    Our compiler would parse through the java, tokenize each syntax into a long array, parse through the array, and compile the new C code.
                                    I created the parser that read in tokens and verified the proper output. Unit tests are done in Maven.

                                </p>
                            </div>
                        </li>
                        <li >
                            <a href="https://github.com/Tomavetisyan/JavaScript-Paint" class="image"><img  src={require("./images/paint.png")} alt="" /></a>
                            <div class="inner">
                                <h4>JavaScript-Paint</h4>
                                <p> &emsp;I created a web based paint software using HTML5, CSS, and Javascript using Jquery.
                                    I used event listeners to capture mouse interactions to perform paint tasks with html canvas. I designed and created the entire UI and icon design from scratch. 
                                    Users are able to perform tasks such as painting with a brush, adding shapes, changing color pallets and much more.
                                </p>
                            </div>
                        </li>
                        <li >
                            <a href="https://github.com/Tomavetisyan/Ticket-Kiosk-Requirments-Doc/blob/master/Comp%20582%20-%20Project%202%20-Ticket%20Kiosk.pdf" class="image"><img src={require("./images/mctickets.png")} alt="" /></a>
                            <div class="inner">
                                <h4>McTickets</h4>
                                <p>&emsp;I wrote a SRS (Software Requirements Specification) document to create a ticket kiosk system. This is a detailed 20 page document, with built in use cases and test scenarios
                                    that could be used to implement a working system.
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>             
            </div>
        )
    }
}

export default Body;