import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import logo from '../Images/smart.png'
import './TabMenu.css'
import { menu } from './Navigations'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

export default function TabLayout() {
    const [selected, setSelected] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const scrollToPage = (index) =>{
      const sectionPosition = document.getElementById(index).offsetTop;
      window.scrollTo({
        left: 0,
        top: sectionPosition-60
    })    
   }

  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll',()=>{
  sections.forEach((section,index) =>{
    const sectionTop = section.offsetTop-61;
    const sectionHeight = section.clientHeight;
    if(window.scrollY>=sectionTop-sectionHeight/8){
      setSelected(index)
    }
  })
 })

  return (
    <div className='TabLContain' >
      <div className="TabLWrapper">

        <div className='TabSlice1' >
          <a href='#'>
          <img style={{verticalAlign: 'middle',maxHeight: '100%',padding: '1px'}} width='90%' height='90%' src={logo} />
          </a>
          <Hamburger color='white' size={20} toggled={isOpen} toggle={setOpen} />
        </div>
        <AnimatePresence>
        {isOpen ?<motion.div className="TabSlice2"
        initial={{height: 0, opacity: 0}}
        animate={{height: 300, opacity: 1}}
        exit={{height: 0, opacity: 0}}
        >
        <nav className='navTabList'>
          {
            menu.map(((item,index) => <span className='TabMenuItem' >
            <label onClick={()=>scrollToPage(index)}>{item.title}</label>
            </span>
              ))
          }
        </nav>
        </motion.div> : null
        
      }
      </AnimatePresence>
    </div>
    </div>
  )
}
