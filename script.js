const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 8000
const breatheTime = 2500
const holdTime = 2000

breatheCircle()

function breatheCircle() {
  text.innerHTML = 'Breathe In'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold'

    setTimeout(() => {
      text.innerText = 'Breathe Out'
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}

setInterval(breatheCircle, totalTime)

var modal = document.getElementById("myModal");
var btns = document.querySelectorAll("#menu-items a");
var span = document.getElementsByClassName("close")[0];
var audios = document.querySelectorAll("#myModal audio");

btns.forEach((btn, index) => {
  btn.onclick = function(event) {
    event.preventDefault();
    audios.forEach((audio, audioIndex) => {
      if(audioIndex === index) {
        audio.style.display = "block";
      } else {
        audio.style.display = "none";
      }
    });
    modal.style.display = "block";
  }
});

span.onclick = function() {
    modal.style.display = "none";
    audios.forEach(audio => audio.pause()); /* Stop all audio */
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      audios.forEach(audio => audio.pause()); /* Stop all audio */
    }
  }

document.getElementById('menu').addEventListener('mouseover', function() {
    document.getElementById('menu-items').style.display = 'flex';
});

document.getElementById('menu').addEventListener('mouseout', function() {
    document.getElementById('menu-items').style.display = 'none';
});


document.querySelector('.play-btn').addEventListener('click', function() {
  var audio = document.getElementById('background_music');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

let wasMusicPlaying = false; // Skapa en ny variabel

btns.forEach((btn, index) => {
  btn.onclick = function(event) {
    event.preventDefault();
    wasMusicPlaying = !document.getElementById('background_music').paused; // Kontrollera om musiken spelades
    audios.forEach((audio, audioIndex) => {
      if(audioIndex === index) {
        audio.style.display = "block";
        audio.play();
        document.getElementById('background_music').pause();
      } else {
        audio.style.display = "none";
        if (!audio.paused) {
          audio.pause();
        }
      }
    });
    modal.style.display = "block";
  }
});

span.onclick = function() {
  modal.style.display = "none";
  audios.forEach(audio => {
    audio.pause();
    if (audio.currentTime !== 0) {
      audio.currentTime = 0;
    }
  });
  if (wasMusicPlaying) { // Om musiken spelades, återuppta den
    document.getElementById('background_music').play();
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    audios.forEach(audio => {
      audio.pause();
      if (audio.currentTime !== 0) {
        audio.currentTime = 0;
      }
    });
    if (wasMusicPlaying) { // Om musiken spelades, återuppta den
      document.getElementById('background_music').play();
    }
  }
}


// Referens till select-elementet för bakgrundsbilder
const backgroundSelect = document.getElementById('background-select');

// Lyssna på ändringar i bakgrundsbildsselecten
backgroundSelect.addEventListener('change', function() {
    const selectedBackground = backgroundSelect.value;
    // Tillämpa den valda bakgrundsbilden
    document.body.style.backgroundImage = `url(${selectedBackground})`;
});

// Get the select element and the circle element
const selectElement = document.getElementById('background-select');
const circleElement = document.querySelector('.circle');

// Listen for changes on the select element
selectElement.addEventListener('change', function() {
  // Get the selected option
  const selectedOption = selectElement.value;

  // Change the color of the circle based on the selected option
  if (selectedOption === 'forest-6761846.jpg') {
    circleElement.style.backgroundColor = 'black';
  } else if (selectedOption === 'sunset-4086848.jpg') {
    circleElement.style.backgroundColor = '#d47bb6';
  } else if (selectedOption === 'water-2208931.jpg') {
    circleElement.style.backgroundColor = '#103f47';
  }
});