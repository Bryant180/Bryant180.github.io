let spawnX = canvas.width - 50
let spawnY = canvas.height - 50

let obsX = 0
let obsY = 0

let obstacleSpeed = 5

setInterval(function Obstacle() 
{
    console.log("object")
    ctx.fillRect(spawnX, spawnY, 50, 50)
    obsX = spawnX
    obsY = spawnY
    updateObstaclePos()
}, 3000)

function updateObstaclePos() {
    if (obsX >= -50) {
        ctx.clearRect(obsX, obsY, 50 + obstacleSpeed, 50)
        obsX -= obstacleSpeed
        ctx.fillStyle = "red";
        ctx.fillRect(obsX, obsY, 50, 50)
        requestAnimationFrame(updateObstaclePos)
    }
    
}