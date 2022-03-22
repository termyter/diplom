const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const morgan = require("morgan");

const app = express()

const PORT = config.get('port') || 5000


async function start(){
    try {
        if('0' == [])
            console.log('збс', e.message)
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

app.use('/123', require('./routes/index'))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});

app.listen(PORT, () => console.log(` on port ${PORT}...`));