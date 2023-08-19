 const main = document.querySelector('main')
 const root = document.querySelector(':root')
 const input = document.getElementById('input')
 const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter'){
        calculate()
    }
})

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value 
        input.value += value
    })
})
    
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

document.getElementById('equal').addEventListener('click', calculate)
        
function calculate(){
   const  result = eval(input.value)
   resultInput.value = result
}

document.getElementById('copyToClipboard').addEventListener('click', function (ev){
    const button = ev.currentTarget
    if (button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if( main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color','#f5f5f5')
        root.style.setProperty('--font-color','#000000')
        root.style.setProperty('--primary-color','#20b2aa')
        root.style.setProperty('--hover-color','#0ec4ba')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color','#1d1d1d')
        root.style.setProperty('--font-color','#ffffff')
        root.style.setProperty('--primary-color','#44ffe0fd')
        root.style.setProperty('--hover-color','#c6fff5fd')
        main.dataset.theme = 'dark'
    }
    
})