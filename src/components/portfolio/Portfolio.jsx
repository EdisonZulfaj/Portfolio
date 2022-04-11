import React from 'react'
import './portfolio.css'
import IMG from '../../assets/auto-parts.png'
import IMG2 from '../../assets/portfolio.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="Auto parts management system" />
          </div>
          <h3>Auto parts management system</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EdisonZulfaj" target='_blank' className='btn btn-primary'>Git Hub</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Cv" />
          </div>
          <h3>My CV</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EdisonZulfaj" target='_blank' className='btn btn-primary'>Git Hub</a>
          </div>

        </article>

      </div>
    </section>
  )
}

export default Portfolio