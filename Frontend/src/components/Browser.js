import React from 'react'
import browserScripts from '../browserScripts';
import "./Desktop.css"



const Browser = () => (

    <div className="row mt-2"> 
    <div className="col-md-1"/>

        <div className="col-md-10 border">
            <div className="card card-body ">
                <div className="row">
                    <div className="col-md-12 border-bottom">
                        <h3 className="text-center text-white"> Please select an action</h3>
                    </div>
                        


                    <div className="col-md-12 mt-3">
                        <h4 className="text-center text-white"> Browser Scripts</h4>
                        <div className="border-bottom mb-1 "/>
                    </div>        

                    {
                            browserScripts.map(({name,description,image,url},i) => (
                            
                                <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100 border">
                                    <div className="overflow ">
                                        <br/>
                                        <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top browser-images mt-1" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="text-center"><strong>{name}</strong></h5>
                                        <p className="text-center text-small">{description}</p>
                                        <div className="text-center">
                                        <a className="btn btn-info border button-card" href={`/${url}`}>Launch</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            ))
                        }                   

                    


                                    </div>

                


            </div>

            


        </div>     

    <div className="col-md-1"/>
  

</div>

)

export default Browser;