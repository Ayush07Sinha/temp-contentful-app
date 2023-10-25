 import React from 'react'
 import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                Organic dreamcatcher 
                hashtag truffaut flexitarian sartorial
                kogi chartreuse kombucha cred drinking vinegar XOXO 
                blackbird spyplane wolf health goth.
                Kickstarter chicharrones portland asymmetrical, XOXO you probably haven't heard of them 3 wolf moon biodiesel craft beer tilde slow-carb vexillologist.                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt='woman and the browser' className='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero;
