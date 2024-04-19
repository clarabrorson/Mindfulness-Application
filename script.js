// BREATHING CIRCLE ANIMATION

// These variables are used to select the container and text elements from the HTML
//document.querySelector() is a built-in JavaScript function that allows you to select an element from the HTML
const container = document.querySelector('.container')
const text = document.querySelector('#text')

// These variables are used to set the total time, breathe time, and hold time for the breathing circle
const totalTime = 8000
const breatheTime = 2500
const holdTime = 2000

breatheCircle()

// This function is used to change the text and class of the container element
// The text is changed to 'Breathe In' and the class is changed to 'container grow'. This class is used to increase the size of the container element
// The setTimeout() function is used to delay the change of text and class. This will pause the program allowing the user to hold their breath
// The text is then changed to 'Hold' and the class is not changed. This will keep the container element at the same size
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

// The setInterval() function is used to call the breatheCircle() function at regular intervals
// The totalTime variable is used to set the interval time
setInterval(breatheCircle, totalTime)

// MODAL, MENU AND AUDIO CONTROL

var modal = document.getElementById("myModal");
var btns = document.querySelectorAll("#menu-items a");
var span = document.getElementsByClassName("close-myModal")[0];
var audios = document.querySelectorAll("#myModal audio");

// This forEach loop is used to add an event listener to each button element
// These event listeners will display the modal when a button is clicked
// The buttons are clicked when the user selects a meditation from the menu

btns.forEach((btn, index) => {
  // Check if the link has the class 'yoga'
  if (!btn.classList.contains('yoga')) { // if the link does not have the class 'yoga', then add an event listener that will display modal (Helped by CHATGPT)
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
  }
});

// This event listener is used to close the modal when the close button is clicked
span.onclick = function() {
    modal.style.display = "none";
    audios.forEach(audio => audio.pause()); 
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      audios.forEach(audio => audio.pause());
    }
  }

// Thisfunction is used to display the menu items when the menu is hovered over
document.getElementById('menu').addEventListener('mouseover', function() {
    document.getElementById('menu-items').style.display = 'flex';
});

// This function is used to hide the menu items when the menu is not hovered over
document.getElementById('menu').addEventListener('mouseout', function() {
    document.getElementById('menu-items').style.display = 'none';
});

// This function gets the play button and the audio element from the HTML
// The addEventListener() function is used to listen for a click event on the play button
document.querySelector('.play-btn').addEventListener('click', function() {
  var audio = document.getElementById('background_music');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// This variable is used to keep track of whether the music was playing before the modal was opened
let wasMusicPlaying = false; 

// This forEach loop is used to add an event listener to each button element
//When a button is clicked, the corresponding audio is played and the background music automatically pauses


btns.forEach((btn, index) => {
  if (!btn.classList.contains('yoga')) { 
    btn.onclick = function(event) {
      event.preventDefault();
      wasMusicPlaying = !document.getElementById('background_music').paused;
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
  }
});

// When the close button is clicked, the modal is hidden and all audio elements are paused
span.onclick = function() {
  modal.style.display = "none";
  audios.forEach(audio => {
    audio.pause();
    if (audio.currentTime !== 0) {
      audio.currentTime = 0;
    }
  });
  // if the music was playing, resume it
  if (wasMusicPlaying) { 
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
    if (wasMusicPlaying) { 
      document.getElementById('background_music').play();
    }
  }
}


// BACKGROUND SELECTION FUNCTIONALITY
// This function lets the user select a background image

// Preload images to avoid delay when changing background
// This array is used to store the images before they are loaded, this will prevent the images from being loaded when the user selects a background
const images = ['forest-6761846.jpg', 'sunset-6911736.jpg', 'water-2208931.jpg'];

images.forEach(image => {
    const img = new Image();
    img.src = image;
});

const backgroundSelect = document.getElementById('background-select');

// This event listener is used to listen for clicks on the buttons
backgroundSelect.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const selectedBackground = e.target.value;
        // This line of code changes the background image of the body element to the selected background
        document.body.style.backgroundImage = `url(${selectedBackground})`;
    }
});

// This function is used to change the background color of the circle based on the selected option
const circleElement = document.querySelector('.circle');

backgroundSelect.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const selectedOption = e.target.value;
        // This if statement is used to change the background color of the circle based on the selected option
        if (selectedOption === 'forest-6761846.jpg') {
            circleElement.style.backgroundColor = 'black';
        } else if (selectedOption === 'sunset-6911736.jpg') {
            circleElement.style.backgroundColor = '#411c4a';
        } else if (selectedOption === 'water-2208931.jpg') {
            circleElement.style.backgroundColor = '#06323d';
        }
    }
});

// API QUOTES FUNCTIONALITY

document.getElementById('quoteBug').addEventListener('click', function() {
  
  fetch("https://type.fit/api/quotes")
      .then(function(response) {
          return response.json();
      })

      .then(function(apiQuotes) {
        
        var ownQuotes = [
            { text: "The season of failure is the best time for sowing the seeds of success." },
            { text: "If the plan doesn't work, change the plan, but never the goal." },
            
        ];

        // Places my quotes at desired indexpositions in the array
        apiQuotes.splice(8, 0, ownQuotes[0]); 
        apiQuotes.splice(9, 0, ownQuotes[1]); 

        var quotesDiv = document.getElementById('modalQuotes');
        var quoteIndex = 7;
       
        // This function is used to update the quote displayed in the modal
        function updateQuote() {
          quotesDiv.innerHTML = '';
          var div = document.createElement('div');
          div.className = 'quoteContainer';
          var p = document.createElement('p');
          p.innerText = apiQuotes[quoteIndex].text;
          div.appendChild(p);
          quotesDiv.appendChild(div);
          quoteIndex = (quoteIndex + 1) % apiQuotes.length;
      }
        // This code is used to update the quote every 10 seconds
        updateQuote();
        setInterval(updateQuote, 7000);

          var modal = document.getElementById("myModalQuotes");

          var span = document.getElementsByClassName("close-myModalQuotes")[0]; 

          // When the user clicks on the quoteBug the modal opens
          modal.style.display = "block";

          // When the user clicks on <span> (x) the modal closes
          span.onclick = function() {
            modal.style.display = "none";
          }

      });
}); 








