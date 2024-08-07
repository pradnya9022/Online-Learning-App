import { User } from "../Model/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const register = async(req , res)=>{
    try {
       const {email,name,password}=req.body

       let user = await User.findOne({ email })

       if(user)
        return res.status(400).json({
           message : "User already exists"
    })

    const hashPassword = await bcrypt.hash(password , 10)

    user ={
        name ,
        email ,
         password :hashPassword

    }

    const otp = Math.floor(Math.random() * 1000000);

    const activationToken =jwt.sign({
        user,
        otp
    } , process.env.Activation_Secret,
    {
        expiresIn: "5m"
    }
     );

     const data ={
        name ,
        otp 
     }


    } catch(error){
        res.status(500).json({
            message : error.message
        });
    }
};