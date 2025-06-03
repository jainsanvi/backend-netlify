const express = require('express')
const cors = require('cors')
const serverless = require('serverless-http')

const app = express();

app.use(cors())


app.get('/.netlify/index/',(req, res) => {
    res.send("success");
})

app.use(express.json())

// app.listen(5000, () => {
//     console.log("Server is running on the port");
// })

module.exports.handlers = serverless(app);
