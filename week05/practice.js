 
 //we will try to get the date throught our array and the method date 
 let day = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Thursday'
  ];
 
 let d = new Date();
 let dayName = d.getDay();
 //let fullDay = "Today is:" + dayName +  d.getDate(); this don't work  the output was undefined.
 let today = "Today is:" + day[dayName] + "." ;
 //console.log(today);
 document.getElementById("date").innerHTML= today;

