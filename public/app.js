window.onload = function() {
 main();


}


var quotes = [
  {name: "Jay Chetty", text: "Visual Basic is the way forward, I don't know why we are doing JavaScript."},
  {name: "Rick", text: "The only CSS you need to know is background-color: tomato"},
  {name: "Valerie", text: "I used the jQuery diet plugin and lost 10kg in a week."},
  {name: "Keith", text: "Scaffolding is nothing but a fiery hell."}
]


var main = function() {
   addQuote();


   var form = document.getElementById('add-quote-form');
   form.onsubmit = handleSubmit;
   
   form.onfocus = function() {
    var blockQuote = document.createElement('blockQuote');
    blockQuote.classList.add("quote");
    var article = document.createElement('article');
    var section = document.getElementById("quotes");
    // var button = document.createElement('button');
    // button.innerText = "Delete";

    article.appendChild(blockQuote);
    // article.appendChild(button);
    section.appendChild(article);
   }

   form.onkeyup = function() {
    var blockQ = document.getElementsByClassName('quote');
    var blockQ = blockQ[blockQ.length - 1];
    var input = document.getElementById("add-quote").value;
    blockQ.innerText = input;

   }

   
   

   var buttons = document.getElementsByClassName('but');
   
   for (var i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", function() {
       this.parentElement.remove();
     });
   }

   

  }

 

var handleSubmit =function( event ) {
  event.preventDefault();
  newQuote();

}

var newQuote = function() {
  var blockQ = document.getElementsByClassName('quote');
  var value = blockQ[blockQ.length - 1].innerText;
  blockQ[blockQ.length - 1].innerText = value;
 }


var addQuote = function() {
  var section = document.getElementById("quotes");

 
  for (var i = 0; i < quotes.length; i++) {
    var article = document.createElement('article');
    var blockQuote = document.createElement('blockQuote');
    var cite = document.createElement('cite');
    var button = document.createElement('button');
    button.innerText = "Delete";
    button.classList.add('but');
    blockQuote.innerText = quotes[i].text;
    blockQuote.classList.add("quote");
    cite.innerText = quotes[i].name;
    blockQuote.appendChild(cite);
    article.appendChild(blockQuote);
    article.appendChild(button);
    section.appendChild(article);
  }
 
}























