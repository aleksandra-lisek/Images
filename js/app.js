document.addEventListener("DOMContentLoaded", function() {
    // console.log('hhhhhhhhhhhhhhhh');

    const gallery = document.querySelectorAll('.panel');

    const names = document.querySelectorAll('p');
    console.log(names);

    function scrollDown(number) {
        // const number = this.dataset.number;
        document.querySelector(`.animal-${number}`).scrollIntoView({
            behavior: "smooth"
        });

    }

    function addClassImg() {
        const number = this.dataset.number;
        this.classList.toggle('open');
        document.querySelector(`.animal-${number}`).classList.toggle('show');
        window.setTimeout(function() {
            scrollDown(number);
        }, 500);


    }





    gallery.forEach(ele => ele.addEventListener("click", addClassImg));
    gallery.forEach(ele => ele.addEventListener("transitionend", scrollDown));



});