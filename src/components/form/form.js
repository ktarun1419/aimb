import React, { useEffect, useState } from 'react'
import './form.css'
import BuySection from './BuySection'
import Faqs from '../faqs/faqs'
const Form = ({web3,token,stake ,account}) => {
    const [balance,setBalance]=useState(0)
    useEffect(()=>{
        if (token && account) {
           token.methods.balanceOf(account).call().then((res)=>{
            console.log({res});
            // setBalance((res))
           }) 
        }
    },[account, token])
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
        {console.log({balance})}
        {Array.isArray(infoContainer) && infoContainer?.map((item)=>(  <div className='each'>
          <div className='child_1' style={{color:'white'}}>
            {item?.title}
          </div>
          <div className='child_2'>
           {item?.value}
          </div>
        </div>))}
      </div>
      <BuySection web3={web3} stake={stake} account={account} token={token} balance={balance} />
      <div className='info_container'>
        <div className='each'>
        <div className='child_1' style={{color:'white'}}>
            About CICCA
          </div>
        </div>
        <div className='each'>
          <div className='child_2' >
          CiccaDeFi ($CICCA) is an innovative and community-driven cryptocurrency token that aims to provide passive earning opportunities and foster an engaged community. With its unique hold-to-earn mechanism, $CICCA token holders have the potential to earn rewards on every transaction. Specifically, 1% of each transaction is distributed proportionally among existing token holders, allowing them to passively earn income simply by holding $CICCA tokens in their wallets. In addition to the distribution to token holders, 1% of each transaction is directed to an auto liquidity pool, enhancing the token's liquidity, while another 1% is allocated to a staking pool, encouraging further participation and rewarding token holders who actively stake their tokens.
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