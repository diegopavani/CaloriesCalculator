$(document).ready(function () {
    $('#form-2').hide();
    $('#form-3').hide();
    $('#form-4').hide();
    $('#results').hide();
});

let goal, age, h, w, fat, work, gym, others, tmr, met, cal, p, f, c;

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
            fat = $('#fatness').val();
            $('#form-2').fadeOut();
            $('#form-3').delay(800).fadeIn();
        }
    } else {
        age=null, h=null, w=null, fat=null;
        $('#form-2').fadeOut();
        $('#form-1').delay(800).fadeIn();
    }
}

function form_3(next) {
    if (next) {
        work = $('#work').val();
        $('#form-3').fadeOut();
        $('#form-4').delay(800).fadeIn();
    } else {
        work=null;
        $('#form-3').fadeOut();
        $('#form-2').delay(800).fadeIn();
    }
}

function form_4(next) {
    if (next) {
        gym = $('#gym').val();
        others = $('#check').val();
        $('#form-4').fadeOut();
        $('#results').delay(800).fadeIn();
    } else {
        gym=null, others=null;
        $('#form-4').fadeOut();
        $('#form-3').delay(800).fadeIn();
    }
}

function result(){
    if(fat){
        tmr = (19.7*(w-(w*(fat/100))))+413;
    }else{
        tmr = 66,4730+(13,7516*w)+(5,0033*h)-(6,75550*age);
    }

    met = (1.5*work*w)+(6*gym*w)+(5*1*w);

    if(goal==="loss") cal = (tmr*1.2)+met-500;
    if(goal==="keep") cal = (tmr*1.2)+met;
    if(goal==="gain") cal = (tmr*1.2)+met+1000;
}