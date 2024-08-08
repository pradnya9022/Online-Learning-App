import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import HomeSchema from './Model/Home.js';
import Signup from './Model/Sign.js';
import Course from './Model/Admin.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

const Database =async()=>{
    await mongoose.connect("mongodb+srv://kamblepradnya:pradnya123@cluster0.sm9rokz.mongodb.net/Online-Learning")
    console.log("DATABASE CONNECTED")
    }
Database();


app.get('/' , async(req , res)=>{
    res.send("Server is Working")
})

app.listen(port , ()=>{
    console.log(`Server is running on ${port}`)
})


// HomeSchema
app.post('/StdSay' , async(req , res)=>{

    try{
        const { content , Name , role}=req.body;
        // const {id}=req.params

        const StdSay = await HomeSchema.create({
                // id : id,
                // img : img,
                content : content,
                Name : Name,
                role : role
        })

        res.json({
            Success :true,
            Say : StdSay,
            msg : `${StdSay} is successfully`
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.put('/Std', async(req ,res)=>{
    // const {_id}=req.params;
    const {content , Name , role} = req.body; 
    const db = await Note.updateOne({_id:_id } , {$set: {content : content , Name : Name , role : role }})
    res.json({
        data : db,
        msg : `Notes are fetched successfully by title ${Name}`
    })
})


app.get('/StdSays' , async(req, res)=>{
    try{
        const {Name}=req.body;
        const Allinfo = await HomeSchema.find({Name:Name} )
        res.json({
            Success : true,
            data : Allinfo,
            msg : `${Name} is show successfully`
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.get('/alldata' , async(req, res)=>{
    try{
        const info = await HomeSchema.find( )
        res.json({
            Success : true,
            data : info,
            msg : ` is show successfully`
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})


//Signup 
app.post('/signup' , async(req , res)=>{
    try{
    const {Fname , Lname , address , username , Email , password}= req.body;
    const postdata = await Signup.create({
        "Fname":Fname,
        "Lname":Lname,
        "address":address,
      "username":username,
      "Email":Email,
      "password":password
    })

    res.json({
        Success:true,
        data:postdata,
        msg:"You are Signup Successfully"
    })
}catch(error){
res.json({
    Success:false,
    msg:error.msg
     // console.log(error)
})

}
})

// userdata

app.get('/userdata' ,async (req , res)=>{
    try{

    const alldata = await Signup.find()
    res.json({
        Success:true,
        data:alldata,
        msg:"All Signup Members data stored here"
    })
}catch(error){
    res.json({
        Success:false,
        msg:error.msg
         // console.log(error)
    })
}
})


app.delete('/userdata/:_id', async (req, res) => {

    try {
        const {username}= req.body;
        const { _id } = req.params;
        const deluser = await Signup.deleteOne({ _id: _id });
        res.json({
            Success: true,
            _id: _id,
            data: deluser,
            msg: `${username}User data deleted sucessfully `
        })

    } catch (error) {
        console.log(error)
    }
})

// Login

app.post('/login' , async(req , res)=>{
    const {Email , password} = req.body; 
    
    
    const logindata = await Signup.findOne({
        Email:Email ,
        password:password
    })
    if(logindata){
      
        res.json({
            Success:true,
          msg:"Login succesfully"
       }); 
      }


      else{
        res.json({
           Success:false,
           msg:"You didn't have an account"
       });
      }
})


//Course
app.post('/Course' , async(req , res)=>{

    try{
        const { video , coursename , author}=req.body;
        // const {id}=req.params

        const Coursedata = await Course.create({
                // id : id,
                // img : img,
                "video" : video,
                "coursename" : coursename,
                "author" : author
        })

        res.json({
            Success :true,
            Say : Coursedata,
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.put('/AdminEdit/:_id', async(req ,res)=>{
    const {_id}=req.params;
    const {coursename , author} = req.body; 
    const coursedb = await Course.updateOne({_id:_id } , {$set: { coursename : coursename , author : author }})
    res.json({
        data : coursedb,
        msg : `Notes are fetched successfully by title ${coursename}`
    })
})

app.delete('/AdminDtl/:_id', async(req , res)=>{
    const {_id} = req.params;
    const note = await Course.deleteOne({_id:_id})

    res.json({
        Success : true,
        id : _id,
        data : note,
        msg : `Notes are deleted successfully by id ${_id}`
    })
})


app.get('/Courses' , async(req, res)=>{
    try{
        // const {coursename}=req.body;
        const courseinfo = await Course.find()
        res.json({
            Success : true,
            data : courseinfo,
            msg : `${coursename} is show successfully`
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.get('/coursedata' , async(req, res)=>{
    try{
        const info = await Course.find( )
        res.json({
            Success : true,
            data : info,
            msg : `data is show successfully`
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})