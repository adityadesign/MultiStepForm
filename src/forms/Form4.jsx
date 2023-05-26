export default function Form4(props){
    const add = props.data.addOnsArray.map(item => {
        return item.cost
    })

    function func() {
        if(props.data.addOnsArray.length > 0){
            const a = add.reduce((a,b) => a+b)
            return a
        }
            return 0
    }
    const total = props.data.planCost + func()
    return (
        <div className="form4">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="payment"> 
                <div className="planPayment">
                    <div className="planPaymentDesc">
                        <h3>{props.data.selectedPlan} ({props.data.planDetails})</h3>
                        <p>Change</p>
                    </div>
                    <span>${props.data.planCost}/{props.isMonthly ? 'mo' : 'yr'}</span>
                </div>
                <hr />
                {props.data.addOnsArray.map((item, index)=> {
                    return (
                        <div key={index} className="addOnsPayment">
                            <p>{item.name}</p>
                            <span>+${props.isMonthly ? `${item.cost}/mo` : `${item.cost}/yr`}</span>
                        </div>
                    )
                })}
            </div>
            <div className="totalPayment">
                <p>Total (per {props.isMonthly ? 'month' : 'year'})</p> 
                <span>+${total}/{props.isMonthly ? 'mo' : 'yr'}</span>
            </div>
        </div>
    )
}