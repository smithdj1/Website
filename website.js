function ready() {
    setInterval (() =>{
        document.body.style.background = "Teal"
    })
    let x = 0
    black_bear.onclick = function() {
        x = x + 12
        console.log(x)
        
    }
    long_chutes.onclick = function() {
        x = x + 13
        console.log(x)
        
    }
    max.onclick = function() {
        console.log(x)
        x = x + 7
    }
    groswold.onclick = function() {
        x = x + 9
        console.log(x)
        
    }
    durrance.onclick = function() {
        x = x + 8
        console.log(x)
        
    }
    schauffler.onclick = function() {
        console.log(x)
        x = x + 11
    }
    jump.onclick = function() {
        console.log(x)
        x = x + 13
    }
    endzone.onclick = function() {
        console.log(x)
        x = x + 9
    }
    zuma_cornice.onclick = function() {
        console.log(x)
        x = x + 20
    }
    elaphants_trunk.onclick = function() {
        console.log(x)
        x = x + 13
    }
    larkspur.onclick = function() {
        console.log(x)
        x = x + 19
    }
    columbine.onclick = function() {
        console.log(x)
        x = x + 16
    }
    shine.onclick = function() {
        console.log(x)
        x = x + 7
    }
    independance.onclick = function() {
        console.log(x)
        x = x + 6
    }
    mtn_goat.onclick = function() {
        console.log(x)
        x = x + 13
    }
    northern_spy.onclick = function() {
        console.log(x)
        x = x + 9
    }
    elk_meadows.onclick = function() {
        x = x + 12
        console.log(x)
    }

    ski_time.onchange = function() {
        s = parseFloat(ski_time.value)
        console.log(s)
    }

    break_time.onchange = function() {
        b = parseFloat(break_time.value)
        console.log(b)
    }
}
document.addEventListener("DOMContentLoaded", ready);