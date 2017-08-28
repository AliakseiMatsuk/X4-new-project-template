$(document).ready(function() {
    var obj = {
        before: "test",
        fill: "red",
        after: "Lorem"
    }
    $('.list__item').data("obj",obj);
    console.log($('.list__item').data());
});