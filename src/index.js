const express =require('express');
const app =express()
app.get('/',(req,res)=>{
    return res.json('APi Running...')
});
app.listen(3001,()=>{
    console.log('Estou escutando')
})