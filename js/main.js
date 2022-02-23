



var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elselect = document.querySelector(".form__select");
var eloption = document.querySelector(".form__result");

elForm.addEventListener("submit", function(event){
    event.preventDefault();

    var elInputVal = elInput.value;
    var elSelectVal = elselect.value;


    elResult.textContent = (elInputVal * elSelectVal);

})


var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSelect = document.querySelector(".form__select");
var elResult = document.querySelector(".form__result");


elForm.addEventListener("submit", function(event){
    event.preventDefault();

    var elInputVal = elInput.value;
    var elSelectVal = elSelect.value;

    elResult.textContent = (elInputVal * elSelectVal);
})


