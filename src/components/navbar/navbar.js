import React, { useState } from 'react'
import './navbar.css'
import Telegram from '../../assets/telegram.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
// import { Web3Button } from '@web3modal/react'
import Cicaa from '../../assets/cicca.png'
import Menu from '../../assets/menu.png'
const Navbar = ({connect,account}) => {
  const [menu,setMenu]=useState(false)
  const redirect=()=>{
    let a=document.createElement('a')
    a.target='_blank'
    a.href='https://cicca.io'
    a.click()
    a.remove()
  }
  const menuItems=[{
    name:'Roadmap',

  },
  {
    name:'Tokonomics',
    
  },
  {
    name:'Features',
    
  },

]
  const socialIcons=[
    {
      link:'https://t.me/CiccaOfficial',
      logo:Telegram,
      name:'telegram',
    },
    {
      link:'https://www.instagram.com/ciccadefi',
      name:'instagram',
      logo:Instagram
    },
    {
      link:'https://twitter.com/CiccaDefi',
      name:'twitter',
      logo:Twitter
    },

  ]
  const openMenu=()=>{
    setMenu(!menu)
  }
  return (
    <header className='navbar'>
      <div>

      </div>
      <div className='logo_container' onClick={redirect} >
        <img className='mobile_logo' src={Cicaa}  alt='logo'  />
        {/* <h1>CICCA</h1> */}
      </div>
      <div className='social-icons'>
        <button className='cicca-button' onClick={connect}>{account? `${String(account).slice(0,4)}...${String(account).slice(38,42)}` : 'Connect'}</button>
        {/* {Array.isArray(socialIcons) && socialIcons.map((item)=>(<a href={item?.link} target='_blank'>
          <img className='img' alt={item?.name} src={item?.logo}/>
        </a>))} */}
        {/* <Web3Button /> */}
      </div>
        <div className='hamburger'>

        <img src={Menu} onClick={openMenu}    />
        {menu && <div className='menu'>
          {menuItems && menuItems.map((item)=>(<div className='menu_each' onClick={redirect}>
           {item?.name}
            </div>))}

            {/* <Web3Button /> */}
            <div className='social_icons_mobile'>
            {Array.isArray(socialIcons) && socialIcons.map((item)=>(<a href={item?.link} target='_blank'>
          <img className='img' alt={item?.name} src={item?.logo}/>
        </a>))}
            </div>
        </div>}
        
        </div>
    </header>
  )
}

export default Navbar