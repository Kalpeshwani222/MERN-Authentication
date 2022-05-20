const express = require("express");
const dotenv = require("dotenv");
const commentRoute = require("./routes/commentsRoute");
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


app.use("/api/comment",commentRoute)

app.listen(port, () =>{
    console.log(`app started on ${port}`)
})