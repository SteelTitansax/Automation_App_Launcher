import React from 'react'
import "./About.css"

const About = () => ( 

    <div>

<div className="row ">
        <h5 className="text-center mt-2"> About RPA-Automation App</h5>

            <div className="col-md-4  panels " />

                    
            <div className="col-md-4  panels">
                <div className="card h-100 border">
                    <div className="overflow ">
                    <br/>
                        <img src="/robocorpAbout.png" alt="Imagen Panel"  className="card-img-top image-panel-bots  pt-2" />
                    </div> 
                    

                   
                    <div className="card-body border-top" >
                        <p className="text-center"> Investigation about Linux Os Automation tecnologies</p>
                        <p className="text-center text-white"><strong>Author: Manuel Portero</strong></p>

                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/">Go Back</a>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="col-md-4 p-2 panels"/>
        </div>

    </div>
)

export default About;