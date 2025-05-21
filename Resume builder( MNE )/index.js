const express = require("express")
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database is Successfully Connected"))
.catch((err) => console.error(err));

app.use('/api/auth',require("./routes/auth"));
app.use('/api/resumes',require("./routes/resume"));

app.listen(process.env.PORT,console.log("Server Running",process.env.PORT));