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
  totalCookiesPerDay: 0,

  totalCookies: function() {
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
    seattleCookieShopElement.appendChild(liEl);
  },
  calculate: function() {
    for (var i = 0; i < shopHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)} cookies`;
      seattleCookieShopElement.appendChild(liEl);
    }
    this.totalCookies();
  },
  randomCookies: function(min, max) {
    var cookies = Math.floor((Math.random() * (max - min) + min) * this.averageCookiesPerCust);
    this.totalCookiesPerDay += cookies;
    return cookies;
  },

};

seattleCookieSales.calculate();

var tokyoCookieSales = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesPerCust: 1.2,
  totalCookiesPerDay: 0,

  totalCookies: function() {
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
    tokyoCookieShopElement.appendChild(liEl);
  },
  calculate: function() {
    for (var i = 0; i < shopHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)} cookies`;
      tokyoCookieShopElement.appendChild(liEl);
    }
    this.totalCookies();
  },
  randomCookies: function(min, max) {
    var cookies = Math.floor((Math.random() * (max - min) + min) * this.averageCookiesPerCust);
    this.totalCookiesPerDay += cookies;
    return cookies;
  },
};

tokyoCookieSales.calculate();

var dubaiCookieSales = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPerCust: 3.7,
  totalCookiesPerDay: 0,

  totalCookies: function() {
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
    dubaiCookieShopElement.appendChild(liEl);
  },

  calculate: function() {
    for (var i = 0; i < shopHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)} cookies`;
      dubaiCookieShopElement.appendChild(liEl);
    }
    this.totalCookies();
  },
  randomCookies: function(min, max) {
    var cookies = Math.floor((Math.random() * (max - min) + min) * this.averageCookiesPerCust);
    this.totalCookiesPerDay += cookies;
    return cookies;
  },
};

dubaiCookieSales.calculate();

var parisCookieSales = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  averageCookiesPerCust: 2.3,
  totalCookiesPerDay: 0,

  totalCookies: function() {
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
    parisCookieShopElement.appendChild(liEl);
  },

  calculate: function() {
    for (var i = 0; i < shopHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)} cookies`;
      parisCookieShopElement.appendChild(liEl);
    }
    this.totalCookies();
  },
  randomCookies: function(min, max) {
    var cookies = Math.floor((Math.random() * (max - min) + min) * this.averageCookiesPerCust);
    this.totalCookiesPerDay += cookies;
    return cookies;
  },
};

parisCookieSales.calculate();

var limaCookieSales = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averageCookiesPerCust: 4.6,
  totalCookiesPerDay: 0,

  totalCookies: function() {
    var liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
    limaCookieShopElement.appendChild(liEl);
  },

  calculate: function() {
    for (var i = 0; i < shopHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${shopHours[i]}: ${this.randomCookies(this.minCustomersPerHour, this.maxCustomersPerHour)} cookies`;
      limaCookieShopElement.appendChild(liEl);
    }
    this.totalCookies();
  },
  randomCookies: function(min, max) {
    var cookies = Math.floor((Math.random() * (max - min) + min) * this.averageCookiesPerCust);
    this.totalCookiesPerDay += cookies;
    return cookies;
  },
};

limaCookieSales.calculate();

