const countryContainer = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");

// const renderCountry = (data, classname = "") => {
//   // const lang = Object.values(data.languages);
//   // // console.log(lang);
//   // const border = Object.values(data.borders);
//   // // console.log(border);

//   const html = `<article class="country ${classname} ">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} pople</p>
//     <p class="country__row"><span>🗣️</span>${data.language[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//   countryContainer.insertAdjacentElement("beforeend", html);
//   countryContainer.style.opacity;
//   1;
// };

// const getJSON = function(url, errorMsg= 'Something went wrong!!'){
//   return fetch(url).then(response => {
//     if(!response.ok) throw new Error (`${errormsg} ${response.status}`)
//     return response.json();

//   })
// }

//  ==================================== XMLHttpRequest

const renderCountry = function (data) {
  const html = `
    <article class="country ">
    <img class="country__img" src="${data.flags["png"]}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M pople</p>
      <p class="country__row"><span>🗣️</span>${Object.values(
        data.languages
      )}</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>`;

  countryContainer.insertAdjacentHTML("beforeend", html);
  countryContainer.style.opacity = 1;
};

const getcountry = function (country) {
  const request = new XMLHttpRequest();

  request.open(
    "GET",
    `https://restcountries.com/v3.1/name/${country}
`
  );

  request.send();

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
  });
};

// getcountry("sweden");
// getcountry("usa");
// getcountry("afghanistan");

const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // get neighbot country information
    const [neighbor] = data.borders;
    if (!neighbor) return;

    // AJAX call country 2

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor} `);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2);
    });
  });
};

getCountryAndNeighbor("usa");

setTimeout(() => {
  console.log("1 Second passed");
  setTimeout(() => {
    console.log("2 Second passed");
    setTimeout(() => {
      console.log("3 second passed");
    }, 1000);
  }, 1000);
}, 1000);

//   renderCountry(data);

//   // console.log(this.languages);
//   let neighbor = 0;
//   if (!data.borders) {
//     return;
//   } else {
//     for (let neighbor of data.borders) {
//       const requestNeighbor = new XMLHttpRequest();

//       requestNeighbor.open(
//         "GET",
//         `https://restcountries.com/v3.1/alpha/${neighbor}
//       `
//       );
//       requestNeighbor.send();

//       requestNeighbor.addEventListener("load", function () {
//         const [dataNeighbor] = JSON.parse(this.responseText);
//         console.log(dataNeighbor);
//         renderCountry(dataNeighbor);
//       });
//     }
//   }
// });

// const renderCountry = (data) => {
//   const lang = Object.values(data.languages);
//   // console.log(lang);
//   const border = Object.values(data.borders);
//   // console.log(border);
// };
