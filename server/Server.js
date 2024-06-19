const express = require('express');
const app = express();

app.listen(8090, function() {
    console.log("포트 8090으로 서버 대기중...");
});

app.get('/book', function(req, res) {
    res.send('도서 목록 관련 페이지입니다.');
});

/*app.get('/',function(req,res){
    res.send('홈입니다.<br>김경빈님, 반갑습니다.');
})*/

/*app.get('/',function(req,res){
    res.send(
        '<html>\
        <body>\
        <h1>홈입니다.</h1>\
        <marquee>김경빈님 반갑습니다.</marquee>\
        </body>\
        </html>'
    );
})*/

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});