const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// months are Zero index based here
const futureData = new Date(tempYear, tempMonth, tempDay + 10, 10, 30, 0);

// console.log(futureData);

// find a month, day, date here
const year = futureData.getFullYear();
const hours = futureData.getHours();
const minutes = futureData.getMinutes();

// set data to fiveaway here

// get month to months array
let month = months[futureData.getMonth()];
let weekday = weekdays[futureData.getDay()];
let day =futureData.getDate();


// set data for giveaway here now
giveaway.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year}, ${hours}:${minutes}am`;

// future time
const futureTime = futureData.getTime();

const comDownTime = () => {

  // this time is today now
  const today = Date.now();

  // future time and today time - here

  const countTime = futureTime - today;

  // find a day, hours, minute here
  // 1s = 1000ms
  // 1m = 60s
  // 1hr =60m
  // 1d = 24hr

  // values in miliseoncs
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour =  60 * 60 * 1000;
  const oneMinute =  60 * 1000;


  let days = Math.floor(countTime / oneDay);
  let hour = Math.floor((countTime % oneDay) / oneHour);
  let minutes = Math.floor((countTime % oneHour) / oneMinute);
  let seconds = Math.floor((countTime % oneMinute) / 1000);

  // set values array 
  const values = [days, hour, minutes, seconds];


  // left 0 set condition here

  function format(item){
    if(item < 10){
      return (item = `0${item}`);
    }
    return item;
  }

 

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });


   // countTime Is empty this message to output
   if(countTime < 0 ){

    // stop setInterval now
    clearInterval(countDown);
    deadline.innerHTML = `<h4  style="color: red;" class="expired">sorry, this giveaway has expired!</h4>`;
  
  }
}

let countDown = setInterval(comDownTime, 1000);

comDownTime();