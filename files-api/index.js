const express = require('express')
const app = express()

const port = 8080

app.use(express.json({ type: 'application/json' }))

app.listen(port, () => console.log(`Running on http://localhost${port}`)
)
