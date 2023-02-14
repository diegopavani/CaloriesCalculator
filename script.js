$(document).ready(function () {
    $('#form-2').hide();
    $('#form-3').hide();
    $('#form-4').hide();
    $('#results').hide();
});

let goal, age, h, w, fat;
function gain() {
    goal = "gain"
    $('#form-1').fadeOut();
    $('#form-2').delay(800).fadeIn();
    $('#age').val("");
    $('#height').val("");
    $('#weight').val("");
}
function keep() {
    goal = "keep"
    $('#form-1').fadeOut();
    $('#form-2').delay(800).fadeIn();
    $('#age').val("");
    $('#height').val("");
    $('#weight').val("");
}
function loss() {
    goal = "loss"
    $('#form-1').fadeOut();
    $('#form-2').delay(800).fadeIn();
    $('#age').val("");
    $('#height').val("");
    $('#weight').val("");
}

function form_2(next) {
    if (next) {
        if ($('#age').val()&&$('#height').val()&&$('#weight').val()) {
            age = $('#age').val();
            h = $('#height').val();
            w = $('#weight').val();
            $('#form-2').fadeOut();
            $('#form-3').delay(800).fadeIn();
        }
    } else {
        age=null, h=null, w=null;
        $('#form-2').fadeOut();
        $('#form-1').delay(800).fadeIn();
    }
}

function form_3(next) {
    if (next) {
        $('#form-3').fadeOut();
        $('#form-4').delay(800).fadeIn();
    } else {
        $('#form-3').fadeOut();
        $('#form-2').delay(800).fadeIn();
    }
}

function form_4(next) {
    if (next) {
        $('#form-4').fadeOut();
        $('#results').delay(800).fadeIn();
    } else {
        $('#form-4').fadeOut();
        $('#form-3').delay(800).fadeIn();
    }
}