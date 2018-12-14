// Changing CSS property with jQuery
//$("h1").css("color", "green");

// Obtaining the property value with jQuery
var h1FontSize = $("h1").css("font-size");
console.log(h1FontSize);

/* Using  Javascript for the style is not advised.
Same result can be obtained by focusing the Javascript on the behaviour,
like f.e. adding a class or classes etc.
*/
$("h1").addClass("big-title margin-50");

// Checking if the element has given class
var hasClassMargin50 = $("h1").hasClass("margin-50");
console.log(hasClassMargin50);

// Changing the text of the header h1 to Hello, + name !
var name = "Wojciech";
$("h1").text("Hello, " + name + "!");

// Changing HTML of an element (previous using Javascript's .innerHTML)
//$("button").html("<strong>Button</strong>");

// Chainging attributes
// Class is an attribute as well!
$("a").attr("href", "https://google.com");

// Adding an event listener
// jQuery adds the event listener to all the buttons
$("button").click(function(){
  $("h1").css("color", "purple");
});

// Adding a keypress logging to the whole page
$(document).keypress(function(event){
  console.log(event.key);
});

// Adding an event listener for mouseenter and mouseleave
$("h1").on({
    mouseenter: function () {
        $("h1").css("color", "red");
    },
    mouseleave: function () {
        $("h1").css("color", "yellow");
    }
});

/* Adding and removing elements
- before
- after
- prepend
- append
*/

$(".button-before").on("click", function(){
  $("h1").before("<button> New Before Button </button>");
});

$(".button-after").on("click", function(){
  $("h1").after("<button> New After Button </button>");
});

$(".button-prepend").on("click", function(){
  $("h1").prepend("<button> New Prepend Button </button>");
});

$(".button-append").on("click", function(){
  $("h1").append("<button> New Append Button </button>");
});

// Annimate
$(".button-toggle-h1").on("click", function(){
  $("h1").toggle();
});

$(".button-slideToggle-h1").on("click", function(){
  $("h1").slideToggle();
});

$(".button-animate-h2").on("click", function(){
  $("h2").slideUp().slideDown().animate({opacity: 0.5});
});
