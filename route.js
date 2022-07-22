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
       const abc= await axios.get(`https://gnews.io/api/v4/search?q=example&token=fb69ac0cee34110cbbaf641878743d30&max=${no}`)
       let data = abc.data.articles
       res.status(200).send({status:true,message:"successful",totalArticles:no,data:data})
  
 
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }

})


router.get('/newArticles' , async (req,res)=>{
  try{  const title = req.query.title 
    const author = req.query.author
    const abc= await axios.get(`https://gnews.io/api/v4/search?q=example&token=fb69ac0cee34110cbbaf641878743d30`)
    const lengthOfArtices = abc.data.articles

    if(!title && !author){
        return res.status(400).send({status:false,message:"please enter alteast one entity author or title"})
    }
    
    
   if(author){ for(let i=0;i<lengthOfArtices.length;i++){
        let nameOfAuthor = lengthOfArtices[i].source.name.toLowerCase()
        if(author.toLowerCase() == nameOfAuthor){
            return res.status(200).send({
              status:true,
              data:lengthOfArtices[i]
            })
        }
    }
    return res.status(404).send({status:false,message:"invalid author"})
}
    if(title){
        for(let i=0;i<lengthOfArtices.length;i++){
            let titleInSmall = title.toLowerCase()
            let substringOftitle = lengthOfArtices[i].title.substring(0,title.length)
           let titleInArticle= substringOftitle.toLowerCase()
           if(titleInSmall == titleInArticle){
            return res.status(200).send({status:true,message:"successful", data:lengthOfArtices[i]})
           }
        }
        return res.status(404).send({status:false,message:"invalid title"})
    }
}catch(error){
    return res.status(404).send({status:false,message:error.message})
}
})


router.get('/searchByKeyword', async (req,res)=>{
    try{
        const keyword = req.query.keyword
        if(!keyword){
            return res.status(400).send({status:false,message:"please enter keyword"})
        }
        const abc= await axios.get(`https://gnews.io/api/v4/search?q=${keyword}&token=fb69ac0cee34110cbbaf641878743d30`)
         let data = abc.data.articles
         return res.status(200).send({status:true,message:"successful",totalArticles:data.length ,data:data})
         
    }catch(error){
        return res.status(404).send({status:false,message:error.message})
    }
})




module.exports = router