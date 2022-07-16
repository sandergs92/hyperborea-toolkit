// Load content 
$(document).ready(function () {
    loadContent("weather")
});
function loadContent(view) {
    var file = 'views/' + view + '.html'
    $("#content").load(file)
}
// Scroll to func
function scrollTo(selector) {
    $(selector).get(0).scrollIntoView()
}
// DICE 
function rollDice(n, sides) {
    var a = Array(n)
    for (var i = 0; i < n; i++)
        a[i] = Math.floor(Math.random() * sides) + 1
    return a.reduce((a, b) => a + b, 0)
}