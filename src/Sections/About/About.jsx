import React from 'react'
import './About.css'
import { product } from './product'
import check from './outline_done_black_24dp.png'
import { boxes } from './boxContent'

export default function About() {
  return (
    <section id='2' className='AboutContain' >
        <div className="AboutWrapper">
            <div className="AboutContent">
            <div className="AboutB1">
                <div className="Watchinf">
                    <h2 id='Title' >{product.Title}</h2>
                    <h3 id='sub' >{product.subroutine}</h3>
                    <p id='p1' >{product.p1}</p>
                    <p id='p2' >{product.p2}</p>
                </div>
                <img id='Watchimage' src={product.image} alt={product.alt} />
            </div>

        <div className="listBoxes">

            <div className="Difbox">
                <h3 id='DifboxTitle'>CULLABIT ALIS MORIS</h3>
                <ul>
                    <li><img width={25} id='check' src={check} alt="check" /> Turpis tellus faucibus sapien eleifend</li>
                    <li><img width={25} id='check' src={check} alt="check" /> Curabitur vehicula nisi id eros</li>
                    <li><img width={25} id='check' src={check} alt="check" /> Fusce tincidunt ligula</li>
                    <li><img width={25} id='check' src={check} alt="check" /> Maecenas eu purus ...</li>
                </ul>
            </div>

            {
                boxes.map(item => <div key={item.about} className="box"><h4 id='boxTitle' >{item.Title}</h4> <p id='boxAbout'>{item.about}</p></div>)
            }
            </div>   
      </div>
    </div>
    </section>
  )
}
