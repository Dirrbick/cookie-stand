'use strict';

var seattleCookieShopElement = document.getElementById('seattleCookieShop');
var tokyoCookieShopElement = document.getElementById('tokyoCookieShop');
var dubaiCookieShopElement = document.getElementById('dubaiCookieShop');
var parisCookieShopElement = document.getElementById('parisCookieShop');
var limaCookieShopElement = document.getElementById('limaCookieShop');
var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattleCookieSales = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,

  calculate: function() {
    for (var i = 0; i < shopHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)} cookies`;
      seattleCookieShopElement.appendChild(liEl);
    }
  },
  randomCookies: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
};

seattleCookieSales.calculate();

var tokyoCookieSales = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,

  calculate: function() {
    for (var i = 0; i < shopHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)} cookies`;
      tokyoCookieShopElement.appendChild(liEl);
    }
  },
  randomCookies: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
};

tokyoCookieSales.calculate();

var dubaiCookieSales = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,

  calculate: function() {
    for (var i = 0; i < shopHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)} cookies`;
      dubaiCookieShopElement.appendChild(liEl);
    }
  },
  randomCookies: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
};

dubaiCookieSales.calculate();

