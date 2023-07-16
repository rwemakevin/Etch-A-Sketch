//get container for all Divs
const container = document.getElementById("flex")

//Get all grid-items Divs
const gridItems = document.querySelectorAll(".grid-item");

//Get input Data
const input = document.querySelector("#input")

//get button Data
const button = document.querySelector("#button")

//initialize value  to hold input data
let inputValue = 0;

//default Grid
const defaultDiv1 = document.createElement('div')
const defaultDiv2 = document.createElement('div')
const defaultDiv3 = document.createElement('div')
const defaultDiv4 = document.createElement('div')
defaultDiv1.classList.add('grid-item')
defaultDiv2.classList.add('grid-item')
defaultDiv3.classList.add('grid-item')
defaultDiv4.classList.add('grid-item')
defaultDiv1.style.flexBasis = '50%';
defaultDiv2.style.flexBasis = '50%';
defaultDiv3.style.flexBasis = '50%';
defaultDiv4.style.flexBasis = '50%';
defaultDiv1.setAttribute('onmouseover','this.style.backgroundColor = "#949292"')
defaultDiv2.setAttribute('onmouseover','this.style.backgroundColor = "#949292"')
defaultDiv3.setAttribute('onmouseover','this.style.backgroundColor = "#949292"')
defaultDiv4.setAttribute('onmouseover','this.style.backgroundColor = "#949292"')
container.appendChild(defaultDiv1)
container.appendChild(defaultDiv2)
container.appendChild(defaultDiv3)
container.appendChild(defaultDiv4)



// add event listener to button, and get input value
button.addEventListener("click", function(){
    
    // reset grid items
    const newDivs = document.querySelectorAll(".grid-item")
    for (let j = 0; j < newDivs.length; j++){
        container.removeChild(newDivs[j])
    }

    inputValue = input.value;
    if(inputValue < 100){
    let proposed = []
    let flexB = 100 / inputValue;
    for(let i =0; i < inputValue * inputValue; i++){
        proposed[i]= document.createElement('div')
        proposed[i].classList.add('grid-item')
        proposed[i].style.flexBasis = `${flexB}%`
        proposed[i].setAttribute('onmouseover','this.style.backgroundColor = "#949292"')
        container.appendChild(proposed[i])
        console.log(proposed[i])
        
}

    }else {
        alert("Number too High! pick between 1 and 100")
    }
   
    
})

function reload(){
    location.reload();
}























