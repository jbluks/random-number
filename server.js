const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/random', (req, res) => {
  res.json({ number: Math.floor(Math.random()*1000)+1})
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))