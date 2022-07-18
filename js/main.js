// Load content 
$(document).ready(function () {
    loadContent("name")
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
// Object expand function
// example:
// var amazonian = expand({
//     "0, 1": { female: "foo", male: "bar"}
// });
function expand(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i],
            subkeys = key.split(/,\s?/),
            target = obj[key];
        delete obj[key];
        subkeys.forEach(function(key) { obj[key] = target; })
    }
    return obj;
}