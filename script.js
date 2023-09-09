const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
  
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
  
//       const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//         <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
//       </div>
//       </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('india');
// getCountryData('usa');
// getCountryData('germany')

const renderCountry = function (data) {   
    // console.log(data.flags.png)
    const html = `
<article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
    <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
  </div>
  </article>
`;
countriesContainer.insertAdjacentHTML('beforeend', html);
countriesContainer.style.opacity = 1;
}


// const getCountryAndNeighbour = function (country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
  
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//     //   console.log(data);
  
//       // Render country 1
//       renderCountry(data);
  
//       // Get neighbour country (2)
//       const [neighbour] = data.borders;
  
//       if (!neighbour) return;
  
//       // AJAX call country 2
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();
  
//       request2.addEventListener('load', function () {
//         const data2 = JSON.parse(this.responseText);
//         // console.log(data2);
        
//         renderCountry(data2[0]);
//       });
//     });
//   };
  
  // getCountryAndNeighbour('portugal');
  // getCountryAndNeighbour('india');
//   getCountryAndNeighbour('usa');

// const request = fetch('https://restcountries.com/v3.1/name/${country}')

// const getCountryData = function (country){
//   fetch('https://restcountries.com/v3.1/name/${country}').then(function(response) {
//     console.log(response);
//     return response.json();
//   }).then (function(data){
//     console.log(data);
//     renderCountry(data[0]);
//   })
// }

// getCountryData('usa')

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response) {
//       if(!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data)
//       if(data && data.length > 0) {
//         renderCountry(data[0]);
//       } else {
//         console.log('No country data found.');
//       }
//     })
// }

  

// const getCountryData = function (country) {
//   fetch('https://restcountries.com/v3.1/name/${country}').then(response => response.json()).then(data => renderCountry(data[0]));
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
  const temp = response.json();
  console.log(temp);
  return temp;
  })
  .then((data) => {
    console.log(data)
    if (data && data.length > 0) {
      return renderCountry(data[0]);
    } else {
      return console.log('No country data found');
    }
  });
};


getCountryData('india');
