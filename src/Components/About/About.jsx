import React from 'react'
import './About.css'
import img from '../../assests/Paneer Roll.jpg'
const About = () => {
  return (
    <section className='about'>
    <div className='about-container'>
<div className='about-text'>
<h1>About Us</h1>
<p>
We are passionate about connecting food lovers with the finest local kitchens and authentic regional flavors. From traditional hand-crafted sweets to everyday savory comfort food, our mission is to deliver fresh, piping-hot meals straight from top chefs to your doorstep in minutes.</p>
<p>
We partner exclusively with quality-checked restaurants and local culinary artisans to ensure every order meets highest standard of taste and hygiene. Whether you are craving a late-night dessert or planning a feast with family, our seamless ordering platform makes satisfied cravings just a tap away.</p>
<button className='about-btn'>Learn More</button>
</div>
<div className='about-image'>
  <img src={img} alt="about" />
</div>
    </div>
    </section>
  )
}

export default About