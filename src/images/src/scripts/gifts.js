$(document).ready(function () {

    console.log('fsdfs');

    $('input[type=radio][name=gifts]').change(function () {
        console.log(this.parent());
    });

});