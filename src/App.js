
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Form from './components/form/form';
import Web3 from 'web3';
import { stakingABI, tokenABI } from './utils/contractABI';
import { stakingAddress, tokenAddress } from './utils/contractAddress';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [account,setAccount]=useState(null)
  const [web3,setWeb3]=useState()
  const [section,setSection]=useState(0)
const [stakingInstance,setStake]=useState()
const [tokenInstance,setToken]=useState()
  const connectWallet=async()=>{
    try {
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
    } catch (error) {
      toast.error(error)
    }
     
      } 
  return (
    <>
   
    <div className="App">
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      />
        <Navbar connect={connectWallet} account={account} />
      <Sidebar setSection={setSection} section={section} web3={web3} stake={stakingInstance} account={account} />
      {account ? <>
      <Form token={tokenInstance} stake={stakingInstance} web3={web3} account={account} />
      </> : 
        <div className='connect_app'>
          <h1>Please connect your wallet</h1>
          <button onClick={connectWallet}>Conenct Wallet</button>
          </div>
       }
    </div>
    </>
  );
}

export default App;
