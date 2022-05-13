let out = document.querySelector('.display-field')
let num = document.querySelectorAll('.item')
let c = document.querySelector('.c')
let ac = document.querySelector('.ac')
let backSpace = document.querySelector('.backSpace')



// calculation

function insert(key) {
    
    if(key.textContent == '=' || key.textContent == '+/-') {
        if(key.textContent == '=') {
            return out.value = eval(out.value)
        }
        if(key.textContent == '+/-'){
            return out.value = out.value * -1
        }
       
    }else{
        out.value = out.value + key.textContent;
        console.log(out.value)
        return out
    }

  
}

for(const key of num) {
    key.addEventListener('click', () => {
        insert(key)
    })
    
}


// clear

function clear () {
    return out.value = ''
}

function back () {
    return out.value = out.value.substring(0, out.value.length - 1)
}


c.addEventListener('click', () => clear())
backSpace.addEventListener('click', () => back())



// memory