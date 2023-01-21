import React from 'react'
import './Features.css'
import { FeatureItems } from './items'
import hr from './hr.png'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section id='3' className='FeaturesContain'>
      <div className="FeaturesWrapper">
        <div className="FeaturesContent">

        <div className='offer' >
        <h1 id='FeatTitle' >WHAT CAN WE OFFER</h1>
        <hr style={{marginBottom: '20px'}} />
        <img src={hr} />
        </div>
        
        <ul className="FeaturesList">
            {
                FeatureItems.map((item,index) => <motion.li className='offerItem' key={index}
                initial={{scale:0.2}}
                whileInView={{scale:1}}
                transition={{duration:index===0?index+0.2:index*0.2,ease: 'anticipate'}}
                viewport={{amount: .2,once: true}}
                >
                    <img src={item.icon} />
                    <h4  style={{marginBottom: '10px',fontSize: 'x-large',fontWeight: 200,width: '100%'}} >{item.title}</h4>
                    <p id='boxAbout' style={{fontSize: 'small'}} >{item.txt}</p>
                </motion.li>
                )
            }
        </ul>
        
        </div>
      </div>
    </section>
  )
}
