document.getElementById('change').addEventListener('click', function() {
  // Change background color
  document.body.style.backgroundColor = 'lightcoral';

  // Play a song on repeat (you can replace the URL with your desired song)
  var audio = new Audio('song1.mp3');
  audio.loop = true;  // Set the loop property to true
  audio.play();
});

  document.getElementById('change').addEventListener('click', function() {
    // Get the image element
    var imageElement = document.getElementById('gif1');
    imageElement.src = 'https://i.gifer.com/6kc.gif';


 // Show the additional content
 var additionalContent = document.getElementById('additionalContent');
 additionalContent.style.display = 'block';
});

function nextPage() {
  window.location.href = "yay.html";
}

function moveButton() {
  var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
  var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
  document.getElementById('noButton').style.left = `${x}px`;
  document.getElementById('noButton').style.top = `${y}px`;
}