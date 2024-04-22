import React from 'react';
import GlobalStyles from '../globalStyles/globalStyles.css'
import HomeStyles from './home.css'
import HomeImage from '../photos/home_photo1.png'

function Home() {
  return (
    <div>
      
        <div className="homeContainer1">
          <div id="home-text1">
            <h1>Hi friends!</h1>
            <h2>My name is Lauren</h2>
            <h3>I am a Biology student at the University of Waterloo</h3>
            <p>Welcome to my website, I'm glad your here. This project is still in progress so bear with me </p>
            </div>
          <img className= "home-image" src={HomeImage} alt='me' />
        </div>
    </div>
      
      );
}


export default Home; 
