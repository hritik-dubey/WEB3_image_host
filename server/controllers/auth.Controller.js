const ethers  =  require('ethers')
const jwt = require('jsonwebtoken')
const {JWT_SECRETKEY} = require('../config/config')
const UserModel =  require('../models/user.model')

async function authController(req,res,next){
    try {
        const {signature}=req.body;
        const {address}=req.query;

        if(!signature){
            throw new Error("Signature is invalid")
        }
        const recoveredAddress = ethers.utils.verifyMessage("Welcome to hritik's Crypto Vault Website",signature)
        if(address.toLowerCase()===recoveredAddress.toLowerCase()){
            const address = recoveredAddress.toLowerCase();
            const token = jwt.sign({
                address
            },JWT_SECRETKEY)
            const user = await UserModel.findOne({userAddress:address})
            if(!user){
                const userData = await UserModel.create({userAddress:address})
                console.log(userData)
            }
            res.status(200).json({message:"Authentication Succesfull",token})
        }else{
            res.status(400).json({message:"Authentication Failed"})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }

}
module.exports={authController}