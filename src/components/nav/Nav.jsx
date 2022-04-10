import React from 'react'
import { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { FiBook } from 'react-icons/fi'
import { RiServiceLine } from 'react-icons/ri'
import { AiFillMessage } from 'react-icons/ai'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUser /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiBook /></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Nav