const express = require("express")
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const cors = require("cors")

const app = express();

dotenv.config()

// connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology: true,useNewUrlParser:true},
    () => console.log("connect to mongoDB!!!")
)

// Import routes
const productRoutes = require("./Route/product");

//Middleware
app.use(express.json())
app.use(cors())
// route Middlewares
app.use("/api", productRoutes);

app.listen(4000, () => {console.log("start my api in local")})