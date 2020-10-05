// calculator input

const button = document.querySelectorAll(".btn btn-primary")
button.onclick =  getVal
//("click", getVal)

function getVal() {
let val = document.querySelectorAll(".btn btn-primary").textContent
let element = document.createElement("p");
element.appendChild(document.createTextNode(val))
document.getElementById("flex-bot-result").appendChild(element);

}




function clear(){
    document.getElementById('flex-box-result').remove();
}