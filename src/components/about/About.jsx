import React from 'react'
import './about.css'
import ME from '../../assets/edison-about.png'
import { FaAward } from 'react-icons/fa'
import { GiGiftOfKnowledge } from 'react-icons/gi'



const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No Experience </small>
            </article>

            <article className='about__card'>
              <GiGiftOfKnowledge className='about__icon'/>
              <h5>University UBT</h5>
              <small>Computer Science and Engineering </small>
            </article>


            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No Experience </small>
            </article>
          </div>
          <p>
            Lorem Ipsum simething bla bla bla
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About