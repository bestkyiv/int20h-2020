document.addEventListener('DOMContentLoaded', function () {
    let cube = document.getElementsByName('select-face');
    let counter = 2;


    function changeCube() {
        if (counter < 0)
            counter = cube.length - 1;
        else if (counter >= cube.length)
            counter = 0;
        cube[counter].checked = true;
    }
    
    counter++;
    // var timeinterval = setInterval(changeCube, 5000);


    let arrows = document.getElementsByClassName("memories__arrow");
    let arrowLeft = arrows[0];
    let arrowRight = arrows[1];

    arrowLeft.addEventListener('click', function () {
        counter--;
        changeCube();
    });

    arrowRight.addEventListener('click', function () {
        counter++;
        changeCube();
    });

});




