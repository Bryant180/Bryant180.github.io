addEventListener("keydown", function(e) {
    if (e.code == "Space" && grounded) {
        playerVelocity = -10
        grounded = false
    } 
})
