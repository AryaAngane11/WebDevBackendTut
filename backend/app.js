const express = require('express')
const loginRoute = require('./routes/login')
const cors = require('cors')
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.use(cors());
app.use(express.json());
app.use('/',loginRoute);

app.listen(3008,()=>{
    console.log("Server started on port 3008");
})
