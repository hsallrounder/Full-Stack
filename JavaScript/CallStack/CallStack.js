	function first() {
    second();
    console.log("first...");
}
function second() {
    console.log("second....");
    third();
}
function third() {
    console.log("third....");
}
first();