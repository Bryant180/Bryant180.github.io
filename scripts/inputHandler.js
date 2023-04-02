addEventListener("keydown", function(e) {
    if (e.code == "KeyW" && grounded) {
        vy = -10
        grounded = false
    } 
})
