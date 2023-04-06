console.log("main.js is working")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const moose = document.getElementById("moose")


let playerPosX = 150
let playerPosY = canvas.height

let grounded = false

let playerVelocity = 0


function update() {
    console.log(grounded)
    let vyAbs = Math.abs(playerVelocity)
    let minErase = 1

    ctx.clearRect(playerPosX, playerPosY, 100, -vyAbs - minErase)
    ctx.clearRect(playerPosX, playerPosY, 100, 100 + vyAbs + minErase)
    playerPosY += playerVelocity

    fillBackground()

    ctx.drawImage(moose, playerPosX, playerPosY, 100, 100)
    collision()
    requestAnimationFrame(update)
}

update()

function fillBackground() {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function fillBlue(moosePosX, moosePosY, width, height) {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(moosePosX, moosePosY, width, height)
}


function collision() {
    if (playerPosY >= canvas.height - 100) {
        playerPosY = canvas.height - 100
     playerVelocity = 0
        grounded = true
    }
}

setInterval(function Gravity() 
{
    if (!grounded) {
     playerVelocity += .1
    }
    
})