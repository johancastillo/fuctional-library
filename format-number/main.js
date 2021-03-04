/*
=================
= Elements HTML =
=================
*/
let numberEl = document.getElementById("number")

/*
=========================
= Format number fuction =
=========================
*/
const formatNumber = numberString => {
    let num = numberString.replace(/\./g, '');
    
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        
        return num
    }else {
        return false
    }
}

/*
===============
= Update View =
===============
*/
const updateView = num => {
    numFormat = formatNumber(num)

    if(numFormat){
        numberEl.value = numFormat
    }else{
        alert('Solo se permiten numeros');
        numberEl.value = numberString.replace(/[^\d\.]*/g, '');
    }
}

/*
==========
= Events =
==========
*/
numberEl.addEventListener("keyup", e => {
    if(e.target.value){
        updateView(e.target.value)
    }
})

numberEl.addEventListener("change", e => {
    if(e.target.value){
        updateView(e.target.value)
    }
})

