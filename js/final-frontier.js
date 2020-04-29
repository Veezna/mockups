/** final-frontier.js
 * JavaScript for the final frontier CMS app 
 * 
 * Place your custom JavaScript in this document 
 */

"use strict";
var buttons = document.querySelectorAll('.readmore-button');
buttons.forEach(function(button){
    button.addEventListener('click', function(event) {
      var card = event.target.closest('.card');
      console.log('event');
      card.classList.add('expanded');
    });
});

var buttons = document.querySelectorAll('.close-button');
buttons.forEach(function(button){
    button.addEventListener('click', function(event) {
      var card = event.target.closest('.card');
      console.log('event');
      card.classList.remove('expanded');
    });
});

var buttons = document.querySelectorAll('.gallery-button');
buttons.forEach(function(button){
    button.addEventListener('click', function(event) {
      var card = event.target.closest('.card');
      console.log('event');
      card.classList.add('expanded');
    });
});