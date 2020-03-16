var naver = require('../config/naver_secret')
var express = require('express')
var router = express.Router()
var request = require('request')

var reqOptions = (api_url)=>{
    var options = {
        url : api_url,
        headers : {
            'X-Naver-Client-Id' : naver.client_id,
            'X-Naver-Client-Secret' : naver.client_secret
        }
    }
    return options
}



    router.get("/",(req,res)=>{
        res.json(naver)
    })

    router.get("/book",(req,res)=>{
        let searchName = req.query.search
        let api_url = naver.book_url
        api_url += '?query=' + encodeURI(searchName)

        request.get(reqOptions(api_url),(err,Response,body)=>{
            if(err) {
                console.log(err)
                res.send(Response.statusMessage)
            } else if(Response.statusCode == 200) {
                var naverJson = JSON.parse(body).items
                res.render('book/list',{books:naverJson})
            } else {
                res.send("unKnow Error respone")
            }
        })
    })

module.exports = (app) 