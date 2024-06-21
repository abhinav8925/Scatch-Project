const express = require("express");
const app = express();
const db = require('./config/mongoose-connection');
const cookieParser = require("cookie-parser");
const path = require("path");
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');


// this website is used for training and testing purposes
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);



// app.get("/", (req,res)=>{
//     res.send("Hello in this project");
// })

app.listen(3000, (req,res)=>{
    console.log("Project is running");
})

