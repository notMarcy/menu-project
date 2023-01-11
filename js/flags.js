let namr = localStorage.getItem('name');
let mnb = document.querySelector('#main-b');
let rfv = document.querySelector('#rfv');
let city = localStorage.getItem('city');
rfv.innerHTML = namr;
mnb.innerHTML += '<br>';
for(let i = 0; i < city.length; i++){
   mnb.innerHTML += city[i];
}
for(let i = 0; i < mnb.innerHTML.length; i++){
   if(mnb.innerHTML[i] == ',')mnb.innerHTML[i+1] = '0';
   console.log(mnb.innerHTML[i]);
}