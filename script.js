const button = document.querySelector('.button')
const counter = document.querySelector('.counter')

let i = 0

button.addEventListener('click', () => {
  i++
  counter.innerHTML = i
})
