const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const className = ['popup-close', 'popup-wrapper', 'popup-link']
    const shouldClosePopup = className.some(className =>
      className === classNameOfClickedElement) //método de array some, ele irá iterar sobre o array e ver se alguma das condições vai ser aproveitada

    if (shouldClosePopup) {
    popup.style.display = 'none'
    }
})
