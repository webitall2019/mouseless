
document.addEventListener("DOMContentLoaded", function(event) {
  
var countDownDate = new Date("Jan 5, 2021 10:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML =  '<span class="timer-value">' + 0 + 0 + '</span>' + ' ' + '<span class="timer-value">' + hours + '</span>' + ' ' + '<span class="timer-value">' + minutes + '</span>' + ' ' + '<span class="timer-value">' + seconds + '</span>';
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

  function showLeftContent(){
    var faqHeader = document.querySelectorAll('.icon');
    var faqText = document.querySelectorAll('.list__item-content');
      for(let i = 0; i < faqText.length; i++){
        console.log(faqText[i].parentElement);
        faqText[i].parentElement.addEventListener('click', function(){
          faqText[i].classList.toggle('show');
        })
      }
    
  }
  showLeftContent();
});