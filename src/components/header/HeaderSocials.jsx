import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/edison.zulfaj/" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/EdisonZulfaj" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials