import React, { useEffect, useState } from 'react';
import Homescreen from './components/Homescreen/Homescreen'
import './App.css';
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import{ 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { auth } from './Connection';

function App() {

  
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const logout=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
          setUser(userAuth)
      } else{

      } 
    })

    return logout;
  },[])


  return (
    <div className="app">
      <div className="app__container">
      <Router>
        {!user?(
          <LoginScreen />
        ):(
        <Routes>
          <Route path='/' element ={<Homescreen />}/> 
        </Routes>
        )} 
      </Router>
      </div>
    </div>
  );
}

export default App;
