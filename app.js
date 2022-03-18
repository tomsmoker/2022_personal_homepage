'use strict'

$(window).on('load', () => {

    const switchButton = document.getElementById('dark-mode');

    switchButton.addEventListener('click', function() {

        document.body.classList.toggle('dark-mode');

        let currentClassName = document.body.className;

        if(currentClassName == 'dark-mode') {
            switchButton.innerHTML = "Make it light mode";
        } else {
            switchButton.innerHTML = "Make it dark mode";
        }
    });

});