'use strict';

//Here are all the shop element variables
var createTable = document.getElementById('tableContainer');
var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];
function getRandom(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var tbodyEl = document.createElement('tbody');
createTable.appendChild(tbodyEl);

function Store(city, minCust, maxCust, avg) {
  this.cityName = city;
  this.minCustomersPerHour = minCust;
  this.maxCustomersPerHour = maxCust;
  this.averageCookiesPerCust = avg;
  this.cookiesSoldEachHour = [];
  this.customerEachHour = [];
  this.totalCookiesPerDay = 0;
  this.calculateCustomers = function() {
    for(var i = 0; i < shopHours.length; i ++) {
      var randomCustomer = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
      this.customerEachHour.push(randomCustomer);
    }
  };
  this.calculateCookies = function() {
    for(var i = 0; i < this.customerEachHour.length; i ++) {
      var cookies = Math.round(this.customerEachHour[i] * this.averageCookiesPerCust);
      this.totalCookiesPerDay += cookies;
      this.cookiesSoldEachHour.push(cookies);
    }
  };
  this.render = function() {
    this.calculateCustomers();
    this.calculateCookies();
    var trEl  = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.cityName;
    trEl.appendChild(thEl);
    for(var i = 0; i < shopHours.length; i ++){
      var tdEl = document.createElement('td');
      tdEl.textContent = `${shopHours[i]}: ${this.cookiesSoldEachHour[i]} Cookies `;
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = `${this.totalCookiesPerDay}`;
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);
  };
  allStores.push(this);
}

// Store.prototype.getRandom = function(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

new Store('Seattle', '23', '65', '6.3');
console.log(allStores);
//seattle cookie shop object
//runs random numbers per hour and shows total at end
// var seattleCookieSales = {
//   storeName: 'Pat\'s Salmon Cookies Seattle',
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   averageCookiesPerCust: 6.3,
//   cookiesSoldEachHour: [],
//   customerEachHour: [],
//   totalCookiesPerDay: 0,
//   //Needs a separate function to grab totals for end of array
//   calculateCustomers: function() {
//     for(var i = 0; i < shopHours.length; i ++){
//       var randomCustomer = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
//       this.customerEachHour.push(randomCustomer);
//     }
//   },
//   calculateCookies: function() {
//     for(var i = 0; i < this.customerEachHour.length; i ++ ) {
//       var cookies = Math.round(this.customerEachHour[i] * this.averageCookiesPerCust);
//       this.totalCookiesPerDay += cookies;
//       this.cookiesSoldEachHour.push(cookies);
//     }
//   },
//   render: function() {
//     this.calculateCustomers();
//     this.calculateCookies();
//     var ulEl = document.createElement('ul');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     seattleCookieShopElement.appendChild(h2El);
//     for(var i = 0; i < shopHours.length; i ++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${shopHours[i]}: ${this.cookiesSoldEachHour[i]} Cookies `;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
//     ulEl.appendChild(liEl);
//     seattleCookieShopElement.appendChild(ulEl);
//   },
// };
// seattleCookieSales.render();

// var tokyoCookieSales = {
//   storeName: 'Pat\'s Salmon Cookies Tokyo',
//   minCustomersPerHour: 3,
//   maxCustomersPerHour: 24,
//   averageCookiesPerCust: 1.2,
//   cookiesSoldEachHour: [],
//   customerEachHour: [],
//   totalCookiesPerDay: 0,
//   //Needs a separate function to grab totals for end of array
//   calculateCustomers: function() {
//     for(var i = 0; i < shopHours.length; i ++){
//       var randomCustomer = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
//       this.customerEachHour.push(randomCustomer);
//     }
//   },
//   calculateCookies: function() {
//     for(var i = 0; i < this.customerEachHour.length; i ++ ) {
//       var cookies = Math.round(this.customerEachHour[i] * this.averageCookiesPerCust);
//       this.totalCookiesPerDay += cookies;
//       this.cookiesSoldEachHour.push(cookies);
//     }
//   },
//   render: function() {
//     this.calculateCustomers();
//     this.calculateCookies();
//     var ulEl = document.createElement('ul');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     tokyoCookieShopElement.appendChild(h2El);
//     for(var i = 0; i < shopHours.length; i ++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${shopHours[i]}: ${this.cookiesSoldEachHour[i]} Cookies `;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
//     ulEl.appendChild(liEl);
//     tokyoCookieShopElement.appendChild(ulEl);
//   },
// };
// tokyoCookieSales.render();

// var dubaiCookieSales = {
//   storeName: 'Pat\'s Salmon Cookies Dubai',
//   minCustomersPerHour: 11,
//   maxCustomersPerHour: 38,
//   averageCookiesPerCust: 3.7,
//   cookiesSoldEachHour: [],
//   customerEachHour: [],
//   totalCookiesPerDay: 0,
//   //Needs a separate function to grab totals for end of array
//   calculateCustomers: function() {
//     for(var i = 0; i < shopHours.length; i ++){
//       var randomCustomer = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
//       this.customerEachHour.push(randomCustomer);
//     }
//   },
//   calculateCookies: function() {
//     for(var i = 0; i < this.customerEachHour.length; i ++ ) {
//       var cookies = Math.round(this.customerEachHour[i] * this.averageCookiesPerCust);
//       this.totalCookiesPerDay += cookies;
//       this.cookiesSoldEachHour.push(cookies);
//     }
//   },
//   render: function() {
//     this.calculateCustomers();
//     this.calculateCookies();
//     var ulEl = document.createElement('ul');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     dubaiCookieShopElement.appendChild(h2El);
//     for(var i = 0; i < shopHours.length; i ++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${shopHours[i]}: ${this.cookiesSoldEachHour[i]} Cookies `;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
//     ulEl.appendChild(liEl);
//     dubaiCookieShopElement.appendChild(ulEl);
//   },
// };
// dubaiCookieSales.render();

// var parisCookieSales = {
//   storeName: 'Pat\'s Salmon Cookies Paris',
//   minCustomersPerHour: 20,
//   maxCustomersPerHour: 38,
//   averageCookiesPerCust: 2.3,
//   cookiesSoldEachHour: [],
//   customerEachHour: [],
//   totalCookiesPerDay: 0,
//   //Needs a separate function to grab totals for end of array
//   calculateCustomers: function() {
//     for(var i = 0; i < shopHours.length; i ++){
//       var randomCustomer = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
//       this.customerEachHour.push(randomCustomer);
//     }
//   },
//   calculateCookies: function() {
//     for(var i = 0; i < this.customerEachHour.length; i ++ ) {
//       var cookies = Math.round(this.customerEachHour[i] * this.averageCookiesPerCust);
//       this.totalCookiesPerDay += cookies;
//       this.cookiesSoldEachHour.push(cookies);
//     }
//   },
//   render: function() {
//     this.calculateCustomers();
//     this.calculateCookies();
//     var ulEl = document.createElement('ul');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     parisCookieShopElement.appendChild(h2El);
//     for(var i = 0; i < shopHours.length; i ++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${shopHours[i]}: ${this.cookiesSoldEachHour[i]} Cookies `;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
//     ulEl.appendChild(liEl);
//     parisCookieShopElement.appendChild(ulEl);
//   },
// };
// parisCookieSales.render();

// var limaCookieSales = {
//   storeName: 'Pat\'s Salmon Cookies Lima',
//   minCustomersPerHour: 2,
//   maxCustomersPerHour: 16,
//   averageCookiesPerCust: 4.6,
//   cookiesSoldEachHour: [],
//   customerEachHour: [],
//   totalCookiesPerDay: 0,
//   //Needs a separate function to grab totals for end of array
//   calculateCustomers: function() {
//     for(var i = 0; i < shopHours.length; i ++){
//       var randomCustomer = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
//       this.customerEachHour.push(randomCustomer);
//     }
//   },
//   calculateCookies: function() {
//     for(var i = 0; i < this.customerEachHour.length; i ++ ) {
//       var cookies = Math.round(this.customerEachHour[i] * this.averageCookiesPerCust);
//       this.totalCookiesPerDay += cookies;
//       this.cookiesSoldEachHour.push(cookies);
//     }
//   },
//   render: function() {
//     this.calculateCustomers();
//     this.calculateCookies();
//     var ulEl = document.createElement('ul');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     limaCookieShopElement.appendChild(h2El);
//     for(var i = 0; i < shopHours.length; i ++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${shopHours[i]}: ${this.cookiesSoldEachHour[i]} Cookies `;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
//     ulEl.appendChild(liEl);
//     limaCookieShopElement.appendChild(ulEl);
//   },
// };
// limaCookieSales.render();


// render: function() {
//   var h2El = document.createElement('h2');
//   var ulEl = document.createElement('ul');
//   h2El.textContent = `${this.storeName}`;
//   seattleCookieShopElement.appendChild(h2El);
//   for (var i = 0; i < shopHours.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)}
//      cookies`;
//     ulEl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
//   ulEl.appendChild(liEl);
// },
// randomCookies: function(min, max) {
//   var cookies = Math.floor((Math.random() * (max - min) + min) * this.averageCookiesPerCust);
//   this.totalCookiesPerDay += cookies;
//   return cookies;
// },


