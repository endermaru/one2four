let i=0;
const h1=document.getElementById("title");
h1.innerHTML="Third?";
h1.style.color="red";
const b1=document.getElementById("b1");
b1.addEventListener("click",function(){
    i++;
    const result=document.getElementById("lst");
    let new_result=document.createElement("div");
    new_result.setAttribute("class","result");
    new_result.innerHTML=String(i)+"th result";
    result.appendChild(new_result);

});
const b2=document.getElementById("b2");
b2.addEventListener("click",function(){
    const rs=document.getElementsByClassName("result");
    rs[rs.length-1].remove();
    i--;
});