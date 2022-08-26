import React from 'react'
import "./Panels.css"
import { useEffect } from 'react';



const Compression = (apacheConnection) => {
    
    useEffect( async () => {
        
        var res = await fetch('http://localhost:5000/dd')
        .then(res => res.json())         
        console.log(res);
       
    }, []);
    
    
return ( 
    
<div className="row ">
<h4 className="text-center mt-2">Your Compression it's been successfull</h4>

            <div className="col-md-4  panels " />

            
        <div className="col-md-4 p-2 panels">
            <div className="card h-100 border">
                <div className="overflow ">
                <br/>
                    <img src="/bot2.png" alt="Imagen Panel"  className="card-img-top image-panel  pt-2" />
                </div> 
                   


                    <div className="card-body border-top" >
                    <h5 className="text-center"><strong>Url</strong></h5>
                    <p className="text-center">/home/titansax/backup</p>
                    <h5 className="text-center"><strong>Compression status</strong></h5>
                    <p className="text-center">Completed</p>
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
export default Compression;


