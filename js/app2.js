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
//check out 1hr into frontrow
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

var renderFooter = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);

  for(var i = 0; i < ListStores.shopHours.length; i++) {
    var storingHourlyTotals = 0;
    var tdEl = document.createElement('td');

    for(var j = 0; j < ListStores.allStores.length; j++) {
      storingHourlyTotals += ListStores.allStores[j].hourlyCookiesTotal[i];
    }
    tdEl.textContent = storingHourlyTotals;
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = ListStores.allStoresTotal;
  trEl.appendChild(tdElem);
  ListStores.tableEl.appendChild(trEl);
};

new ListStores('Seattle', '23', '65', '6.3');
new ListStores('Tokyo', '3', '24', '1.2');
new ListStores('Dubai', '11', '38', '3.7');
new ListStores('Paris', '20', '38', '2.3');
new ListStores('Lima', '2', '16', '4.6');
renderFooter();


var enterNewStore = document.getElementById('new-store');
enterNewStore.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  var city = event.target.inputCityName.value;
  var minCust = event.target.inputMinCust.value;
  var maxCust = event.target.inputMaxCust.value;
  var avgCookies = event.target.inputAvgCookies.value;
  var removeFooter = document.getElementById('storeConstructor').lastChild;
  removeFooter.remove();
  new ListStores(city, minCust, maxCust, avgCookies);
  renderFooter();
  //form.reset(); resets instead of using all of the code below
  // var formName = getelement by id()
  // formName.reset();
  event.target.inputCityName.value = null;
  event.target.inputMinCust.value = null;
  event.target.inputMaxCust.value = null;
  event.target.inputAvgCookies.value = null;
}

