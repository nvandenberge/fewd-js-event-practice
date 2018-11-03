(function () {
    const buttons = document.querySelectorAll('button')
    const firstButton = buttons[0]
    const secondButton = buttons[1]
    const thirdButton = buttons[2]

    firstButton.addEventListener('click', function () {
      firstButton.classList.toggle('button-danger');
    })

    secondButton.addEventListener('click', function () {
      secondButton.innerText = 'you clicked me';
    })

    
})();
