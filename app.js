const express = require("express")
const bodyParser = require("body-parser")
const router = require("./Routes/routing")

const app = express()
app.use('/', router)

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})