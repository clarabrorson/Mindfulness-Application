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