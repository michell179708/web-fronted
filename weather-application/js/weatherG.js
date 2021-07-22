//Code for current day data.
// URL for the document API using the site openweather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=6362388&appid=927515261fe9326455b3c33d9ad82144&units=imperial";
//we use the method fetch to request the server to upload the information of the API document.
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) =>{
 //console.log(jsObject); //we use console log to check if the apiURL is correct 
    
 // we use ID to create information in our HTML using the array jsOBject which is our information. 
   document.getElementById("current-condition").innerHTML = jsObject.weather[0].description;
   document.getElementById("temp").innerHTML = jsObject.main.temp;
   document.getElementById("speed").innerHTML = jsObject.wind.speed;
   document.getElementById("humidity").innerHTML = jsObject.main.humidity;


 //calculate the windchild
 let t = parseFloat(document.getElementById("temp").innerHTML);
 let s = parseFloat(document.getElementById("speed").innerHTML);
        
 if (t <= 50 && s >= 3) {
 let f =35.74 +0.6215 * t -35.75 * Math.pow(s, 0.16) +0.4275 * t * Math.pow(s, 0.16);
 f = document.getElementById("windchill").innerHTML =f.toFixed(2) + "&deg; " + "F";
 } else { 
 f = "Not Applicable";
       
 document.getElementById("windchill").innerHTML = f;
 } 
         

});

  //code for the five day forecast with API

  const api = "https://api.openweathermap.org/data/2.5/forecast?id=6362388&appid=927515261fe9326455b3c33d9ad82144&units=imperial"

  fetch(api)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject) we probe our link in console log

   //code for the weekdays
   let day = 0;
   const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // array to find the weekdays
   // we filtered the odject than only have the hour 6.00pm => this our condition in our filtered.

   
   const Fivedays = jsObject.list.filter((element) =>
    element.dt_txt.includes("18:00:00")
   );
   // console.log(Fivedays); we probe if our filter is fine.
    Fivedays.forEach(x => { // we go through our filter array with the method for each
    let d = new Date(x.dt_txt); //we assign our date
    
    document.getElementById("diasDesemana"+(day+1)).textContent = weekdays[d.getDay()]; // we get our day
    document.getElementById("forecast"+(day+1)).textContent = Math.round(Fivedays[day].main.temp) + ' °F' //we get the forecast
     //code for the icon images
    const imagesrc = `https://openweathermap.org/img/w/${Fivedays[day].weather[0].icon}.png`;
    const desc = Fivedays[day].weather[0].description;
    
    document.getElementById("icon"+(day+1)).setAttribute("src",imagesrc);
    document.getElementById("icon"+(day+1)).setAttribute("alt",desc);

    day++;
  });
});