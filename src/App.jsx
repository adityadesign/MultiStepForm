import { useState } from 'react'
import background from './assets/images/bg-sidebar-mobile.svg'
import Form1 from './forms/form1'
import Form2 from './forms/Form2'
import Form3 from './forms/Form3'
import Form4 from './forms/Form4'
import ThankYou from './forms/ThankYou'

function App() { 
  const [data, setData] = useState({
    fullName : '',
    email : '',
    phone : ''
  })
  const plan = [
    {name : 'Arcade', cost : 9},
    {name : 'Advanced', cost : 12},
    {name : 'Pro', cost : 15}
  ]
  const [addOns, setAddOns] = useState([
    {id : 1, name : 'Online Service', cost : 1, description : 'Access to multiplayer games', isChecked : false}, 
    {id : 2, name : 'Larger Storage', cost : 1, description : 'Extra 1TB of cloud save', isChecked : false}, 
    {id : 3, name : 'Customizable Profile', cost : 2, description : 'Custom theme on your profile', isChecked : false}
  ])
  const [currentPlanName, setCurrentPlanName] = useState(plan[0].name)
  const [listNumber, setListNumber] = useState(1)
  const [isMonthly, setIsMonthly] = useState(true)

  function handleChange(e){
    const {name, value} = e.target
    setData(prevData => {
      return {
        ...prevData, 
        [name]: value
      }
    })
  }

  function handleCheckbox(id){
    setAddOns(prevAddOns => prevAddOns.map(item => {
      return item.id === id ? {...item, isChecked: !item.isChecked} : item
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    setListNumber(prevListNumber => prevListNumber + 1)
    if(listNumber === 2){
      const findCost = plan.find(item =>{
        return item.name === currentPlanName
      })
      setData(prevData => {
        return {
          ...prevData,
          selectedPlan : currentPlanName,
          planDetails : isMonthly ? 'Monthly' : 'Yearly',
          planCost : isMonthly ? findCost.cost : findCost.cost*10
        }
      })
    }
    if(listNumber === 3){
      setData(prevData => {
        return {
          ...prevData,
          addOnsArray : addOns.filter(item => {
                          return item.isChecked === true
                        }).map(item => {
                          return {...item, cost : isMonthly ? item.cost : item.cost*10}
                        })        
        }
      })
    }
    if(listNumber === 4){
      const add = data.addOnsArray.map(item => {
        return item.cost
      })
      function func() {
        if(data.addOnsArray.length > 0){
            const a = add.reduce((a,b) => a+b)
            return a
        }
            return 0
    }
      const total = data.planCost + func()
      setData(prevData => {
        return {
          ...prevData,
          totalCost : total
        }
      })
    }
  }

  function handleBack(){
    setListNumber(prevListNumber => prevListNumber - 1)
  }

  function handleSwitch(){
    setIsMonthly(prev => !prev)
  }

  function findCurrentPlan(){
    return plan.find(item => {
      return item.name === currentPlanName
    })
  }

  return (
    <div className='hero'>
        <div className='background' style={{backgroundImage:{background}}}>
          <div className='steps'>
            <li id='1' className={listNumber === 1 ? 'active' : ''}>1</li>
            <div className='stepDetails'>
              <span className='stepText'>STEP 1</span>
              <span className='stepInfo'>YOUR INFO</span>
            </div>
          </div>
          <div className='steps'>
            <li id='2' className={listNumber === 2 ? 'active' : ''}>2</li>
            <div className='stepDetails'>
              <span className='stepText'>STEP 2</span>
              <span className='stepInfo'>SELECT PLAN</span>
            </div>
          </div>
          <div className='steps'>
            <li id='3' className={listNumber === 3 ? 'active' : ''}>3</li>
            <div className='stepDetails'>
              <span className='stepText'>STEP 3</span>
              <span className='stepInfo'>ADD-ONS</span>
            </div>          
          </div>
          <div className='steps'>
            <li id='4' className={listNumber === 4 || listNumber === 5 ? 'active' : ''}>4</li>
            <div className='stepDetails'>
              <span className='stepText'>STEP 4</span>
              <span className='stepInfo'>SUMMARY</span>
            </div>
          </div>
        </div>
      <form className='form' id='form' onSubmit={handleSubmit}>
        {listNumber === 1 && <Form1 data={data} handleChange={handleChange}/>}
        {listNumber === 2 && <Form2 plan={plan} currentPlan={findCurrentPlan()} setCurrentPlanName={setCurrentPlanName} isMonthly={isMonthly} handleSwitch={handleSwitch}/>}
        {listNumber === 3 && <Form3 data={data} addOns={addOns} isMonthly={isMonthly} handleCheckbox={handleCheckbox}/>}
        {listNumber === 4 && <Form4 plan={plan} data={data} isMonthly={isMonthly}/>}
        {listNumber === 5 && <ThankYou data={data}/>}
        {listNumber !== 5 ? <button>{listNumber === 4 ? 'Confirm' : 'Next Step'}</button> : ''}
      </form>
      {listNumber !== 5 ? 
        <div className='footer'>
          {listNumber > 1 && <span onClick={handleBack} className='back'>Go Back</span>}
        </div> : ''}
    </div>
  )
}

export default App
