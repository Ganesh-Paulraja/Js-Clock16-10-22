var eleClass = ['hour', 'min', 'sec', 'ampm', 'day', 'month', 'year'];
function updateTimer () {
  let date = new Date();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saterday'];
  let hour = date.getHours();
  let minute = date.getMinutes(); 
  let ampm;
  if(hour >= 12 && minute > 0) {
    ampm = 'P.M'
  } else if(hour == 12 && minute == 0) {
    ampm = 'noon'
  } else if (hour == 24 || hour == 0 && minute == 0) {
    ampm = 'midnight'
  } else {
    ampm = 'A.M'
  }
  if(hour > 12) {
    hour -= 12
  }
  const zero = (value) => {
    return (value < 10) ? '0' + value : value;
  }
  hour = (hour > 12) ? hour - 12 : hour;
  var dataClass = [zero(hour), zero(minute), zero(date.getSeconds()), ampm, days[date.getDay()], zero(date.getMonth()), zero(date.getFullYear())];
  for (i in eleClass) {
    document.getElementsByClassName(eleClass[i])[0].innerHTML = dataClass[i];
  }
}
setInterval(updateTimer, 1000);
// for (let a = 1; a < 201; a++) {
//   a = String(a);
//   if(a.length == 1 && a == 9) {
//     console.log(a);
//   }
//   if(a.length == 2 ) {
//     var b = Number(a[0]) + Number(a[1]);
//     if(Number(a[0] < a[1]) && b == 9) {
//       console.log(a);
//     }
//   }
//   if(a.length == 3 ) {
//     var b = Number(a[0]) + Number(a[1]) + Number(a[2]);
//     if(Number(a[0] < a[1]) && b == 9 && a[1] < a[2]) {
//       console.log(a);
//     }
//   }
// }
var add = (function() {
  var counter = 0;
  return function() {
    var c;
    counter += 1;
    return counter;
  }
})();
