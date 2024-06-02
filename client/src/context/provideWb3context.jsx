import {web3Context} from "./createWb3context.jsx";
import {useState} from "react";

export const Web3Provider = ({children}) =>{
    const  [web3State,setWeb3State] = useState({
        contractInstance:null,
        selectedAccount:null,
    })
    const updateWeb3State = (newState) =>{
        setWeb3State(prevState=>({
            ...prevState,
            ...newState
        }))
    }
    return(
        <web3Context.Provider value={{web3State, updateWeb3State}}>
            {children}
        </web3Context.Provider>
    )
}
