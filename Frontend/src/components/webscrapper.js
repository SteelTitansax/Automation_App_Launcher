import React from 'react'
import "./Panels.css"

import { useEffect, useState } from 'react';



const WebScrapper = () => {
  
    
    
    return ( 
    
        <div className="row ">
        <h5 className="text-center mt-2"> Download this Robocorp bot in your computer</h5>

            <div className="col-md-4  panels " />

                    
            <div className="col-md-4 p-2 panels">
                <div className="card h-100 border">
                    <div className="overflow ">
                    <br/>
                        <img src="/robocorpAbout.png" alt="Imagen Panel"  className="card-img-top image-panel-bots  pt-2" />
                    </div> 
                    

                   
                    <div className="card-body border-top" >
                        <h5 className="text-center"><strong>Github Code</strong></h5>
                        <p className="text-center">https://github.com/ManuelPortero/Robocorp1</p>
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/">Go Back</a>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="col-md-4 p-2 panels"/>
        </div>

    )
}
export default WebScrapper;


