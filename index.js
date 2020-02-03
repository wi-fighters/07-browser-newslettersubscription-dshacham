(() => {
    const section = document.querySelector('section');
    const close = document.querySelector('span');

    const subPop = function (event) {
        if (event.clientY < 10) {
            section.classList.add('popup');
        };
    };
    document.body.addEventListener('mousemove', subPop, false);

    const closePop = function () {
        section.classList.remove('popup');
    };

    close.addEventListener('click', closePop, false);
})();