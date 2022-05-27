import React from "react";
import './Body.css'


class Body extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="projects">
                    <h3>Projects</h3>
                    <div className="project-container">
                        <article>
                            <a href="https://github.com/Tomavetisyan/CircuitPlaygroundExpress"  class="image"><img src={require("./images/circuitBoard.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>Circuit Playground Express</h4>
                                <p>The Playground Express is an interactive LED light board with built in temperature sensors, light sensors, and touch sensitivity.
                                    Using Python, I built an interactive game of "Simon Says", with increasing levels of complexity. The program chooses a position between 
                                    1-10 at random, which corresponds with a position on the LED board. The user must press the corresponding buttons at which point, the 
                                    program will elect a new position into the array and continue the protocol until an incorrect input is received at which point, the game will restart. 										</p>
                            </div>
                        </article>
                        <article>
                            <a href="https://github.com/Tomavetisyan/Python-Pokemon"  class="image"><img src={require("./images/pokemon.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>Python-Pokemon Battle System</h4>
                                <p>Using Python, I built a program to replicate a "Pokemon Battle" where two trainers battle against each other using six Pokemon each.
                                    Using JSON, I read data from two files containing attributes about each Pokemon, as well as a file with type matchup information.
                                    I implemented a Pokemon and Trainer class with constructors to build objects using data read from the JSON files, and helper functions to perform tasks related to the battle (attack, lose health, revive, etc.).
                                </p>
                            </div>
                        </article>
                        <article>
                            <a href="https://github.com/Tomavetisyan/C-Math-Solver"  class="image"><img src={require("./images/math.jpg")} alt="" /></a>
                            <div class="inner">
                                <h4>C++ Math Solver</h4>
                                <p>I built a C++ application to calculate mathematical attributes (angles, volume, circumference, length, etc.) for 2D and 3D shapes. 
                                    I also used Microsoft's CPP Unit Test Framework to test the code with 100% coverage.

                                    I created the class hierarchy for different shapes to inherit variables and functions from the generic parent class.
                                    For each class, I researched the related mathematical formulas for each shape and wrote the formulas in C++.
                                    I used designated access to implement code privacy to secure non-public variables and functions. 
                                    
                                    I used Microsoft's CPP Unit Test Framework to test code coverage techniques including Statement Coverage, Decision Coverage, Branch Coverage, and Condition Coverage.

                                </p>
                            </div>
                        </article>
                        <article>
                            <a href="https://github.com/Tomavetisyan/C.O.O.L.---C-Object-Oriented-Language" class="image"><img src={require("./images/cool.png")} alt="" /></a>
                            <div class="inner">
                                <h4>C.O.O.L.---C-Object-Oriented-Language</h4>
                                <p> With a small team, we created a compiler using Java, which would translate and output workable C code. 
                                    Our compiler would parse through the java, tokenize each syntax into a long array, parse through the array, and compile the new C code.
                                    I created the parser that read in tokens and verified that the output expression is valid C code. The parser throws an exception
                                    error when there is a syntax missing in the code. I also used the Maven framework to write unit tests.

                                </p>
                            </div>
                        </article>
                        <article>
                            <a href="https://github.com/Tomavetisyan/JavaScript-Paint" class="image"><img  src={require("./images/paint.png")} alt="" /></a>
                            <div class="inner">
                                <h4>JavaScript-Paint</h4>
                                <p> I created a web based paint software using HTML5, CSS, and Javascript using Jquery.
                                    I used event listeners to capture mouse interactions to perform paint tasks with html canvas. I designed and created the entire UI and icon design froms scratch. 
                                    Users are able to perform tasks such as painting with a brush, adding shapes, changing color pallets, undo and redoing actions, saving their files, and much more.
                                </p>
                                <a href="Paint/paint.html" >Live Demo Link</a>
                            </div>
                        </article>
                        <article>
                            <a href="https://github.com/Tomavetisyan/Ticket-Kiosk-Requirments-Doc/blob/master/Comp%20582%20-%20Project%202%20-Ticket%20Kiosk.pdf" class="image"><img src={require("./images/mctickets.png")} alt="" /></a>
                            <div class="inner">
                                <h4>McTickets</h4>
                                <p>I wrote a SRS (Software Requirements Specification) document to create a ticket kiosk system. This is a detailed 20 page document, with built in use cases and test scenarios
                                    that could be used to implement a working system.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>               
            </div>
        )
    }
}

export default Body;