import React from 'react';
import aboutStyles from './about.css'
import GlobalStyles from '../globalStyles/globalStyles.css'
import AboutImage1 from '../photos/about_photo1.png'

function About() {
  return (
    <div>
      <div className='about-container1'>
        <div className='about-text1'>
          <h2>About me</h2>
          <p>Hello, my name is Lauren Bryant. I am a third-year student studying biology with a minor
             in chemistry at the University of Waterloo. My passion for biology drives my studies and
              motivates me to explore my interest in synthetic biology.  

          <p>I am innovative and focused on making an impact, constantly looking for creative solutions
              and practical uses for the knowledge I gain. This mindset drives my desire to work at a
              startup, enabling me to contribute meaningfully and achieve tangible results.
            </p>

          <p> Beyond academics, I enjoy hiking, running, and rock climbing, which help me bring creative
              approaches to my work. These activities help me maintain a well-rounded perspective and
              inspire innovative approaches to my work.  
            </p>

              I am always open to new opportunities to learn and grow, and I welcome connections with 
              professionals in my field. </p>
          </div>

        <img className='about-image1' src={AboutImage1} alt='me'/>
      </div>
    </div>
  );
}

export default About; 

