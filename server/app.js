const express = require("express")
const app = express();
require("./db/conn")
const port = 8004;
const cors = require("cors")
const router = require("./routes/router")

app.use(express.json());
app.use(cors());


// app.get('/', (req,res) => {
//     res.send("server starts")
// })

app.use("/uploads",express.static("./uploads"))
app.use(router)

app.listen(port, () => console.log("Server starts"))
