function ready() {
    setInterval (() =>{
        document.body.style.background = "Teal"
    })
    let x = 0
    black_bear.onclick = function() {
        console.log("page ready")
        x = x + 1
    }
    long_chutes.onclick = function() {
        console.log("page ready")
        x = x + 2
    }
    final_num.innerHTML = x;
}
document.addEventListener("DOMContentLoaded", ready);