const express=require('express');
const app=express();
const PORT=5000;
app.get('/',(req,res)=>{
    res.send('i am a server');
})
const start=async()=>{
    try{
        app.listen(PORT,()=>{
            console.log("server is running");
        })
    }catch(error){
        console.log("server error",error);
    }
};