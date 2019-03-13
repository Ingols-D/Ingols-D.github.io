var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {

    var towns = request.response;
    showTowns(towns);
    towns.names;
    towns['active'];
}

function showTowns(jsonObj) {

    var townObj = jsonObj['towns'];

    for (var i = 0; i < townObj.length; i++) {

        if (townObj[i].name == "Preston" || townObj[i].name == "Soda Springs" || townObj[i].name == "Fish Haven") {

            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('motto');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myImg = document.createElement('img');

  

            myH2.textContent = townObj[i].name;
            myPara1.textContent = townObj[i].motto;
            myPara2.textContent = "Year Founded: " + townObj[i].yearFounded;
            myPara3.textContent = "Population: " + townObj[i].currentPopulation;
            myPara4.textContent = "Annual Rainfall: " + townObj[i].averageRainfall;

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myImg);

            section.appendChild(myArticle);

            if (townObj[i].name == "Preston") {
                myImg.setAttribute('src', 'images/preston.png');
                myImg.setAttribute('alt', 'Preston Image');
            } else if (townObj[i].name == "Soda Springs") {
                myImg.setAttribute('src', 'images/sodaSprings.png');
                myImg.setAttribute('alt', 'Soda Springs');
            } else if (townObj[i].name == "Fish Haven") {
                myImg.setAttribute('src', 'images/fishHaven.png');
                myImg.setAttribute('alt', 'Fish Haven');
            }
            

        }
    }
}
