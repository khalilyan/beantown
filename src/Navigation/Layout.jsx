import React, { useEffect,useRef, useState } from 'react'
import { menu } from './Navigations'
import logo from '../Images/smart.png'
import './Layout.css'
import { LayoutGroup } from 'framer-motion'
import { motion } from 'framer-motion'

export default function Layout() {
  const MenuRef = useRef();
  const [selected, setSelected] = useState(0);
  const [logoSize, setLogoSize] = useState('100%')

 useEffect(() => {
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 60){
      setLogoSize('60%')
      MenuRef.current.style.backgroundImage = `url(${require('../Images/download.jpg')})`;
      MenuRef.current.style.position = 'fixed';
    } 
    if(window.scrollY < 60){
      setLogoSize('100%')
      MenuRef.current.style.backgroundImage = 'none'
      MenuRef.current.style.backgroundColor = 'transparent' 
      MenuRef.current.style.position = 'absolute';
    }
  })
 }, [window.scrollY])
 
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
          <LayoutGroup>
    <div ref={MenuRef} className='MenuContain'>
      <div className="MenuContent">
        <a href='#'>
       <img style={{verticalAlign: 'middle',maxHeight: '100%',padding: '1px',zoom: logoSize}} width='90%' height='90%' src={logo} />
        </a>
        <nav className='navBar' >
          {
            menu.map(((item,index) => <span key={index} >
            <label onClick={()=>scrollToPage(index)}>{item.title}</label>
            {selected===index && <motion.div layoutId='Active' id='line'></motion.div>}
            </span>
              ))
          }
        </nav>
      </div>
    </div>
          </LayoutGroup>
  )
}
