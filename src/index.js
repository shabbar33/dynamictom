const express = require('express')
const app = express()
const port = 80

app.get('/api', (req, res) => {
    res.send('dickballs dynamic')
})
app.get('/api/time', (req, res) => {
    res.send(new Date().getTime())
})

// azure health check
app.get('/', (req, res) => { res.send('') })
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})