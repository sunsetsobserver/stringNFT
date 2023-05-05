import Web3 from 'web3';
import Composition from './Composition.json';

const getCompositionContract = async () => {
    const web3 = new Web3(window.ethereum);
    const { abi, networks } = Composition;
  
    // Log the ABI to debug
    console.log("ABI:", abi);
  
    // Replace this with the address of your deployed smart contract
    const contractAddress = '0x61501eDd17937061eC6897157607A0c135baff54';
  
    const compositionContract = new web3.eth.Contract(abi, contractAddress);
    return compositionContract;
  };
  
  export default getCompositionContract;

