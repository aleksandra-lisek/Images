document.addEventListener("DOMContentLoaded", function() {
    // console.log('hhhhhhhhhhhhhhhh');

    const gallery = document.querySelectorAll('.panel');

        function addClass() {
            console.log('tralalalalal');
            this.classList.toggle('open')

        }

        gallery.forEach( img => img.addEventListener("click", addClass))


});
