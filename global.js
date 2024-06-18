var savedUser='이은성';
function account(){
    console.log('반갑습니다.'+savedUser+'님');
}
account();
console.log('또 오셨네요'+savedUser+'님');


var savedUser='이은성';
function account(){
    console.log('반갑습니다.'+savedUser+'님');
    savedUser='김경빈';
}
account();
console.log('또 오셨네요'+savedUser+'님');


var savedUser='이은성';
function account(){
    var savedUser='김경빈';
    console.log('반갑습니다.'+savedUser+'님');
}
account();
console.log('또 오셨네요'+savedUser+'님');
