import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import HomeSchema from './Model/Home.js';
import Signup from './Model/Sign.js';
import Course from './Model/Admin.js';
import HomeCard from './Model/HomeCard.js';
import md5 from 'md5';
import ReactSchema from './Model/React.js'
import HomeCard2 from './Model/HomeCard2.js';
import ReactSchema2 from './Model/React2.js';
import HomeCard3 from './Model/HomeCard3.js';
import ReactSchema3 from './Model/React3.js';

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
      "password":md5 (password)
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
        password: md5(password)
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

//HomeCard
app.post('/HomeCard' , async(req , res)=>{

    try{
        const {img , title , para , rs , img2 , title2 , para2 , rs2}=req.body;
        // const {id}=req.params

        const Coursedata = await HomeCard.create({
                // id : id,
                "img" : img,
                "title" : title,
                "para" : para,
                "rs" : rs,
                "img2" : img2,
                "title2" : title2,
                "para2" : para2,
                "rs2" : rs2
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

app.put('/HomeCardEdt/:_id', async(req ,res)=>{
    const {_id}=req.params;
    const {img ,title , para , rs , img2 , title2 , para2 , rs2} = req.body; 
    const coursedb = await HomeCard.updateOne({_id:_id } , {$set: {img : img , title : title , para : para , rs : rs ,img2 : img2 , title2 : title2 , para2 : para2 , rs2 : rs2}})
    res.json({
        data : coursedb,
        msg : `Data are fetched successfully by title ${title}`
    })
})

app.delete('/HomeCardDlt/:_id', async(req , res)=>{
    const {_id} = req.params;
    const note = await HomeCard.deleteOne({_id:_id})

    res.json({
        Success : true,
        id : _id,
        data : note,
        msg : `Notes are deleted successfully by id ${_id}`
    })
})

app.get('/HomeCard' , async(req, res)=>{
    try{
        // const {coursename}=req.body;
        const courseinfo = await HomeCard.find()
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

app.get('/HomeCards' , async(req, res)=>{
    try{
        const info = await HomeCard.find( )
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

//ReactSchema
app.post('/React' , async(req , res)=>{
    try{
        const {video , head ,video2 , head2}=req.body;
        // const {id}=req.params

        const Reactdata = await ReactSchema.create({
                // id : id,
                "video" : video,
                "head" : head ,
                "video2" : video2,
                "head2" : head2     
        })

        res.json({
            Success :true,
            Say : Reactdata,
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.put('/React/:_id', async(req ,res)=>{
    const {_id}=req.params;
    const {video ,head ,video2 , head2 } = req.body; 
    const Reactdb = await ReactSchema.updateOne({_id:_id } , {$set: {video : video , head2 : head2 , video2 , head2}})
    res.json({
        data : Reactdb,
        msg : `Notes are fetched successfully by title ${head}`
    })
})

app.delete('/ReactDlt/:_id', async(req , res)=>{
    const {_id} = req.params;
    const Reactin = await ReactSchema.deleteOne({_id:_id})

    res.json({
        Success : true,
        id : _id,
        data : Reactin,
        msg : `Notes are deleted successfully by id ${_id}`
    })
})

app.get('/getreactdata' , async(req, res)=>{
    try{
        // const {coursename}=req.body;
        const Reactinfo = await ReactSchema.find()
        res.json({
            Success : true,
            data : Reactinfo,
            msg : `${Reactinfo} is show successfully`
        })
    
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.get('/Reacts' , async(req, res)=>{
    try{
        const infoRe = await ReactSchema.find( )
        res.json({
            Success : true,
            data : infoRe,
            msg : `data is show successfully`
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

//HomeCard2
app.post('/HomeCard2' , async(req , res)=>{

    try{
        const {img2 , title2 , para2 , rs2}=req.body;
        // const {id}=req.params

        const Coursedata = await HomeCard2.create({
                // id : id,
                "img2" : img2,
                "title2" : title2,
                "para2" : para2,
                "rs2" : rs2
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

app.put('/HomeCardEdt2/:_id', async(req ,res)=>{
    const {_id}=req.params;
    const {img2 , title2 , para2 , rs2} = req.body; 
    const coursedb = await HomeCard2.updateOne({_id:_id } , {$set: {img2 : img2 , title2 : title2 , para2 : para2 , rs2 : rs2}})
    res.json({
        data : coursedb,
        msg : `Data are fetched successfully by title ${title2}`
    })
})

app.delete('/HomeCardDlt2/:_id', async(req , res)=>{
    const {_id} = req.params;
    const note = await HomeCard2.deleteOne({_id:_id})

    res.json({
        Success : true,
        id : _id,
        data : note,
        msg : `Notes are deleted successfully by id ${_id}`
    })
})

app.get('/HomeCard2' , async(req, res)=>{
    try{
        // const {coursename}=req.body;
        const courseinfo = await HomeCard2.find()
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

app.get('/HomeCards2' , async(req, res)=>{
    try{
        const info = await HomeCard2.find( )
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

//ReactSchema2
app.post('/React2' , async(req , res)=>{
    try{
        const {video2 , head2}=req.body;
        // const {id}=req.params

        const Reactdata = await ReactSchema2.create({
                // id : id,
                "video2" : video2,
                "head2" : head2     
        })

        res.json({
            Success :true,
            Say : Reactdata,
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.put('/React2/:_id', async(req ,res)=>{
    const {_id}=req.params;
    const {video2 , head2 } = req.body; 
    const Reactdb = await ReactSchema2.updateOne({_id:_id } , {$set: {video2 : video2, head2 : head2 }})
    res.json({
        data : Reactdb,
        msg : `Notes are fetched successfully by title ${head2}`
    })
})

app.delete('/ReactDlt2/:_id', async(req , res)=>{
    const {_id} = req.params;
    const Reactin = await ReactSchema2.deleteOne({_id:_id})

    res.json({
        Success : true,
        id : _id,
        data : Reactin,
        msg : `Notes are deleted successfully by id ${_id}`
    })
})

app.get('/getreactdata2' , async(req, res)=>{
    try{
        // const {coursename}=req.body;
        const Reactinfo = await ReactSchema2.find()
        res.json({
            Success : true,
            data : Reactinfo,
            msg : `${Reactinfo} is show successfully`
        })
    
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.get('/Reacts2' , async(req, res)=>{
    try{
        const infoRe = await ReactSchema2.find( )
        res.json({
            Success : true,
            data : infoRe,
            msg : `data is show successfully`
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})



//HomeCard3
app.post('/HomeCard3' , async(req , res)=>{

    try{
        const {img3 , title3 , para3 , rs3}=req.body;
        // const {id}=req.params

        const Coursedata = await HomeCard3.create({
                // id : id,
                "img3" : img3,
                "title3" : title3,
                "para3" : para3,
                "rs3" : rs3
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

app.put('/HomeCardEdt3/:_id', async(req ,res)=>{
    const {_id}=req.params;
    const {img3 , title3 , para3 , rs3} = req.body; 
    const coursedb = await HomeCard3.updateOne({_id:_id } , {$set: {img3 : img3 , title3 : title3 , para3 : para3 , rs3 : rs3 }})
    res.json({
        data : coursedb,
        msg : `Data are fetched successfully by title ${title3}`
    })
})

app.delete('/HomeCardDlt3/:_id', async(req , res)=>{
    const {_id} = req.params;
    const note = await HomeCard3.deleteOne({_id:_id})

    res.json({
        Success : true,
        id : _id,
        data : note,
        msg : `Notes are deleted successfully by id ${_id}`
    })
})

app.get('/HomeCard3' , async(req, res)=>{
    try{
        // const {coursename}=req.body;
        const courseinfo = await HomeCard3.find()
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

app.get('/HomeCards3' , async(req, res)=>{
    try{
        const info = await HomeCard3.find( )
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

//ReactSchema2
app.post('/React3' , async(req , res)=>{
    try{
        const {video3 , head3}=req.body;
        // const {id}=req.params

        const Reactdata = await ReactSchema3.create({
                // id : id,
                "video3" : video3,
                "head3" : head3    
        })

        res.json({
            Success :true,
            Say : Reactdata,
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.put('/React3/:_id', async(req ,res)=>{
    const {_id}=req.params;
    const {video3 , head3 } = req.body; 
    const Reactdb = await ReactSchema3.updateOne({_id:_id } , {$set: {video3 : video3, head3 : head3 }})
    res.json({
        data : Reactdb,
        msg : `Notes are fetched successfully by title ${head3}`
    })
})

app.delete('/ReactDlt3/:_id', async(req , res)=>{
    const {_id} = req.params;
    const Reactin = await ReactSchema3.deleteOne({_id:_id})

    res.json({
        Success : true,
        id : _id,
        data : Reactin,
        msg : `Notes are deleted successfully by id ${_id}`
    })
})

app.get('/getreactdata3' , async(req, res)=>{
    try{
        // const {coursename}=req.body;
        const Reactinfo = await ReactSchema3.find()
        res.json({
            Success : true,
            data : Reactinfo,
            msg : `${Reactinfo} is show successfully`
        })
    
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})

app.get('/Reacts2' , async(req, res)=>{
    try{
        const infoRe = await ReactSchema2.find( )
        res.json({
            Success : true,
            data : infoRe,
            msg : `data is show successfully`
        })
    }catch(error){
        res.json({
            Success : false,
            msg : error.message
        })
    }
})