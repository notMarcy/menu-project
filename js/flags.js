let namr = localStorage.getItem('name');
let mnb = document.querySelector('#main-b');
let rfv = document.querySelector('#rfv');
let city = localStorage.getItem('city');
let country = document.querySelector('.country');

let arrayOfTours = localStorage.getItem('arrayOfTours');
arrayOfTours = JSON.parse(arrayOfTours);
let arrayOfExcursions = localStorage.getItem('arrayOfExcursions');
let arrayOfHolidayTours = localStorage.getItem('arrayOfHolidayTours');

let tourName1 = document.querySelector('.tourName1');
let tourName2 = document.querySelector('.tourName2');
let tourName3 = document.querySelector('.tourName3');

let description1 = document.querySelector('.description1');
let description2 = document.querySelector('.description2');
let description3 = document.querySelector('.description3');

let photo1 = document.querySelector('.photo1');
let photo2 = document.querySelector('.photo2');
let photo3 = document.querySelector('.photo3');

let country1 = document.querySelector('.country1');
let country2 = document.querySelector('.country2');
let country3 = document.querySelector('.country3');

let tourists1 = document.querySelector('.tourists1');
let tourists2 = document.querySelector('.tourists2');
let tourists3 = document.querySelector('.tourists3');

let nights1 = document.querySelector('.nights1');
let nights2 = document.querySelector('.nights2');
let nights3 = document.querySelector('.nights3');
let cities = '';


let tour1 = document.querySelector('.tour1');
let tour2 = document.querySelector('.tour2');
let tour3 = document.querySelector('.tour3');
let schet = 0;
country.innerHTML = namr;
 for(let i = 0; i< arrayOfTours.length; i++){
   if(arrayOfTours[i].name == namr) {
      tourName1.innerHTML = arrayOfTours[i].city[0];
      country1.innerText += ' ' + arrayOfTours[i].name;
      tourists1.innerText += ' ' + arrayOfTours[i].tourists;
      tourists2.innerText += ' ' + arrayOfTours[i].tourists;
      tourists3.innerText += ' ' + arrayOfTours[i].tourists;
      nights1.innerText += ' ' + arrayOfTours[i].nights;
      nights2.innerText += ' ' + arrayOfTours[i].nights;
      nights3.innerText += ' ' + arrayOfTours[i].nights;

      tourName2.innerHTML = arrayOfTours[i].city[1];
      country2.innerText += ' ' + arrayOfTours[i].name;
      country3.innerText += ' ' + arrayOfTours[i].name;
      tourName3.innerHTML = arrayOfTours[i].city[2];
      description1.innerText = arrayOfTours[i]. text[0];
      description2.innerText = arrayOfTours[i]. text[1];
      description3.innerText = arrayOfTours[i]. text[2];
      tour1.style['background-image'] = arrayOfTours[i].photo[0];
      tour2.style['background-image'] = arrayOfTours[i].photo[1];
      tour3.style['background-image'] = arrayOfTours[i].photo[2];
      tour1.style['background-color'] = 'rgba(256,256,256,0.8)';
      tour2.style['background-color'] = 'rgba(256,256,256,0.8)';
      tour3.style['background-color'] = 'rgba(256,256,256,0.9)';
   }
 }
