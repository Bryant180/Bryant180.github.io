console.log("main.js is working")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let x = 100
let y = canvas.height - 50

let grounded = false

let vy = 0

function update() {
    console.log(grounded)
    let vyAbs = Math.abs(vy)
    let minErase = 1

    ctx.clearRect(x, y, 50, -vyAbs - minErase)
    ctx.clearRect(x, y, 50, 50 + vyAbs + minErase)
    y += vy
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 50, 50)
    collision()
    requestAnimationFrame(update)
}

update()

function collision() {
    if (y >= canvas.height - 50) {
        y = canvas.height - 50
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