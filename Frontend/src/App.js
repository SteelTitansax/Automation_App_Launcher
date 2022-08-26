import './App.css';
import './components/Navbar.css'
import { React, useState, useEffect } from 'react';
import About from './components/About';
import Panels from './components/Panels';
import Browser from './components/Browser';
import Desktop from './components/Desktop';
import Apache from './components/Apache';
import Compression from './components/dd';
import Backup from './components/backup';
import CPU from './components/cpu';
import Disco from './components/disco';
import OS from './components/OS';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "bootswatch/dist/cyborg/bootstrap.min.css"
import WebScrapper from './components/webscrapper';
import Validator from './components/validator';
import Downloader from './components/downloader';
import { auth } from './firebase'; 
import Modal from '@material-ui/core/Modal'; 
import {makeStyles} from '@material-ui/core/styles';
import {Button, Input} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position : 'absolute', 
    width : 400,
    backgroundColor:'#282828',
    border: '1px solid #fff',
    boxShadow: theme.shadows[5],
    padding: '20px',
  },
}))


function getModalStyle(){
  const top = 25;
  const left = 25; 


return {
  top: `${top}%`,
  left: `${left}%`,
  transform: `translate(~$(top)%, ~$(left)%)`,
  };
}



function App() {

const classes = useStyles();
const [modalStyle] = useState(getModalStyle);
const [open,setOpen] = useState(false);
const [openSignIn, setOpenSignIn] = useState(false);
const [password,setPassword] = useState(false);
const [username,setUsername] = useState(false);
const [email,setEmail] = useState(false);
const [user,setUser] = useState(null);


useEffect(()=> {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
  if(authUser){
    //user has logged in...
    console.log(authUser);
    setUser(authUser);

  }else{
    //user has logged out...
    setUser(null); 
  }
})


return () => {
  //perform some cleanup actions
  unsubscribe(); 
}

},[user, username]);


const signUp = (event) => {
  event.preventDefault(); 
  auth
  .createUserWithEmailAndPassword(email,password)
  .then((authUser) => {
   return authUser.user.updateProfile({
      displayName:username
    })
  })
  .catch((error) => alert(error.message))
}
const signIn = (event) => {
  event.preventDefault();

  auth
    .signInWithEmailAndPassword(email,password)
    .catch((error)=> alert(error.message))

    setOpenSignIn(false);
}


 
  return (
    <Router>
              
        <div>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
          >
            <div style= {modalStyle} className={classes.paper}>
            <form className="card-body">
              <center>
                <img 
                
                src="/bot2.png"
                width="40%"
                alt="logosignyp"
                />

                <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <a type="submit" className="mt-4 btn btn-primary" onClick={signUp}>Sign Up</a>

                </center>
              </form>
            </div>
          </Modal>

          <Modal
            open={openSignIn}
            onClose={() => setOpenSignIn(false)}
          >
            <div style= {modalStyle} className={classes.paper}>
            <form className="card-body">
              <center>
                <img 
                src="/bot2.png"
                width="40%"
                alt="logosignyp"
                />

              
                <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <a type="submit" className="mt-4 btn btn-primary" onClick={signIn}>Sign In</a>

                </center>
              </form>
            </div>
          </Modal>




          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src="https://en.pimg.jp/070/538/017/1/70538017.jpg" className="logo-image mr-2" alt="logo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link text-white" href="/">RPA Launcher</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link text-white" href="/about">About</a>
                </li>
              </ul>
              { user ? ( <a className="app__loginContainer btn text-white" onClick={() => auth.signOut()}>Logout</a>

                ): (
                <div className="app__loginContainer">
                  <a className="btn text-white" onClick={() => setOpenSignIn(true)}>Sign In</a>
                  <a className="btn text-white" onClick={() => setOpen(true)}>Sign Up</a>

                </div>
              )}
            </div>
          </nav>

          { user ? ( 
             <Switch>
             <Route path="/about" component={About}/> 
             <Route path="/desktop" component={Desktop}/> 
             <Route path="/browser" component={Browser}/> 
             <Route path="/apache" component={Apache}/> 
             <Route path="/dd" component={Compression}/> 
             <Route path="/backup" component={Backup}/> 
             <Route path="/cpu" component={CPU}/> 
             <Route path="/disco" component={Disco}/> 
             <Route path="/webscrapper" component={WebScrapper}/> 
             <Route path="/validator" component={Validator}/> 
             <Route path="/downloader" component={Downloader}/> 
             <Route path="/os" component={OS}/> 
             <Route path="/" component={Panels}/> 
        
             </Switch>

          ): ( <div>
                <img src="bot1.png" alt="Imagen Panel"  className="card-img-top image-panel-login  pt-2" />
                <h5 className="text-center"> Please log in to our App </h5> 
                </div>  
              )}
                

          <footer>
            <p className="text-center footer-app">RPA Launcher, project developed in Bootswatch, JavaScript React, Python Flask, Robocorp and Firebase.</p>
            

          </footer>
        </div>

    </Router>
    
  );
}

export default App;
