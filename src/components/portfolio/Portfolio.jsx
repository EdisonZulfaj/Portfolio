import React from 'react'
import './portfolio.css'
import IMG from '../../assets/auto-parts.png'
import IMG2 from '../../assets/portfolio.PNG'
import IMG3 from '../../assets/spacex.PNG'

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
            <a href="https://github.com/bl48465/PartsManagement1" target='_blank' className='btn btn-primary'>Git Hub</a>
          </div>
         

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Cv" />
          </div>
          <h3>My CV</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EdisonZulfaj/Portfolio" target='_blank' className='btn btn-primary'>Git Hub</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Cv" />
          </div>
          <h3>SpaceX</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EdisonZulfaj/my-app-SpaceX" target='_blank' className='btn btn-primary'>Git Hub</a>
          </div>

        </article>

      </div>
    </section>
  )
}

export default Portfolio