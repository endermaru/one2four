// let a=123;
// let b="hello world";
// let c=true;
// let d=null;
// let e=undefined;
// let f={name:"John", age:30};
// let g=Symbol("mySymbol");

// let lst=[a,b,c,d,e,f,g]
// lst.forEach(function(el){console.log(typeof el)});


// function Add(a,b,op){
//     switch (op){
//         case "+":
//             return a+b;
//             break;
//         case "-":
//             return a-b;
//             break;
//     }

// }
// console.log(Add(1,2,"-"));

// let john={
//     name:"John",
//     age:30,
//     isMarried:true,
// };
// console.log(john.age);

const myButton = document.getElementById("button1");
myButton.addEventListener("click", function () {
    console.log("!");
    const actionStatus = document.getElementById("title");
    let clickStatus = document.createElement("div");
    clickStatus.innerHTML = "Button clicked!";
    actionStatus.appendChild(clickStatus);
});
