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
  this.renderStoreRow();
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

var renderHeader = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < ListStores.shopHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = ListStores.shopHours[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trEl.appendChild(tdElem);
  ListStores.tableEl.appendChild(trEl);
};
renderHeader();


ListStores.prototype.renderStoreRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.cityName;
  trEl.appendChild(thEl);

  for(var i = 0; i < this.hourlyCookiesTotal.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesTotal[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdElem);
  ListStores.tableEl.appendChild(trEl);
};





new ListStores('Seattle', '23', '65', '6.3');

//get a render function
//create table


