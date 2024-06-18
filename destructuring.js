/*
const color=['red','green','blue'];

let r=color[0];
let g=color[1];
let b=color[2];

console.log(r);
console.log(g);
console.log(b);

let user={
    id:'jamsuham',
    pw:'2131',
    name:'잠수함',
    age:30,
};

let id=user.id;
let pw=user.pw;
let name=user.name;
let age=user.age;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);
*/

/*const color=['red','green','blue'];
let [r,g,b]=color;
[b,g,r]=[r,g,b];
console.log(r);
console.log(g);
console.log(b);*/

/*const [a,b,c='c언어']=['c#','javascript'];
console.log(a);
console.log(b);
console.log(c);*/

/*const [a, ,c,d]=['c#','javascript','python','react'];
console.log(a);
console.log(c);
console.log(d);*/


/*const[a,b, ...rest]=['c#','javascript','python','react','c++'];
console.log(a);
console.log(b);
console.log(rest.length);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);*/

/*const arr1=['c#','javascript'];
const arr2=['python','react','c++'];
const arr3=[...arr1,...arr2];
console.log(arr3);*/


/*let user = {
    id : 'jamsuham',
    pw: '1234',
    name : '잠수함',
    age: 30,
};
let {id, pw, name, age} = user;
console.log(id);
console.log (pw);
console.log (name);
console.log(age);*/


/*let user={
    name:'잠수함',
    age:30,
};
let {id='guest',pw='1234',name,age}=user;

console.log(id);
console.log (pw);
console.log (name);
console.log(age);*/

let user={
    id:'jamsuham',
    pw:'1234',
    name:'잠수함',
    age:30,
};

let {id,...rest}=user;

console.log(id);
console.log (rest.pw);
console.log (rest.name);
console.log(rest.age);