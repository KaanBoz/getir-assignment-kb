# getir assignment by kaan boz





## get an free account from heroku

Heroku: Cloud Application Platform

https://www.heroku.com

donwload and install the Heroku Command Line Interface (CLI) for your operating system.

make sure node, git and npm is installed and have the minimun version specified below.

node --version

v14.15.4

npm --version

6.14.11

git --version

git version 2.28.0






## download the source code from https://github.com/KaanBoz/getir-assignment-kb.git

git clone https://github.com/KaanBoz/getir-assignment-kb.git

cd getir-assignment-kb





## install dependencies

npm i

##create heroku app

heroku create





## push the app 

git push heroku master


*both git and heroku must be authenticated for this to work.







## to run the project

npm run start





## to run tests

npm run test





## a working example can be found here:


POST:

https://getir-assignment-kb.herokuapp.com/getir

JSON data:
{
    "startDate": "2016-12-01",
    "endDate": "2018-12-30",
    "minCount": 1000,
    "maxCount": 2000
}





## JS Example code to call the api

var data = JSON.stringify({
  "startDate": "2016-12-01",
  "endDate": "2018-12-30",
  "minCount": 1000,
  "maxCount": 2000
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://getir-assignment-kb.herokuapp.com/getir");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);