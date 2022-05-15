let out = document.querySelector('.display-field')
const num = document.querySelectorAll('.item')
const c = document.querySelector('.c')
const ac = document.querySelector('.ac')
const backSpace = document.querySelector('.backSpace')
const ms = document.querySelector('.ms')
const mr = document.querySelector('.mr')
const mc = document.querySelector('.mc')
const mp = document.querySelector('.mp')
const mm = document.querySelector('.mm')
const rvt = document.querySelector('.rvt')


// calculation

function insert(key) {
    
    if(key.textContent == '=' || key.textContent == '+/-') {
        if(key.textContent == '=') {
            returnValue()
            let b = eval(out.value)
            
            return out.value = b.toFixed(8).replace(/0*$/, '') - 1 + 1
        }
        if(key.textContent == '+/-'){
            return out.value = out.value * -1
        }
       
    }else{
        if(out.value.length < 20) {
            out.value = out.value + key.textContent;
           
            
            return out
        }
    }

  
}

for(const key of num) {
    key.addEventListener('click', () => {
        insert(key)
    })
    
}


// clear

function clear () {
    out.value = ''
    rvt.classList.add('rvt')
    return
}

function back () {
    out.value = out.value.substring(0, out.value.length - 1)
    if(out.value == '') {
        rvt.classList.add('rvt')
    }
    
    return 
}


function allClear () {
    clear()
    clearMemory()
    
}

c.addEventListener('click', () => clear())
backSpace.addEventListener('click', () => back())
ac.addEventListener('click', () => allClear())



// memory
let memory

function save () {
    memory = out.value
    mr.style.color = 'red';
}

function read () {
   out.value = memory.toFixed(8).replace(/0*$/, '')-1+1
}

function clearMemory () {
    memory = ''
    mr.style.color = ''
}

function plus () {
    if (memory != '') {
        return memory = +memory + +out.value
    }
}

function minus () {
    if (memory != '') {
        return memory = memory - out.value
    }
}

ms.addEventListener('click', () => save())
mr.addEventListener('click', () => read())
mc.addEventListener('click', () => clearMemory())
mp.addEventListener('click', () => plus())
mm.addEventListener('click', () => minus())

// Rvt

let lastValue 

function returnValue () {
    lastValue = out.value
    rvt.classList.remove('rvt')
}

rvt.addEventListener('click', () => out.value = lastValue)