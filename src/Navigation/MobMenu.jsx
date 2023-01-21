import React from 'react'
import './MobMenu.css'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { menu } from './Navigations'
import logo from '../Images/smart.png'
import Hamburger from 'hamburger-react'


export default function MobMenu() {
    const [selected, setSelected] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const scrollToPage = (index) =>{
      const sectionPosition = document.getElementById(index).offsetTop;
      window.scrollTo({
        left: 0,
        top: sectionPosition-60
    })    
   };


  return (
    <div className='MobMenuContain' >
        <div className="MobMenuWrapper">

        <div className='MobSlice1' >
          <a href='#'>
          <img style={{verticalAlign: 'middle',maxHeight: '100%',padding: '1px'}} width='90%' height='90%' src={logo} />
          </a>
          <Hamburger color='white' size={20} rounded toggled={isOpen} toggle={setOpen} />
        </div> 

        <AnimatePresence>
        {isOpen ?<motion.div className="MobSlice2"
        initial={{height: 0, opacity: 0}}
        animate={{height: 300, opacity: 1}}
        exit={{height: 0, opacity: 0}}
        >
        <motion.nav className='navMobList'
       initial={{display: 'none', opacity: 0}}
       animate={{display: 'flex', opacity: 1}}
       exit={{display: 'none', opacity: 0}}
        >
          {
            menu.map(((item,index) => <span key={index} className='MobMenuItem' >
            <label onClick={()=>scrollToPage(index)}>{item.title}</label>
            </span>
              ))
          }
        </motion.nav>
        </motion.div> : null
        
      }
      </AnimatePresence>
        </div>
    </div>
  )
}
