console.log("main.js is working")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const moose = document.getElementById("moose")


let playerPosX = 150
let playerPosY = canvas.height

const playerSizeX = 100
const playerSizeY = 100

playerDead = false

let grounded = false

let playerVelocity = 0


function update() {
    console.log(grounded)
    let vyAbs = Math.abs(playerVelocity)
    let minErase = 1

    ctx.clearRect(playerPosX, playerPosY, playerSizeX, -vyAbs - minErase)
    ctx.clearRect(playerPosX, playerPosY, playerSizeX, playerSizeY + vyAbs + minErase)

    playerPosY += playerVelocity

    fillBackground()

    if (playerDead == true) {
        
        return
    }

    ctx.drawImage(moose, playerPosX, playerPosY, playerSizeX, playerSizeY)
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
    if (playerPosY >= canvas.height - playerSizeY) {
        playerPosY = canvas.height - playerSizeY
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