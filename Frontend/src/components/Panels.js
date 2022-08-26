import React from 'react'
import "./Panels.css"
const Panels = () => ( 
<div className="row ">
<h4 className="text-center mt-2">RPA Launcher: Please select an option</h4>

            <div className="col-md-3  panels " />

            <div className="col-md-3 p-2 panels ">
            <div className="card h-100 border">
                <div className="overflow ">
                    <br/>
                    <img src="/bot1.png" alt="Imagen Panel" className="card-img-top image-panel  pt-2" />
                </div>
                <div className="card-body border-top ">
                    <h5 className="text-center"><strong>Desktop Automations</strong></h5>
                    <p className="text-center">Check the Desktop Automation section</p>
                    <div className="text-center">
                    <a className="btn btn-primary border button-card" href="/desktop">Check Out</a>
                    </div>
                
                </div>
            </div>
        </div>

        <div className="col-md-3 p-2 panels">
            <div className="card h-100 border">
                <div className="overflow ">
                <br/>
                    <img src="bot2.png" alt="Imagen Panel"  className="card-img-top image-panel  pt-2" />
                </div>
                <div className="card-body border-top">
                    <h5 className="text-center"><strong>Browser Automations</strong></h5>
                    <p className="text-center">Check the Browser Automation section</p>
                    <div className="text-center">
                    <a className="btn btn-primary border button-card" href="/browser">Check Out</a>
                    </div>
                
                </div>
            </div>
        </div>
        <div className="col-md-3 p-2 panels"/>
    </div>

    )

export default Panels;


