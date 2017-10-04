document.addEventListener("DOMContentLoaded", function() {
    // console.log('hhhhhhhhhhhhhhhh');

    const gallery = document.querySelectorAll('.panel');

    const names = document.querySelectorAll('p');
    console.log(names);

        function addClassImg() {
            this.classList.toggle('open');
        }


        gallery.forEach( img => img.addEventListener("click", addClassImg));



});
