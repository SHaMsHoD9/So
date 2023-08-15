var images = document.querySelectorAll('img');

document.querySelector('.left').onclick = left;
document.querySelector('.right').onclick = right;

var counter = 0;
var li = document.querySelectorAll('li');


function right() {
    images[counter].classList.remove('active');
    li[counter].classList.remove('active-li');
    counter++;


    if (images.length == counter) {
        counter = 0;
    }

    images[counter].classList.add('active');
    li[counter].classList.add('active-li');


     
    clearTimeout(timer);
    autoplay();
}



function left() {

    images[counter].classList.remove('active');
    li[counter].classList.remove('active-li');
    counter--;

    if (counter < 0) {
        counter = images.length - 1;
    }


    images[counter].classList.add('active');
    li[counter].classList.add('active-li');




    clearTimeout(timer);
    autoplay();
}




for (var i = 0; i < li.length; i++) {
    li[i].onclick = function () {

        for (var j = 0; j < li.length; j++) {
            li[j].classList.remove('active-li');
            images[j].classList.remove('active');
        }

        this.classList.add('active-li');
        var dataSlide = this.getAttribute('data-slide');
        images[dataSlide].classList.add('active');
        counter = dataSlide;
    }
}

var timer;

function autoplay(){
    timer = setTimeout(right, 1000)
}


autoplay();