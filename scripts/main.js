console.log("main.js is working")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const moose = document.getElementById("moose")

//ctx.drawImage(moose, 0, canvas.height - 100, 100, 100)

/*
let x = 100
let y = canvas.height - 50
*/

let x = 150
let y = canvas.height

let grounded = false

let vy = 0


function update() {
    console.log(grounded)
    let vyAbs = Math.abs(vy)
    let minErase = 1

    ctx.clearRect(x, y, 100, -vyAbs - minErase)
    ctx.clearRect(x, y, 100, 100 + vyAbs + minErase)
    y += vy

    fillBackground()

    ctx.drawImage(moose, x, y, 100, 100)
    collision()
    requestAnimationFrame(update)
}

update()

function fillBackground() {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function fillBlue(x, y, width, height) {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, width, height)
}


function collision() {
    if (y >= canvas.height - 100) {
        y = canvas.height - 100
        vy = 0
        grounded = true
    }
}

setInterval(function Gravity() 
{
    if (!grounded) {
        vy += .1
    }
    
})