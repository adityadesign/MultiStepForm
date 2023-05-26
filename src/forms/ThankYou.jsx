import ThankyouImg from '../assets/images/icon-thank-you.svg'

export default function ThankYou(props){
    console.log(props.data)
    return(
        <div className='thankyou'>
            <img src={ThankyouImg} alt="" />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription!</p>
            <p id='p2'>We hope you have fun using our platform. If you ever need support, feel free to email us at</p>
            <p>support@loremgaming.com</p>
        </div>
    )
}