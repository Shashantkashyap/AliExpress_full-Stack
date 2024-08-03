const express = require("express")
const app = express();
const dbConnect = require("./database/connectDatabase")
require("dotenv").config()
const otpRoute = require("./controllers/OtpController")
const userRoute = require("./routes/userRoute")
const cartRoute = require("./routes/cartRoutes")
const cors = require("cors")
//const insertData = require("./routes/ProductToDB")

const PORT = process.env.PORT || 5000;
dbConnect();
//insertData() ; 

app.use(cors({
    origin: "http://localhost:5173",
    credential: true
    
}))
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.use("/api",otpRoute);
app.use("/api",userRoute);
app.use("/api",cartRoute);

app.get("/",(req,res)=>(
    res.send("The server is running")
))

app.listen(PORT, ()=>{
    console.log(`the server is running at port no. ${PORT} successfully`)
})