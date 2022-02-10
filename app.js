const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

const PORT = config.get('port') || 5000


async function start(){
    try {
        await mongoose.connect(config.get('mongoURL'))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

app.listen(PORT, () => console.log(` on port ${PORT}...`));