const express= require('express')
const app = express()
const bp = require('body-parser')
const router = require('./route')

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

app.use('/',router)

app.listen(process.env.PORT || 3000 , function(){
    console.log('Express is runnning on ' + (process.env.PORT || 3000) )
})