if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const port = process.env.PORT || 3000
const express = require('express');
const router = require('./routes/index.js');
const cors = require('cors');
const app = express()

app.use(cors())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router)

module.exports = app;