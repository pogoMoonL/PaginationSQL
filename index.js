const express = require("express");
const app = express();
const port = 3000;

const User = require("./db/index.js");

User.getAll((err, data) => {
   console.log(err)

   console.log(data)
 })
app.get('/nick', (req, res) => {

   User.getAll((err, data) => {
      console.log(err)
   
      console.log(data)
    })
   

})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})

