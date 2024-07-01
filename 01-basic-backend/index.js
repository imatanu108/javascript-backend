require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const user = {
  name: 'Rohit',
  age: 34,
  email: "rohit@google.com",
  skills: ["react.js", "next.js", "node.js", "django", "machine learning", "docker"],
  role: {
    job: "backend developer",
    salary: "$250000"
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('<h1>this is about</h1>')
})

app.get('/docs', (req, res) => {
    res.send('this is docs.')
})

// sending json response
app.get('/user', (req, res) => {
  res.json(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})