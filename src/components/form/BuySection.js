import React, { useState } from "react";
import './BuySection.css'
import Arrow from '../../assets/arrow.png'
import Telegram from '../../assets/telegram.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import { stakingAddress, tokenAddress } from "../../utils/contractAddress";
import Ai from '../../images/ai_image.png'
const BuySection = ({web3,token,stake ,account,balance}) => {
    const [plan,setPlan]=useState(1)
    const [amount,setAmount]=useState('')
    const [referal,setRefral]=useState('')
    const approve=async()=>{
        let value=false
        let tx={
            from:account,
            to:tokenAddress,
            data:token.methods.approve(stakingAddress,String(amount*10**18)).encodeABI()
        }
       await web3.eth.sendTransaction(tx).then((res)=>{
            console.log({res});
            value=true
        }).catch((err)=>{
            console.log(err);
        })
        return value
    }
    const checkApproval=()=>{
        let value=false
        token.methods.allowance(account,stakingAddress).call().then((res)=>{
            console.log(res);
            if (res>amount) {
                value=true
            }
        })
        return value
    }
  const stakeTokens=async()=>{
    if (amount<200) {
        alert('Amount Must Be greater that 200')
        return
    }
    if (!referal) {
        alert('Please enter referal address')
        return
    }
    let apprval=await checkApproval()
  
    let tx={
        from:account,
        to:stakingAddress,
        data:stake.methods.deposit(account,plan,referal,String(amount*10**18)).encodeABI()
    }
    if (!apprval) {
     let approvedAmount=  await approve()
     if (!approvedAmount) {
        return
     }
    } 

    web3.eth.sendTransaction(tx).then((res)=>{
        console.log({res});
    })
  }
  const socialIcons=[
    {
      link:'https://t.me/CiccaOfficial',
      logo:Telegram,
      name:'telegram',
    },
    {
      link:'https://www.instagram.com/ciccadefi',
      name:'instagram',
      logo:Instagram
    },
    {
      link:'https://twitter.com/CiccaDefi',
      name:'twitter',
      logo:Twitter
    },

  ]
  const handleChange=(e)=>{
    const {value}=e.target;
    if (isNaN(value)) {
        return
    }
    setAmount(value)
  }
  return (
    <div class="buy_section" id="buy_section">
      <div class="card_container">
      <div className="social_buy">
        {Array.isArray(socialIcons) && socialIcons.map((item)=>(<a href={item?.link} target='_blank'>
          <img  alt={item?.name} src={item?.logo}/>
        </a>))}
        </div>
        <span style={{fontSize:'18px', fontWeight:'bold',color:'#ffff'}}>
            <img src={Ai} className="logo" />
          STAGE SELLING FAST
        </span>
        <div class="currency_container">
          <button class="currency_item" id="bnb" onClick={()=>setPlan(1)} style={plan===1 ? {border:'1px solid #5D92FC'} :null}>
           
            <span>365 Days</span>
            
          </button>
          <button class="currency_item" id="bnb" onClick={()=>setPlan(2)} style={plan===2 ? {border:'1px solid #5D92FC'} :null}>
           
           <span>730 Days</span>
           
         </button>
         <button class="currency_item" id="bnb" onClick={()=>setPlan(3)} style={plan===3 ? {border:'1px solid #5D92FC'} :null}>
           
           <span>1825 Days</span>
           
         </button>
        </div>
        <div class="price_container">
          <span id="current_price">
            Balance : <b style={{color:'#5BD3EA'}}>{balance}</b>
          </span>
          <span id="next_price"></span>
        </div>
        {/* <h4>Token Sold</h4> */}
        <div className="container">
        <div className="skill html">80%</div>
    </div>
        <div class="amount_main_container">
          <div class="amount_container">
            <label for="amount_paid">Stake Amount</label>
            <input
            onChange={handleChange}
              class="input"
             value={amount}
              
              placeholder="Enter Amount"
            />
          </div>
          {/* <div className="down_arrow">
            <img src={Arrow} alt="arrow" />
          </div> */}
          <div class="amount_container">
            <label for="referal">Referal Address</label>
            <input
            value={referal}
            onChange={(e)=>setRefral(e.target.value)}
              class="input"
             
              id="amount_received"
              placeholder="Enter Address"
            />
          </div>
        </div>
        {/* <div class="amount_main_container">
          <div class="amount_container">
            <label for="amount_paid">Referal Code</label>
            <input
              class="input"
              type="text"
              id="referal"
              placeholder="Referal Code"
            />
          </div>
        </div> */}
        <button class="card_btn" id="buy_now_btn" onClick={stakeTokens}>
          Stake Now
        </button>
       
      </div>
    </div>
  );
};

export default BuySection;
