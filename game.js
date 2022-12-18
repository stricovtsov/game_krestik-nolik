
var kletki = window.document.querySelectorAll('.item');
var plaer = `0`;
 kletki.forEach((x) =>x.addEventListener('click',fu)
 );
function fu(x){
  var elemen = x.currentTarget;
  console.log(elemen);
  if (elemen.innerText != "") return
  elemen.innerText = plaer;

 for (let i=0;i<=2;i++){
  let f1=document.querySelector("#y0x"+i).innerText;
  let f2=document.querySelector("#y1x"+i).innerText;
  let f3=document.querySelector("#y2x"+i).innerText;
  //function chek (f1,f2,f3)
   if (f1=="" ) continue;
   else if (f1===f2 && f1===f3) promptWindow ();
  let f4=document.querySelector("#y"+i+"x0").innerText;
  let f5=document.querySelector("#y"+i+"x1").innerText;
  let f6=document.querySelector("#y"+i+"x2").innerText;
// function chek (f4,f5,f6)
   if (f4=="" ) continue;
   else if (f4==f5 && f4==f6) promptWindow ();
 }
 function chek (x,y,z) {

  if (x!=="" && x==y && x==z) promptWindow ();
 }
  let f7 = document.querySelector("#y0x0").innerText;
  let f8 = document.querySelector("#y1x1").innerText;
  let f9 = document.querySelector("#y2x2").innerText;
  let f10 = document.querySelector("#y0x2").innerText;
  let f11 = document.querySelector("#y2x0").innerText;
  // function chek (f7,f8,f9)
  if(f8!=="" && f7==f8 && f7==f9 )  promptWindow ();
  if(f8!=="" && f10==f8 && f8==f11 )  promptWindow ();
  ( plaer == `0`) ? plaer=`x`:plaer=`0`;
function promptWindow() {
  let box = document.createElement('div');
  let cancel = document.createElement("button");
  box.className = "alert";
  cancel.innerText = "выйти";
  box.innerHTML = "<strong>ура!</strong> ты победил." + plaer;
   cancel.onclick = function() { document.body.removeChild(this.parentNode) }
  box.appendChild(cancel);
  document.body.append(box);
  // Create template
  // var box = document.createElement("div");
  // div.className = "box";
  // var cancel = document.createElement("button");
  // cancel.innerHTML = "Cancel";
  // cancel.onclick = function() { document.body.removeChild(this.parentNode) }
  // var text = document.createTextNode("Please enter a message!");
  // var input = document.createElement("textarea");
  // box.appendChild(text);
  // box.appendChild(input);
  // box.appendChild(cancel);

  // Style box
  // box.style.position = "absolute";
  // box.style.width = "400px";
  // box.style.height = "300px";

  // Center box.
  // box.style.left = (window.innerWidth / 2) -100;
  // box.style.top = "100px";

  // // Append box to body
  // document.body.appendChild(box);
};
};
