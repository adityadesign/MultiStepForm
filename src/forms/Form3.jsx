export default function Form3(props){
    return (
        <div className="form3">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            {props.addOns.map((item, index) =>{
                return (
                    <label key={index} className="addOns">
                        <input type="checkbox" 
                        checked={item.isChecked}
                        onChange={() => props.handleCheckbox(item.id)}/>
                        <div>
                            <div className="addOnsLabel">{item.name}</div>
                            <p id="addOnsDesc">{item.description}</p>
                        </div>
                        {props.isMonthly ?  
                            <span className="addOnsCost">+${item.cost}/mo</span> :  
                            <span className="addOnsCost">+${item.cost*10}/yr</span>}
                    </label>
                )
            })}
        </div>
    )
}