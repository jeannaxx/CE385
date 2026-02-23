const express = require('express');
const app =express();

const students =[
    {id:1,name:"node",age:18},
    {id:2,name:"express",age:18},
    {id:3,name:"Javasccript",age:20}
]

//get การเเสดงข้อมูล
app.get('/api/students',(req,res)=>{
    res.send(students)
})
app.get('/api/students/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id );
    if(student){
        res.send(student);
    }else{
        res.status(404).send("Error 404: Product not found");
    }
})    

//post เพิ่มนักศึกษาใหม่ 
app.use(express.urlencoded({extended :true}));

app.post('/students',(req,res) => {
    const {}
})



app.listen(8000,() => {
    console.log('Sever runnig on http://localhost:8000');
});





























// app.use(express.json());
// app.use(express.urlencoded({extended : true}));

// const validateStudent = (req,res,next) => {
//     const {name,age} = req.query;
//     if (!name || !age ){
//         return res.status(400).send("Invalid date");
//     }
//     next();

// }
// app.get('/search',validateStudent,(req,res) => {
    //ดึงพารามิเตอร์จากqurey string
//     const name = req.query.name;
//     const age = req.query.age;

//     res.send(`Searching for name: ${name},age: ${age}`);
// });












































//Parse URL-encode bodis
// app.use(express.urlencoded({extended:true}));

// app.post('/data',(req,res) => {
//     console.log(req.body);
//     res.send('Data received');
// });




// app.get ('/',(req,res)=>{
//     res.send('Hello exprees www.com');
// });

// app.listen(8000,()=>{
//     console.log('Sever runnig on http://localhost:8000');
// });