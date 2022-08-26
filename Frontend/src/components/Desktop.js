import React from 'react'
import desktopScripts from "../desktopsScrips";
import "./Browser.css"





const Desktop = () => { 
    
    const  fetchFunction = (url) => {
        if (url === "apache") {
            var res =  fetch('http://localhost:5000/'+url, {
            method: "POST",
            }).then(response => response.json())
          .catch(error => console.log(error))
          var apache = {
              "status_code": res.status_code,
              "url_apache": res.url,
              "website_is_up": res.website_is_up
            }
            console.log(apache);
            return apache;
        }
          else {
            fetch('http://localhost:5000/'+url);
          }
    }
   
    
    return( 
    
<div className="row mt-2"> 
    <div className="col-md-1"/>

        <div className="col-md-10 border">
            <div className="card card-body ">
                <div className="row">
                    <div className="col-md-12 border-bottom">
                        <h3 className="text-center text-white"> Please select an action</h3>
                    </div>
                        


                    <div className="col-md-12 mt-3">
                        <h4 className="text-center text-white"> Desktop Scripts</h4>
                        <div className="border-bottom mb-1 "/>
                    </div>        

                    {
                            desktopScripts.map(({name,description,image,url},i) => (
                            
                                <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100 border">
                                    <div className="overflow ">
                                        <img src={image} alt="Imagen Portfolio1" className="card-img-top border-bottom desktop-images mt-1" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="text-center"><strong>{name}</strong></h5>
                                        <p className="text-center text-small">{description}</p>
                                        <div className="text-center">
                                        <a className="btn btn-info border button-card"  onClick={()=> fetchFunction(url)} href={`/${url}`}>Launch</a>
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
}
export default Desktop;