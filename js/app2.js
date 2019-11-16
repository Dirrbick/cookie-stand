'use strict';

//create global variables
ListStores.tableEl = document.getElementById('storeConstructor');

ListStores.shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
ListStores.allStores = [];
//create constructor function
//constuctor function that will store information of the cookie stores
//counter for all stores total
ListStores.allStoresTotal = 0;

function ListStores(cityName, minCustomer, maxCustomer, averageCookies) {
  this.cityName = cityName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookies = averageCookies;
  //try to create a random function to eliminate usage of arrays
  this.hourlyCookiesTotal = [];
  this.totalCookiesPerDay = 0;

  ListStores.allStores.push(this);

  this.generateHourlyCookies();
  // this.renderShopRow();
}

// console.log(Store.run);
var randomCust = function(min, max) {
  return Math.ceil(Math.random() * ((max - min) + 1) + min);
};

//What I wanted to do in my head...I just couldn't get it in the code, thanks to Ron what I wanted came to life
ListStores.prototype.generateHourlyCookies = function () {
  for(var i = 0; i < ListStores.shopHours.length; i++) {
    var cookie = Math.ceil(this.averageCookies * randomCust(this.minCustomer, this.maxCustomer));
    this.hourlyCookiesTotal.push(cookie);
    this.totalCookiesPerDay += cookie;
    ListStores.allStoresTotal += cookie;
  }
};


//get a render function
//create table


