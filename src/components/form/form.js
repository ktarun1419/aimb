import React, { useEffect, useState } from 'react'
import './form.css'
import BuySection from './BuySection'
import Faqs from '../faqs/faqs'
import Ai from '../../images/ai_image.png'
const Form = ({web3,token,stake ,account}) => {
    const [balance,setBalance]=useState(0)
    useEffect(()=>{
        if (token && account) {
           token.methods.balanceOf(account).call().then((res)=>{
            console.log({res});
            // setBalance((res))
            stake.methods.users(account).call().then((data)=>{
                let obj={
                    Deposit_Amount:Number(data['depositAmount'])/10**18,
                    Total_Earnings:data['totalEarnings'],
                    Referal_Earnings:data['directReferralEarnings'],
                }
                // console.log({data});

                setStakeData(obj)
            })
           }) 
        }
    },[account, token])
    const [stakeData,setStakeData]=useState({})
  const infoContainer=[{
    title:'Minimum Token',
    value:'200',
  },
  {
    title:'Balance',
    value:balance,
  },
  {
    title:'Current Price',
    value:'$0.5',
  },
  // {
  //   title:'',
  //   value:'',
  // }
]
const infoContainer2=[
    {
        title:'365 Days Plan',
        value:'1%',
      },
      {
        title:'730 Days Plan',
        value:'1.5%',
      },
      {
        title:'1895 Days Plan',
        value:'2%',
      },
    {
        title:'Direct Referal Return',
        value:'5%',
      },
      {
        title:'Early Unstake',
        value:'25% Penalty',
      },
      {
        title:'Withdrawl Fee',
        value:'5%',
      },
      {
        title:'Level 1 Return',
        value:'15%',
      },
      {
        title:'Level 2 Return',
        value:'15%',
      },
      {
        title:'Level 3 Return',
        value:'15%',
      },
      {
        title:'Max Cap',
        value:'300%',
      },
      {
        title:'Minimum Amount',
        value:'$100',
      },
     
]
  return (
    <div className='form'>
      <div className='form_container'>
      <div className='info_container'>
        {console.log({balance,stakeData})}
        {Array.isArray(infoContainer) && infoContainer?.map((item)=>(  <div className='each'>
          <div className='child_1' style={{color:'white'}}>
            {item?.title}
          </div>
          <div className='child_2'>
           {item?.value}
          </div>
        </div>))}
      </div>
      <div className='info_container'>
        {console.log({balance,stakeData})}
        {Object.keys(stakeData)  && Object.keys(stakeData)?.map((item)=>(  <div className='each'>
          <div className='child_1' style={{color:'white'}}>
            {String(item).replace("_",' ')}
          </div>
          <div className='child_2'>
           {Number(stakeData[item])}
          </div>
        </div>))}
      </div>
      <BuySection web3={web3} stake={stake} account={account} token={token} balance={balance} />
      <div className='info_container'>
        <div className='each'>
        <div className='child_1' style={{color:'white'}}>
            About AIMB
          </div>
        </div>
        <div className='each'>
          <div className='child_2' >
          Mining AI Block is at the forefront of the blockchain revolution, leveraging the power of artificial intelligence to redefine the landscape of cryptocurrency mining. In an era where energy efficiency, scalability, and sustainability are paramount, Mining AI Block combines cutting-edge technology with eco-conscious practices to deliver a mining experience that's not only lucrative but also environmentally responsible. Join us as we embark on a journey to reshape the future of crypto mining through innovation, efficiency, and sustainability.
          </div>
        </div>
        {/* {Array.isArray(infoContainer) && infoContainer?.map((item)=>(  <div className='each'>
          <div className='child_1' style={{color:'white'}}>
            {item?.title}
          </div>
          <div className='child_2'>
           {item?.value}
          </div>
        </div>))} */}
      </div>

      </div>
      
     <div className='faq'>
     <div className='info_container'>
        {Array.isArray(infoContainer2) && infoContainer2?.map((item)=>(  <div className='each'>
          <div className='child_1' style={{color:'white'}}>
            {item?.title}
          </div>
          <div className='child_2'>
           {item?.value}
          </div>
        </div>))}
      </div>
     {/* {Array.isArray(infoContainer) && infoContainer?.map((item)=>(  <div className='each'>
          <div className='child_1' style={{color:'white'}}>
            {item?.title}
          </div>
          <div className='child_2'>
           {item?.value}
          </div>
        </div>))} */}
     </div>
     
    </div>
  )
}

export default Form