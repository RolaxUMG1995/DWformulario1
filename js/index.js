const inputText = document.querySelectorAll(".Input-Form input[type='text']");
const submitButton = document.getElementById("submitButton");
const inputSex = document.querySelectorAll('input[name=sexForm]');
const inputBornDate = document.querySelector("input[type='date']");


function sendForm(e){
    e.preventDefault();
    if(checkInputText() && checkSex() && !isNaN(new Date(inputBornDate.value).getTime())){
        alert('Todos los campos han sido llenados...');
        return e.currentTarget.submit();
    }
    showEmptyInput();
}


function checkInputText(){

    for(let i = 0; i < inputText.length; i++){
        if(inputText[i].value === ""){
            return false;
        }
    }

    return true;
}

function showEmptyInput(){
    alert("No llenaste un campo...");
}

function checkSex(){
    let selected = false;
    for(let i = 0; i < inputSex.length; i++){
        if(inputSex[i].checked) selected = true
    }
    return selected;
}