'use strict';

//create global variables
var createConstructor = document.getElementById('storeConstructor');
var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];
//create constructor function

function Store(cityName, minCustomer, maxCustomer, averageCookies) {
  this.cityName = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookies = averageCookies;
  //try to create a random function to eliminate usage of arrays
  this.cookiesSoldEachHourArray = [];
  this.customerEachHourArray = [];
  this.totalCookiesPerDay = 0;
  this.run = function() {
    console.log(`We sell ${this.averageCookies} on average/day`);
  };

  allStores.push(this);
}

new Store('Seattle', '23', '65', '6.3');
console.log(allStores[0].averageCookies);
//create random function


//get a render function
//create table


