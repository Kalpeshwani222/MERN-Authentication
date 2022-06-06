const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoute");
const resetPassRoute = require("./routes/resetPassRoute");

const {notFound,errorHandler} =  require("./middlewares/errorMiddleware")
const connectDb = require("./db/db");
const cors = require("cors");
const port = process.env.PORT || 8000;

const app = express();
dotenv.config();

//for cors policy
app.use(cors());

//database
connectDb();

app.use(express.json());


app.use("/api/auth",authRoute);
app.use("/api/reset",resetPassRoute);


app.use(notFound);
app.use(errorHandler);


app.listen(port, () =>{
    console.log(`app started on ${port}`)
})

