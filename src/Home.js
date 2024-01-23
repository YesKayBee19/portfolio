
import React from 'react';
import './Styles.css'
import Sai from './IMG_1747-modified.png'

const Home = () => {
  return (
  <>
  <h3>Welcome to my portfolio!</h3>
  <p className='name'>SAIKRISHNA BALAJI</p>
  <h3 className='abt'>React developer</h3>
  <p className='Des'>This is a simple website that has been created by me using React.js<br/>It showcases some of the projects I have worked on.</p>
  <img src={Sai} alt='q' className='profile'/>
  <br/>
  <p className='nmi'>In order to know more about me please visit the About page</p>
  </>
  );
};

export default Home;
