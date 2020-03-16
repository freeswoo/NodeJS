var mongoose = require('mongoose')
var bookVO = mongoose.Schema({

    title : String,     // 도서명
    isbn : Number,      // 도서코드
    image : String,     // 도서그림
    author : String,    // 저자
    price : Number,     // 가격
    publisher : String  // 출판사

})

module.exports = mongoose.model('book',bookVO)
