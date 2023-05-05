import React, { useState, useRef, useEffect } from 'react';
import Web3 from 'web3';
import './DApp.css';
import getCompositionContract from './compositionContract';

function DApp() {
  const [compositionId, setCompositionId] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [balance, setBalance] = useState('');

  async function subscribeToCompositionCreatedEvent() {
    try {
      const compositionContract = await getCompositionContract();
  
      compositionContract.events
        .allEvents()
        .on("data", (event) => {
          if (event.event === "CompositionCreated") {
            console.log("CompositionCreated event received:", event);
            console.log("Token ID:", event.returnValues.tokenId);
            console.log("Owner address:", event.returnValues.owner);
            alert("CompositionCreated event received: " + event.toString() + "  " + "Token ID: " + event.returnValues.tokenId.toString() + " " + "Owner address: " + event.returnValues.owner.toString());
          }
        })
        .on("error", (error) => {
          console.error("Error in CompositionCreated event:", error);
        });
    } catch (err) {
      console.error("Error subscribing to CompositionCreated event:", err);
    }
  }
  
  async function createComposition(compositionData) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
  
    try {
      const compositionContract = await getCompositionContract();
  
      const result = await compositionContract.methods.createComposition(
        compositionData
      ).send({ from: account });
  
      console.log('Composition created:', result);
    } catch (err) {
      console.error('Error creating composition:', err);
    }
  }
  
  
  const handleAddressChange = (e) => {
    setUserAddress(e.target.value);
  };

  const fetchBalance = async (web3, address) => {
    try {
      const balanceWei = await web3.eth.getBalance(address);
      const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
      setBalance(balanceEther);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Instantiate Web3 with the provided provider
        const web3 = new Web3(window.ethereum);
  
        // Fetch the connected account
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setUserAddress(account);
  
        // Fetch and display the account balance
        fetchBalance(web3, account);
  
        // Get the composition contract
        const compositionContract = await getCompositionContract(web3);

        // Return the web3 and compositionContract instances
        return { web3, compositionContract };
  
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log("Non-Ethereum browser detected. Please install MetaMask.");
    }
  };
  
const [web3Instance, setWeb3Instance] = useState(null);
const [compositionContractInstance, setCompositionContractInstance] = useState(null);

const handleConnect = async () => {
    const result = await connectWallet();
    if (result) {
      setWeb3Instance(result.web3);
      setCompositionContractInstance(result.compositionContract);
    }
};
  
const compositionInput = useRef();

useEffect(() => {
    if (compositionContractInstance) {
      subscribeToCompositionCreatedEvent();
    }
  }, [compositionContractInstance]);

return (
    <div className="DApp">
      <h2>Mint your string NFT on Sepolia Ethereum network</h2>
      <div className="wallet-connect">
        {/* <input
          type="text"
          placeholder="Enter your wallet address"
          value={userAddress}
          onChange={handleAddressChange}
        /> */}
        <button onClick={handleConnect}>Connect Wallet</button>
        <div className="account-info">
          {userAddress && (
            <>
              <h2>Connected Account</h2>
              <p>Address: {userAddress}</p>
              <p>Balance: {balance} ETH</p>
            </>
          )}
        </div>
      </div>
      <form
        onSubmit={(event) => {
            event.preventDefault();
            createComposition(JSON.stringify(compositionInput.current.value));
          }}          
      >
        <br></br>
        <label htmlFor="composition">Enter composition data:</label>
        <br></br>
        <br></br>
        <input id="composition" type="text" ref={compositionInput} />
        <button id="createcompositionbutton" type="submit">Create Composition</button>
      </form>
      {/* Add more UI components for your DApp here */}
    </div>
  );

}

export default DApp;
