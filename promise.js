/*var pro1=new Promise(function(resolve,reject){
});
pro1.then(function(result){
    console.log('result',result);
});*/


/*var pro1=new Promise(function(resolve,reject){
    resolve('success');
});
pro1.then(function(result){
    console.log('result',result);
});*/


/*var pro1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('success');
    },1000);
});
pro1.then(function(result){
    console.log('result',result);
});*/

/*function pro1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('success');
        },1000);
    });
}
pro1().then(function(result){
    console.log('result',result);
});*/


/*function pro1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject('pro1 fail');
        },1000);
    });
}
function pro2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('pro2 success');
        },1000);
    });
}
pro1()
.then(function(result){
    console.log('result1',result);
    return pro2();
})
.catch(function(err){
    console.log('err',err);
    return Promise.reject(err);
})
.then(function(result){
    console.log('result2',result);
});
*/


const pro1=pid=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(pid=="jamsu"){
                resolve('pro1 success');
            }else{
                reject('pro1 fail');
            }
        },1000);
    });
}
const pro2=ppw=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(ppw=='1111'){
                resolve('pro2 success');
            }else{
                reject('pro2 fail');
            }
        },1000);
    });
}
const id='jamsu';
const pw='2222';

pro1(id).
then(result=>{
    console.log('result1',result);
    return pro2(pw);
})
.then(result=>{
    console.log('result2',result);
})
.catch(err=>{
    console.log('err',err);
    return Promise.reject(err);
})