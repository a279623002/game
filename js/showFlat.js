function showFlat() {
    $('#cover').show();
    $('#flat').show();
}
function closeFlat() {
    $('.showFlat').hide();
    $('#cover').hide();
}
function showOrther() {
    $('#cover').show();
    $('#orther').show();
}
function showQuick() {
    $('#cover').show();
    $('#quick').show();
}
function showHuzi() {
    $('#cover').show();
    $('#huzi').show();
}
function showDouniu() {
    $('#cover').show();
    $('#douniu').show();
}
function showPaixing() {
    $('#cover').show();
    $('#paixing').show();
}
function showHaopai() {
    $('#cover').show();
    $('#haopai').show();
}
function showZimo() {
    $('#cover').show();
    $('#zimo').show();
}
function showWzry() {
    $('#cover').show();
    $('#wzry').show();
}
function showCustom() {
    $('#cover').show();
    $('#custom').show();
}


$(function () {
    $('#flat input[name="flat-radio"]').click(function () {
        $('p.flat').text($(this).val());
        closeFlat();
    });
    $('#orther input[name="flat-radio"]').click(function () {
        $('p.orther').text($(this).val());
        closeFlat();
    });
    $('#quick input[name="flat-radio"]').click(function () {
        $('p.quick').text($(this).val());
        closeFlat();
    });
    $('#huzi input[name="flat-radio"]').click(function () {
        $('p.huzi').text($(this).val());
        closeFlat();
    });
    $('#douniu input[name="flat-radio"]').click(function () {
        $('p.douniu').text($(this).val());
        closeFlat();
    });
    $('#paixing input[name="flat-radio"]').click(function () {
        $('p.paixing').text($(this).val());
        closeFlat();
    });
    $('#haopai input[name="flat-radio"]').click(function () {
        $('p.haopai').text($(this).val());
        closeFlat();
    });
    $('#zimo input[name="flat-radio"]').click(function () {
        $('p.zimo').text($(this).val());
        closeFlat();
    });
    $('#wzry input[name="flat-radio"]').click(function () {
        $('p.wzry').text($(this).val());
        closeFlat();
    });
    $('#custom input[name="flat-radio"]').click(function () {
        $('p.custom').text($(this).val());
        closeFlat();
    });
})
