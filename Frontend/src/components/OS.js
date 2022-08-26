import React from 'react'
import "./Panels.css"
import { useEffect, useState } from 'react';



const OS = () => {
    const[osConnection,setOsconnection] = useState(null); 

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:5000/os');
            const data = await res.json();
            console.log(data);
            setOsconnection(data);
        }
        getData();  // El cuerpo de los efectos no puede ser asíncrono, pero sí
                    // que puede llamar a una función asíncrona
    }, []);
    console.log(typeof osConnection, osConnection);
    
    
    return ( 
    
        <div className="row ">
        <h4 className="text-center mt-2">Your Apache Server it's been validated</h4>

            <div className="col-md-4  panels " />

                    
            <div className="col-md-4 p-2 panels">
                <div className="card h-100 border">
                    <div className="overflow ">
                    <br/>
                        <img src="/bot1.png" alt="Imagen Panel"  className="card-img-top image-panel-sorted  pt-2" />
                    </div> 
                    

                    {osConnection && (
                    <div className="card-body border-top" >
                        <h5 className="text-center"><strong>Os usage</strong></h5>
                        <p className="text-center">{osConnection.os}</p>
                        
                        <div className="text-center">
                        <a className="btn btn-primary border button-card" href="/">Go Back</a>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <div className="col-md-4 p-2 panels"/>
        </div>

    )
}
export default OS;


