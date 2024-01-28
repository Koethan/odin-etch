alert('hello world')

let container = document.querySelector('#container')
let btn = document.querySelector('button')

function createGrid(number){
    for(let i = 0; i < (number*number); i++){
        container.removeChild
        let box = document.createElement('div')
        box.className = 'box'
        box.style.height = `${640/number}px`
        box.style.width = `${640/number}px`
        container.appendChild(box)
    
        box.addEventListener('mouseover', ()=>{
            console.log('hello there')
            box.classList.toggle('effect')
        })
    }
}


btn.addEventListener('click', ()=>{
    let newGrid = Number(prompt('please enter a number less than 100 to create a new grid'))
    if(newGrid > 100){
        newGrid = 100;
    }
    console.log(newGrid)
    container.innerText = ''
    createGrid(newGrid)
    
})

createGrid(16);
