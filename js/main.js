// Load content 
$(document).ready(function () {
    loadContent("weather")
});
function loadContent(view) {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'views/' + view + '.html'
        $(this).load(file)
    })
}
// DICE 
function rollDice(n, sides) {
    var a = Array(n);
    for (var i = 0; i < n; i++)
        a[i] = Math.floor(Math.random() * sides) + 1;
    return a.reduce((a, b) => a + b, 0)
}