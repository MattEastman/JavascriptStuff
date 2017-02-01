// script.js

function newGame(){
    
    
};
newGame();


/*
constructer notation - Use your discretion about when you need a class and when a simple object will do. If the object will not be reused, let it be a simpel object. If the object will be used over and over again - eg freinds constructor and then use constructor to create various freinds. 

var SchoolyardKid = function(name) {
this.name = name;
this.canHelp = false;
this.responses = {
homework: "Sorry, I'm doing homework.",
scared: "No way, Nelson is a beast!",
brave: "Sure, I've been meaning to get back at that jerk."
};
}

use prototype to extend class, can add functions or values

SchoolYardKid.prototype.randomResponse = function() {
var randomNum = Math.floor((Math.random() * 3) + 1);
if (randomNum === 1) {
return this.responses.homework;
} else if (randomNum === 2) {
return this.responses.scared;
else {
return this.responses.brave;
}
};


Alert / prompts
/t = tabs
/n = next paragrapgh 

*/