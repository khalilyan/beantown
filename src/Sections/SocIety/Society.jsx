import React from 'react'
import './Society.css'
import check from '../About/outline_done_black_24dp.png'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
export default function Society() {
    const [status, setStatus] = useState(false)
    
  return (
    <section id='4' className='SocietyContain' >
        <div className='SocietyWrapper' >
            <div className="SocietyContent">
            <div className='Poster1' >
                <motion.img src={require('./images/home_smart_society.png')}
                initial={{scale:0}}
                whileInView={{scale:1}}
                transition={{duration:1}}
                viewport={{amount: .2,once: true}}
                />
                 <div className="Watchinf">
                  <h2 id='Title' >JOIN OVER1 MILION SOCIETY</h2>
                  <h3 id='sub' >We are proud of being the best selling app of all time</h3>
                  <p id='p1' >We are proud of being the best selling app of all time</p>
                  <p id='p2' >Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum ac eros tristique dignissim. DonVitae adipiscing turpis.</p>
                 </div>
            </div>

            <div className='Poster2'>
            <div className='P2Box' ><h4 style={{padding: '10px 0'}} id='boxTitle' >WATCH THE VIDEO PRESENTATION</h4> <p id='boxAbout'>Adipiscing turpis. Aenean ligula nibh, molestie Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.</p></div>
            <AnimatePresence initial={false}>
            {
                !status ? <motion.img height="341" width="576" src={require('./images/download.png')}
                className='videoImage'
                style={{cursor: 'pointer'}}
                onHoverStart={()=>setStatus(true)}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0.1}}
                transition={{duration: 0.7,ease: 'linear'}}
                /> :
                <motion.img height="341" width="576" src={require('./images/home_smart_video_2.png')}
                className='videoImage'
                style={{cursor: 'pointer'}}
                onHoverEnd={()=>setStatus(false)}
                initial={{opacity: 0}}
                animate={{opacity: 0.7}}
                exit={{opacity: 0.1}}
                transition={{duration: 0.7,ease: 'linear'}}
                /> 
            }
            </AnimatePresence>
            </div>
            <svg id='br' ></svg>
            <div className="footerList">
                
                <div className="FBox1">
                <h4 id='Fliot' >How we do it</h4>
                <span id='Flio' ><img width={25} id='check' src={check} alt="check" /><p style={{color: 'silver',fontSize: 'small'}} >Suspendisse a pellentesque dui, non felis.</p></span>
                <span id='Flio' ><img width={25} id='check' src={check} alt="check" /><p style={{color: 'silver',fontSize: 'small'}} >Quisque lorem tortor fringilla sed.</p></span>
                <span id='Flio' ><img width={25} id='check' src={check} alt="check" /><p style={{color: 'silver',fontSize: 'small'}} >Nulla ipsum dolor lacus, suscipit adipiscing.</p></span>
                </div>
                
                <div className="FBox2">
                    <h4 id='Fliot' >Why we do it</h4>
                    <p style={{color: 'silver',fontSize: 'small'}} >Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum ac eros tris. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante lobortis id. In viverra ipsum ac eros.</p>
                </div>

                <div className="FBox3">
                    <h4 id='Fliot' >Why it's important</h4>
                    <p style={{color: 'silver',fontSize: 'small'}} >Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu luctus et.</p>
                </div>
            </div>
            <label id='footerTxt' style={{display: 'flex', letterSpacing: '0px',marginBottom: '0px',position: 'relative'}} ><p style={{color: 'silver',fontSize: 'small'}}>© 2017 BeSmart-BeTheme.Muffin group - HTML by</p> <a style={{color: 'lightblue',fontSize: 'small'}} href="https://themeforest.net/item/betheme-html-responsive-multipurpose-template/13925633?irgwc=1&clickid=xmmT3vRGUxyNTVNx3PRMe1mNUkAw-wRUNRqlSw0&iradid=275988&irpid=1271110&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1271110&utm_medium=affiliate&utm_source=impact_radius">BeantownThemes</a></label>
        </div>
        </div>
    </section>
  )
}
