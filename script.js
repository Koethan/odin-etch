alert('hello world')

let container = document.querySelector('#container')

for(let i = 0; i < (16*16); i++){
    let box = document.createElement('div')
    box.className = 'box'
    container.appendChild(box)

    box.addEventListener('mouseover', ()=>{
        console.log('hello there')
        box.classList.toggle('effect')
    })
}

