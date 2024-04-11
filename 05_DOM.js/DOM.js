//Document object model- frontend ki javascript
//4 Pillars of DOM:
//1. Selection of an element 
//2. Changing HTML
//3. Changing CSS
//4. Event listener
var a = document.querySelector("h1") //document query selector aka 1st pillar of DOM
console.log(a);

var b = document.querySelector("h2") //changing HTML aka 2nd pillar of DOM
b.innerHTML = "Hahaha"

var c = document.querySelector("h2") //changing CSS aka 3rd pillar of DOM
c.style.accentColor = "red"

