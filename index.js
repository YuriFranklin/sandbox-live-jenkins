const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! v3')
})

app.listen(port, () => {
  console.log(`Aplicação sendo executada na porta ${port}`)
})