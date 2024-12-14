const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const validatePassword = require('./validatePassword')

app.post('/users', (req, res) => {
  const { username, password } = req.body

  // Validate username
  // Validate password
  // Save user to database

  // Password:
  // at least 8 charcters long
  // has at least one letter
  // at least one number

  const validPassword = validatePassword(password)

  if (validPassword) {
    res.send({message: "Valid User"})
  } else {
    res.send({error: "Invalid Password"})
  }
})


app.listen(8085, () => console.log("listening on port 8085"))