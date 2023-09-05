
import React from "react";
import "./sidebar.css";
// import Roadmap from "../../assets/roadmap.png";
// import Token from "../../assets/tokonomics.png";
// import Feature from "../../assets/features.png";
// import ROcket from '../../assets/rocket.png'
import Cicaa from '../../assets/logo.jpeg'
import { stakingAddress } from "../../utils/contractAddress";
import {  toast } from 'react-toastify';
import Img2 from '../../assets/img2.jpeg'
  
const Sidebar = ({stake,account , web3}) => {

  const withdraw=()=>{
    let tx={
        from:account,
        to:stakingAddress,
        data:stake.methods.withdraw().encodeABI()
    }
    web3.eth.sendTransaction(tx).then((res)=>{
        console.log({res});
    }).catch((e)=>{
        toast.error(e.message)
    })

  }
  const earlyUnstake=()=>{
    let tx={
        from:account,
        to:stakingAddress,
        data:stake.methods.earlyUnstake().encodeABI()
    }
    web3.eth.sendTransaction(tx).then((res)=>{
        console.log({res});
    }).catch((e)=>{
        toast.error(e.message)
    })
  }
  const claimDailyReward=()=>{
    toast.error('Rewards will be availbale after every 24 hours')
  }
  const sidebar = [
    {
    //   icon: Roadmap,
      title: "Stake",
      call:function(){}
    },
    {
    //   icon: Token,
      title: "Withdraw",
      call:withdraw
    },
    {
    //   icon: Feature,
      title: "Early Unstake",
      call:earlyUnstake
    },
    {
        //   icon: Feature,
          title: "Claim Daily Rewards",
          call:claimDailyReward
        },
  ];
  const redirect = () => {
    // let a = document.createElement("a");
    // a.target = "_blank";
    // a.href = "https://cicca.io";
    // a.click();
    // a.remove();
  };
  
  return (
    <div className="sidebar">
     <div className='logo_container' onClick={redirect} >
        <img className='logo' src={Cicaa}  alt='logo'  />
        <h1>Stake</h1>
      </div>
      {Array.isArray(sidebar) &&
        sidebar.map((item) => (
          <div className="sidebar_each" onClick={item?.call}>
            {/* <img src={item?.icon} alt={item?.title} /> */}
            <h2>{item?.title}</h2>
          </div>
        ))}

        <div className="rocket">

          <img src={Img2} />
          <p>
            Update New Feature
          </p>
          <button onClick={redirect}>
            Coming Soon ..
          </button>
        </div>
    </div>
  );
};

export default Sidebar;
