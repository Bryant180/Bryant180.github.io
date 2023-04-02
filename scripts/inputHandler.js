addEventListener("keydown", function(e) {
    if (e.code == "Space" && grounded) {
        vy = -10
        grounded = false
    } 
})
