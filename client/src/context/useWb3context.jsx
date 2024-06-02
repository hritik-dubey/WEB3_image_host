import {web3Context} from "./createWb3context.jsx";
import {useContext} from 'react'

export const useWb3context = () => {
    return useContext(web3Context)
}
