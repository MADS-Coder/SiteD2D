const corpo = document.getElementById('imagem7')
corpo.addEventListener('click', event => {
  const classElemento = event.target.classList[0]
  const className = event.target.className
  const popup = document.querySelector('.popup-wrapper-' + className)


  if (classElemento == 'impressora') {
    popup.style.display = "block"
  } else if (classElemento == 'terminal') {
    popup.style.display = "block"
  } else if (classElemento == 'gaveta') {
    popup.style.display = "block"
  } else if (classElemento == 'leitor') {
    popup.style.display = "block"
  }

  popup.addEventListener('click', event => {
    const classElemento = event.target.classList[0]
    const className = ['popup-close', 'popup-wrapper-impressora', 'popup-wrapper-terminal', 'popup-wrapper-gaveta', 'popup-wrapper-leitor']
    const shouldClosepopup = className.some(className => className === classElemento)

    if (shouldClosepopup) {
      popup.style.display = 'none'
    } else {
      popup.style.display = 'none'
    }
  })

})

