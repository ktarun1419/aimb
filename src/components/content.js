// import React, { useState } from 'react'
// import './content.css'
// import Logo from '../images/logo.png'
// import Wallet from '../images/wallet.png'
// import M_icon from '../images/M_icon.png'
// import Web3 from 'web3'
// import { tokenAddress,stakingAddress } from '../utils/contractAddress'
// import { tokenABI,stakingABI } from '../utils/contractABI'
// const Content = () => {
//     const [account,setAccount]=useState(null)
    
//     let tokenInstance;
//     let stakinginstance;
//     const connectWallet=async()=>{
//         if (window.ethereum) {
//             await window.ethereum.request({method: 'eth_requestAccounts'});
//              let web3 = new Web3(window.ethereum);
//              tokenInstance=new web3.eth.Contract(tokenABI,tokenAddress)
//              stakinginstance=new web3.eth.Contract(stakingABI,stakingAddress)
//             //  stakinginstance.methods
//            web3.eth.getAccounts().then((res)=>{
//             setAccount(res[0])
            
//            })
//             return true;
//           }
//           return false;
//         } 
// const getData=()=>{
   
// }
//   return (
//     <>
//      <div class="navbar">
//         <img src={Logo} alt="error" style={{height: '100px',marginLeft: '10px'}} />
//         <div class="navbar_btns">
//             <div class="icon_btn" id="first_nav_btn">
//                 <img src={M_icon} alt="error" />
//                 <span>00.00 DALLE2</span>
//             </div>
            
//             <div class="icon_btn" onClick={connectWallet}>
//                 <img src={Wallet} alt="error" />
//                 <span>{account? `${String(account).slice(0,4)}...${String(account).slice(38,42)}` : 'Connect'}</span>
//             </div>
//         </div>
//     </div>
//     <div class="main_section h1">
//         <div class="end_box">
//             <div class="ai_box">
//                 <img src="../images/ai_image.png" alt="error" />
//                 <span>Powered Staking Protocol</span>
//             </div>

//         </div>
//         <div class="stake_info_container">
//             <div style={{display:'flex',gap:'10px'}}>
//                 <span class="highlight">Earn 0.5% / Day</span>
//                 <span>Stake Your DALLE2 Tokens to earn 183% APY</span>
//             </div>
//             <div style={{display:'flex',gap:'10px'}}>
//                 <div class="info_btn">
//                     <span>Minimum Stake Days</span>
//                     <span class="highlight">30</span>
//                 </div>
//                 <div class="info_btn">
//                     <span>Total Awards Earned</span>
//                     <span class="highlight">00 DALLE2</span>
//                 </div>
//             </div>
//         </div>
//         <div class="affiliate_adress_container">
//             <span class="highlight">Affliate Address : </span>
//             <span>http://127.0.0.1:5500/index.html?ref=0x0000000000000000000000000000000000000000</span>
//             <a href="http://127.0.0.1:5500/index.html?ref=0x0000000000000000000000000000000000000000">
//                 <img src="/images/link.png" alt="error" class="token_icon" />
//             </a>
//         </div>
//         <div class="token_card_main_container">
//             <div class="token_card_1 token_card">
//                 <div class="end_box">
//                     <div class="stock_icon">
//                         <img src="/images/A_icon.png" alt="error" class="token_icon" />
//                         <span>Arbitrum</span>
//                     </div>
//                 </div>
//                 <div class="token_main_container">
//                     <div class="token_container">
//                         <span><b>Auradx Tokens</b></span>
//                         <div class="token_item">
//                             <div class="token_list_item_border"></div>
//                             <div class="token_info">
//                                 <img src="/images/M_icon.png" alt="error" class="token_icon" />
//                                 <span class="highlight">0</span>
//                                 <span>DallE2</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="token_container">
//                         <span><b>DallE2F Tokens</b></span>
//                         <div class="token_item">
//                             <div class="token_list_item_border"></div>
//                             <div class="token_info">
//                                 <img src="/images/M_icon.png" alt="error" class="token_icon" />
//                                 <span class="highlight">0</span>
//                                 <span>DallE2</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="token_container">
//                         <span><b>ETH Tokens</b></span>
//                         <div class="token_item">
//                             <div class="token_list_item_border"></div>
//                             <div class="token_info">
//                                 <img src="/images/M_icon.png" alt="error" class="token_icon" />
//                                 <span class="highlight">0</span>
//                                 <span>ETH</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="token_card_2 token_card">
//                 <div class="tabs_container">
//                     <div data_id="stake" class="token_tab active_tab" onclick="tab_switch(this)">Stake</div>
//                     <div data_id="unstake" class="token_tab" onclick="tab_switch(this)">Unstake</div>
//                     <div data_id="Withdrawl" class="token_tab" onclick="tab_switch(this)">Withdrawl</div>
//                 </div>
//                 {/* <!-- Tab 1 --> */}
//                 <div class="tab_content_box active_tab_content" id="stake">
//                     <div class="input_container">
//                         <input id="stake_amount" type="text" placeholder="0.00" autocomplete="off" />
//                         <div id="stake_amount_submit" class="input_submit" title="submit" >
//                             <img src="/images/M_icon.png" alt="error" class="token_icon" />
//                         </div>
//                     </div>
//                     <div class="days_container">
//                         <span>30 Days</span>
//                         <div style={{height:'100%',border:' 1px solid white'}}></div>
//                         <span>90 Days</span>
//                         <div style={{height:'100%',border:' 1px solid white'}}></div>
//                         <span>365 Days</span>
//                     </div>
//                     <div class="end_box">
//                         <div id="stake_now_btn" class="token_btn h2">STAKE NOW</div>
//                     </div>
//                     <div class="info_container h2">
//                         <div class="info_item">
//                             <span>Lockup Period</span>
//                             <span>30 Days</span>
//                         </div>
//                         <div class="info_item">
//                             <span>Est . Transaction Fee</span>
//                             <span>$1.00</span>
//                         </div>
//                         <div class="info_item">
//                             <span>UnStaking Fee</span>
//                             <span>10%</span>
//                         </div>
//                     </div>
//                 </div>
               
