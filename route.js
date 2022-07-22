const express = require('express')
const router = express.Router()
const cors = require('cors')
const axios = require('axios')
const { json } = require('body-parser')

// n number of news articles
router.post('/newsArticles/:number',async (req, res) => {
    try {
        const no = req.params.number
        // let no = Number(number)

        if(no>10 || no<1){
            return res.status(400).send({status:false,message:"please enter between 1-10 articles at a time"})
        }
       const abc= await axios.get(`https://gnews.io/api/v4/search?q=example&token=4f3895259bb0c0139f79bc4ef540ce2b&max=${no}`)
       let data = abc.data.articles
       res.status(200).send({status:true,message:"successful",totalArticles:no,data:data})
  
 
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }

})


router.get('/')




modu