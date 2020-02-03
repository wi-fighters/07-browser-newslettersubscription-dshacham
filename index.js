(() => {
    const section = document.querySelector('section');
    const close = document.querySelector('span');

    const showPop = function (event) {
        if (event.clientY < 10) {
            section.classList.remove('hidden');

        };
    };

    const closePop = function () {
        section.classList.add('hidden');
    };

    document.body.addEventListener('mousemove', showPop, false);
    close.addEventListener('click', closePop, false);
})();