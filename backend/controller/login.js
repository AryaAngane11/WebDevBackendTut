const loginController = (req,res)=>{
    const {email , password} = req.body;
    console.log("EMAIL RECIEVED : ", email);
    console.log("PASSWORD RECIEVED : ", password);
    res.status(200).send("OKayaa");
}


module.exports = loginController;