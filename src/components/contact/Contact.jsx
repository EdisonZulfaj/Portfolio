import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'



const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>edisonzulfaj@outlook.com</h5>
            <a href="mailto:edisonzulfaj@outlook.com">Send a message!</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Edison Zulfaj</h5>
            <a href="https://m.me/edison.zulfaj" target='_blank'>Send a message!</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whats app</h4>
            <h5>+383 44 980 294</h5>
            <a href="https://api.whatsapp.com/send?phone=+38344980294" target='_blank'>Send a message!</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Yout Full Name' required />
          <input type="email" name='email' placeholder='Your Emaul' required />
          <textarea name="message" id="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact