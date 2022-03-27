const parser = require('./grammar/grammar')
const express = require('express')

const app = express()

app.use(express.json())

const PORT = 3000

app.post('/', (req, res) => {
    const exp = req.body.exp
    const result = parser.parse(exp)
    console.log(result)

    return res.send(JSON.stringify(result))
})


app.listen(PORT, () => console.log('Server running on port: ' + PORT))
