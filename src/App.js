import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import Profile from './profile/Profile'
 import me from './profile/me.jpg';
 import HandleName from './HandleName';


 function App() {
   function getData(){
     alert (" mayssa choura")

   }
  return (
    <div className="App">
      <Profile fullname="mayssa choura" children={me}/>
      <div className="image-container">
        <img src={me} height={300} width={300} />
      </div>
      <HandleName data={getData} />
      
      <Profile  bio="learn by making " />
      <Profile profession="etudiante" />
      
    </div>
  );
  
}

export default App;