//                 <div class="tab_content_box" id="unstake">
//                     <div class="info_container">
//                         <div class="info_item">
//                             <span>Start Time:</span>
//                             <span class="highlight">-</span>
//                         </div>
//                         <div class="info_item">
//                             <span>Staked Amount:</span>
//                             <span class="highlight">0</span>
//                         </div>
//                         <div class="info_item">
//                             <span>Rewards:</span>
//                             <span class="highlight">0</span>
//                         </div>
//                     </div>
//                     <div id="unstake_btn" class="token_btn h2">UNSTAKE</div>
//                 </div>
               
//                 <div class="tab_content_box" id="Withdrawl">
//                     <div class="info_container">
//                         <div class="info_item">
//                             <span>Rewards:</span>
//                             <span class="highlight">0</span>
//                         </div>
//                     </div>
//                     <div id="unstake_btn" class="token_btn h2">WITHDRAW</div>
//                 </div>
//             </div>

//             <div class="token_card_3_4_container">
//                 <div class="token_card_3 token_card">
//                     <div class="token_card_3_content">
//                         <div class="end_box">
//                             <div class="stock_icon">
//                                 <img src="/images/A_icon.png" alt="error" class="token_icon" />
//                                 <span>Arbitrum</span>
//                             </div>
//                         </div>
//                         <div class="fs_one_token">
//                             <span>Staked DallE2 Tokens</span>
//                             <div class="token_info">
//                                 <span class="highlight">00.00</span>
//                                 <img src="/images/M_icon.png" alt="error" class="token_icon" />
//                             </div>
//                         </div>
//                         <div class="fs_one_token">
//                             <span>Rewards Earned</span>
//                             <div class="token_info">
//                                 <span class="highlight">00.00</span>
//                                 <img src="/images/M_icon.png" alt="error" class="token_icon" />
//                             </div>
//                         </div>
//                         <div class="end_box">
//                             <div id="claim_btn" class="token_btn h2">CLAIM</div>
//                         </div>
//                         <div class="end_box">
//                             <span class="h2">Withdrawl / Unstake Fee - 10%</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="token_card_4 token_card">
//                     <div class="affiliate_info_main_container">
//                         <div class="affiliate_container">
//                             <span>Total Affiliate Earned</span>
//                             <span class="highlight">0</span>
//                         </div>
//                         <div class="affiliate_container">
//                             <span>Total Affiliate Rewards</span>
//                             <span class="highlight">-15%</span>
//                         </div>
//                         <div class="affiliate_container">
//                             <span>Direct Affiliate (L1)</span>
//                             <span class="highlight">-5%</span>
//                         </div>

//                         <div class="affiliate_sub_container h2">
//                             <div class="affiliate_container">
//                                 <span>Affiliate Level 2</span>
//                                 <span class="highlight">-4%</span>
//                             </div>
//                             <div class="affiliate_container">
//                                 <span>Affiliate Level 3</span>
//                                 <span class="highlight">-3%</span>
//                             </div>
//                             <div class="affiliate_container">
//                                 <span>Affiliate Level 4</span>
//                                 <span class="highlight">-2%</span>
//                             </div>
//                             <div class="affiliate_container">
//                                 <span>Affiliate Level 5</span>
//                                 <span class="highlight">-1%</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Content