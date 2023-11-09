const express = require('express')
const app = express()
const port = 8080

app.get('/api', (req, res) => {
    res.send('cool dynamic')
})
app.get('/api/time', (req, res) => {
    res.send(""+new Date().getTime())
})

// azure health check
app.get('/', (req, res) => { res.send('') })
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})