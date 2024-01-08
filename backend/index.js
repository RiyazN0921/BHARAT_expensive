const express = require('express');
const bodyparser = require('body-parser');

const { dbConnection } = require('./config/db.config');

const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT

const app = express();

app.use(bodyparser.json())
app.use(cors());

app.use('/api/expense', require('./routes/expense'))

app.listen(PORT, async () => {
    await dbConnection()
    console.log("server listening on port", PORT)
})