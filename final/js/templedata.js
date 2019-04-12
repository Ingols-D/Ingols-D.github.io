var section = document.querySelector ('section');
var requestURL="//ingols-d.github.io/finalJSON/temple.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var templeData = request.response;
    showData(templeData);
}

function showData(jsonObj) {
    var places = jsonObj['temple'];

    for (var i=0; i <places.length; i++) {
        var myArticle = document.createElement('article');
        var myImg = document.createElement('img');
        var myH2 = document.createElement('h2'); /*city name*/
        var myPara1 = document.createElement('p'); /*history*/
        var myPara2 = document.createElement('p'); /*address*/
        var myPara3 = document.createElement('p'); /*city*/
        var myPara4 = document.createElement('p'); /*phone*/
        var myPara5 = document.createElement('p'); /*services*/
        var myList1 = document.createElement('ul'); /*services list*/
        var myPara6 = document.createElement('p'); /*schedule*/
        var myPara7 = document.createElement('p'); /*closures*/       
        var myList2 = document.createElement('ul'); /*closures list*/

        if (places[i].name == "Bismark North Dakota Temple") {
            myImg.setAttribute('src', 'images/bismark.jpg');
            myImg.setAttribute('alt', 'Bismark North Dakota Temple');}
        else if (places[i].name == 'Columbia South Carolina Temple') {
            myImg.setAttribute('src', 'images/columbia.jpg');
            myImg.setAttribute('alt', 'Columbia South Carolina Temple');}
        else if (places[i].name == 'Detroit Michigan Temple') {
            myImg.setAttribute('src', 'images/detroit.jpg');
            myImg.setAttribute('alt', 'Detroit Michigan Temple');}
        else if (places[i].name == 'Ft Collins Colorado Temple') {
            myImg.setAttribute('src', 'images/fortcollins.jpg');
            myImg.setAttribute('alt', 'Fort Collins Colorado Temple');}
        else if (places[i].name == 'Lubbock Texas Temple') {
            myImg.setAttribute('src', 'images/lubbock.jpg');
            myImg.setAttribute('alt', 'Lubbock Texas Temple');}
        else if (places[i].name == 'Oakland California Temple') {
            myImg.setAttribute('src', 'images/oakland300.jpg');
            myImg.setAttribute('alt', 'Oakland California Temple');
        }
    myH2.textContent = places [i].name;
    myPara1.textContent = 'Dedicated: ' + places[i].history;
    myPara2.textContent = 'Address: ' + places[i].address;
    myPara3.textContent = places[i].city;
    myPara4.textContent = 'Phone: ' + places[i].phone;
    myPara5.textContent = 'Services: ';
    myPara6.textContent = 'Schedule: ' + places[i].schedule;
    myPara7.textContent = 'Closures: ';

    var services = places[i].services;
    for (var j = 0; j < services.length; j++) {
        var listItem = document.createElement ('li');
        listItem.textContent = services[j];
        myList1.appendChild(listItem);
    }
    var closures = places[i].closures;
    for (var j = 0; j < closures.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = closures[j];
            myList2.appendChild(listItem);
        }
    myArticle.appendChild(myImg);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myList1);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);;
    myArticle.appendChild(myList2);

    section.appendChild(myArticle);    
        }
    }
}
