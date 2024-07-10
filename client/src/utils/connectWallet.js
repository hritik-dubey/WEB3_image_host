import {ethers} from 'ethers'
import contractAbi from "../constants/contractAbi.json"
import {toast} from 'react-hot-toast'
import axios from 'axios'

export const connetWallet = async () => {
    try {
        if (!window.ethereum) {
            throw new Error("Metamask is not installed")
        }
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })
        const selectedAccount = accounts[0];
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const message = "Welcome to hritik's Crypto Vault Website";
        const signature = await signer.signMessage(message)

        const dataSignature = {
            signature
        }
        const url = `https://web3-image-host.onrender.com/api/authentication?address=${selectedAccount}`
        const res = await axios.post(url, dataSignature);
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log(token);
        const contractAddress = "0xa76Ac8DFf0C04963E7Da61CA8f7875371c"
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
        return {contractInstance, selectedAccount}
    } catch (error) {
        toast.error("Something went wrong in contract")
        console.log(error.message)
    }
}
