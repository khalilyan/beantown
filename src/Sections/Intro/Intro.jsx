import React, { useRef } from 'react'
import './Intro.css'
import { IntroSlices } from './Images'
import { motion } from 'framer-motion'

export default function Intro() {

    const parallax = (e) => {
        document.querySelectorAll('.ParralaxPoster').forEach((move)=>{
            let posX = move.getAttribute('x');
            let posY = move.getAttribute('y');
            const x = -(e.clientX - window.innerWidth/2)/posX;
            const y = -(e.clientY - window.innerHeight/2)/posY;
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }

  return (
    <motion.section id='0' className='IntroContain'>
        <div className="IntroWrapper">
            <div className="IntroContent">

              <div className="ParallaxList">

                <motion.h1 id='PosterTitle' className='ParralaxPoster' onMouseMove={(e)=>parallax(e)} x={12} y={18}
                initial={{y: 200,opacity: 0}}
                animate={{y: 0,opacity: 1}}
                transition={{duration: 3,ease: 'anticipate'}}
                >LET'S MEET SMART APP</motion.h1>

            {
                IntroSlices.map( item => <motion.div 
                    key={item.alt}
                    className='ParralaxPoster' 
                    x={item.x} 
                    y={item.y} 
                    onMouseMove={(e)=>parallax(e)} 
                    style={{backgroundImage: `url(${item.src})`}} 
                    initial={{
                        zoom: item.Initialzoom,
                        opacity: item.opacity
                    }}
                    animate={{
                        zoom: item.zoom,
                        opacity: 1
                    }}
                    transition={{duration: 3,ease: 'anticipate'}}
                    
                    ></motion.div>)
            }

        <p id='PosterTitle2' className='ParralaxPoster' onMouseMove={(e)=>parallax(e)} x={12} y={18} style={{textTransform: 'uppercase'}} >Lorem ipsum dolor sit amet consectetur </p>

        </div>
            </div>
        </div>
    </motion.section>
  )
}
