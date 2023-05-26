
export default function Form1(props){
    return (
        <div className='form1'>
            <h1>Personal info</h1>
            <p>Please provide  your name, email, address and phone number.</p>
            <label className='label'>Name<br />
                <input className='inputText' 
                type="text" 
                name='fullName' 
                value={props.data.fullName} 
                onChange={props.handleChange} 
                placeholder='e.g Stephen King' 
                required/>
            </label>
            <label className='label'>Email Address<br />
                <input className='inputText' 
                type="email" 
                name='email' 
                value={props.data.email} 
                onChange={props.handleChange} 
                placeholder='e.g stephenking@gmail.com' 
                required/>
            </label>
            <label className='label'>Phone Number<br />
                <input className='inputText' 
                type="text" 
                name='phone' 
                value={props.data.phone}
                onChange={props.handleChange} 
                placeholder='e.g +1 234 567 890'  
                required/>
            </label>
        </div>
    )
}