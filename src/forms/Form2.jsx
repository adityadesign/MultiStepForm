import { useState } from 'react'
import Arcade from '../assets/images/icon-advanced.svg'
import Advanced from '../assets/images/icon-arcade.svg'
import Pro from '../assets/images/icon-pro.svg'

export default function Form2(props){
    const images = [Arcade, Advanced, Pro]

    return (
        <div className="form2">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
            {props.plan.map((item, index)=> {
                return (
                    <div key={index} 
                      className={`plan ${item.name === props.currentPlan.name ? 'selected' : ''}`} 
                      id={item.name} 
                      onClick={()=>props.setCurrentPlanName(item.name)}>
                        <img src={`${images[index]}`} alt="" />
                        <div className='planDetails'>
                            <h3 className='planHead'>{item.name}</h3>
                            {props.isMonthly ? 
                                <p>${item.cost}/month</p> : 
                                <div>
                                    <p>${item.cost*10}/year</p>
                                    <p id='freeMonths'>2 months free!</p>
                                </div>}
                        </div>
                    </div>
                )
            })}
            <div className='selectSwitch'>
                <span>Monthly</span>
                <label className="switch">
                    <input type="checkbox" onChange={props.handleSwitch}/>
                    <span className="slider round"></span>
                </label>
                <span>Yearly</span>
            </div>
        </div>
    )
}
