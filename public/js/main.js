(function () {
    const buttons = document.querySelectorAll('button')
    const firstButton = buttons[0]

    firstbutton.addEventListener('click', function () {
      firstButton.classList.toggle('button-danger');
    })

}


})();
