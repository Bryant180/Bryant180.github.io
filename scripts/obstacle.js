let spawnX = canvas.width
let spawnY = canvas.height - 50

let obsX = 0
let obsY = 0

const obsSizeX = 50
const obsSizeY = 50

let obstacleSpeed = 5

setInterval(function Obstacle() 
{
    if (playerDead) {
        return
    }
    console.log("object")
    ctx.fillRect(spawnX, spawnY, obsSizeX, obsSizeY)
    obstacleSpeed += 1
    obsX = spawnX
    obsY = spawnY
    updateObstaclePos()
}, 3000)

function updateObstaclePos() {
    if (obsX >= -obsSizeX) {
        fillBlue(obsX, obsY, obsSizeX + obstacleSpeed, obsSizeY)
        obsX -= obstacleSpeed

        checkCollisionWithPlayer(playerPosX, playerPosY, playerSizeX, playerSizeY, obsX, obsY, obsSizeX, obsSizeY)

        ctx.fillStyle = "red";
        ctx.fillRect(obsX, obsY, obsSizeX, obsSizeY)
        requestAnimationFrame(updateObstaclePos)
    }
}

function checkCollisionWithPlayer(playerX, playerY, playerW, PlayerH, obX, obY, obW, obH) {

    if (playerX < obX + obW && playerX + playerW > obX && playerY < obY + obH && playerY + PlayerH > obY) {
        playerDead = true
    }
}