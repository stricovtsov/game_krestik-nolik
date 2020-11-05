let r1 = document.querySelector("#y0x0");
console.log(r1);
let r2 = document.querySelector("#y0x1");
let r3 = document.querySelector("#y0x2");
let r4 = document.querySelector("#y1x0");
let r5 = document.querySelector("#y1x1");
let r6 = document.querySelector("#y1x2");
let r7 = document.querySelector("#y2x0");
let r8 = document.querySelector("#y2x1");
let r9 = document.querySelector("#y2x2");
let plaer = `0`
r1.addEventListener("click",fu);
r2.addEventListener("click",fu);
r3.addEventListener("click",fu);
r4.addEventListener("click",fu);
r5.addEventListener("click",fu);
r6.addEventListener("click",fu);
r7.addEventListener("click",fu);
r8.addEventListener("click",fu);
r9.addEventListener("click",fu);
function fu(x){
  let elemen = x.currentTarget; 
  if (elemen.innerText != "") return; 
  elemen.innerText = plaer; 
 ( plaer == `0`) ? plaer=`x`:plaer=`0`;
 for (let i=0;i<=2;i++){
  let f1=document.querySelector("#y0x"+i).innerText;
  let f2=document.querySelector("#y1x"+i).innerText;
  let f3=document.querySelector("#y2x"+i).innerText;
  if (f1=="" ) continue;
 if (f1===f2 && f1===f3) alert(1);
}
function prov(){
  let 
}
}
