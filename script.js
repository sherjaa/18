var elForm = document.querySelector('.form')
var elInput = document.querySelector('.input')
var elOyniMalumoti = document.querySelector('.oyniMalumati')
elForm.addEventListener('submit', function(e){
    e.preventDefault()
    var massage = elInput.value.toLocaleLowerCase() + (' oyda')
    var elInputValue = elInput.value.toLocaleLowerCase()
    console.log(elInputValue)
    if (elInputValue === 'yanvar' || elInputValue === 'fevral' || elInputValue === 'mart' || elInputValue === 'may' || elInputValue === 'iyul' || elInputValue === 'avgust' || elInputValue === 'oktyabr' || elInputValue === 'dekabr'){
        console.log('31')
        elOyniMalumoti.textContent = massage += ' 31 kun bor'
    } else if(elInputValue === 'fevral'){
        console.log('28')
        elOyniMalumoti.textContent = massage += ' 28 kun bor'
    } else if(elInputValue === 'aprel' || elInputValue === 'iyun' || elInputValue === 'sentyabr' || elInputValue === 'noyabr'){
        console.log('30')
        elOyniMalumoti.textContent = massage +=' 30 kun bor'
    } else{
        console.log('oyni xato kiritingiz')
        elOyniMalumoti.textContent = 'oyni xato kiritingiz'
    }
    elInput.value = "";
})