import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Form from './components/form/form';
import Web3 from 'web3';
import { stakingABI, tokenABI } from './utils/contractABI';
import { stakingAddress, tokenAddress } from './utils/contractAddress';
import { useState } from 'react';
function App() {
  const [account,setAccount]=useState(null)
  const [web3,setWeb3]=useState()
    
const [stakingInstance,setStake]=useState()
const [tokenInstance,setToken]=useState()
  const connectWallet=async()=>{
      if (window.ethereum) {
          await window.ethereum.request({method: 'eth_requestAccounts'});
           let web_3 = new Web3(window.ethereum);
           setWeb3(web_3)
           let token_Instance=new web_3.eth.Contract(tokenABI,tokenAddress)
            let staking_instance=new web_3.eth.Contract(stakingABI,stakingAddress)
            setToken(token_Instance)
            setStake(staking_instance)
          //  stakinginstance.methods
         web_3.eth.getAccounts().then((res)=>{
          setAccount(res[0])
          
         })
          return true;
        }
        return false;
      } 
  return (
    <>
   
    <div className="App">
      <Navbar connect={connectWallet} account={account} />
      <Sidebar />
      <Form token={tokenInstance} stake={stakingInstance} web3={web3} account={account} />
      {/* <div className='bg'></div> */}
      {/* <Content /> */}
    </div>
    </>
  );
}

export default App;
