let redSlider = document.querySelector('#redSlider')
let greenSlider = document.querySelector('#greenSlider')
let blueSlider = document.querySelector('#blueSlider')
let container = document.querySelector('.container')
let currentR = '00'
let currentG = '00'
let currentB = '00'

container.addEventListener('input', function () {

  if (event.target.matches('#redSlider')) { // Red slider change
    let rValue = redSlider.value // Get slider value
    currentR = parseInt(rValue).toString(16) // Convert to 16 base and set to current

    if (rValue >= 0 && rValue < 16) { // Special handle single digit number
      currentR = '0' + currentR
    }
    document.querySelector('#redValue').innerText = rValue // Label show decimal value

  } else if (event.target.matches('#greenSlider')) { // Green slider change
    let gValue = greenSlider.value
    currentG = parseInt(gValue).toString(16)

    if (gValue >= 0 && gValue < 16) {
      currentG = '0' + currentG
    }
    document.querySelector('#greenValue').innerText = gValue

  } else if (event.target.matches('#blueSlider')) { // Blue slider change
    let bValue = blueSlider.value
    currentB = parseInt(bValue).toString(16)

    if (bValue >= 0 && bValue < 16) {
      currentB = '0' + currentB
    }
    document.querySelector('#blueValue').innerText = bValue
  }
  document.querySelector('h2').innerText = '#' + currentR + currentG + currentB // Concatenate hex code
  document.querySelector('body').style.backgroundColor = document.querySelector('h2').innerText
})