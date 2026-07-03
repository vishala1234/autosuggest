const express = require('express')
const app = express()
const PORT =3002;
app.use(express.static("fronted"))
app.listen(PORT,function(){
    console.log("successfully running at http://localhost:"+PORT)
})
//'npm install express'from ternimal
