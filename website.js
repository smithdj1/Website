function ready() {
    setInterval (() =>{
        document.body.style.background = "Teal"
    })
    let x = 0
    black_bear.onclick = function() {
        x = x + 12
        console.log(x)
        distance.innerHTML = x
    }
    long_chutes.onclick = function() {
        x = x + 13
        console.log(x)
        distance.innerHTML = x
    }
    max.onclick = function() {
        x = x + 7
        console.log(x)
        distance.innerHTML = x
    }
    groswold.onclick = function() {
        x = x + 9
        console.log(x)
        distance.innerHTML = x
    }
    durrance.onclick = function() {
        x = x + 8
        console.log(x)
        distance.innerHTML = x
    }
    schauffler.onclick = function() {
        x = x + 11
        console.log(x)
        distance.innerHTML = x
    }
    jump.onclick = function() {
        x = x + 13
        console.log(x)
        distance.innerHTML = x
    }
    endzone.onclick = function() {
        x = x + 9
        console.log(x)
        distance.innerHTML = x
    }
    zuma_cornice.onclick = function() {
        x = x + 20
        console.log(x)
        distance.innerHTML = x
    }
    elaphants_trunk.onclick = function() {
        x = x + 13
        console.log(x)
        distance.innerHTML = x
    }
    larkspur.onclick = function() {
        x = x + 19
        console.log(x)
        distance.innerHTML = x
    }
    columbine.onclick = function() {
        x = x + 16
        console.log(x)
        distance.innerHTML = x
    }
    shine.onclick = function() {
        x = x + 7
        console.log(x)
        distance.innerHTML = x
    }
    independance.onclick = function() {
        x = x + 6
        console.log(x)
        distance.innerHTML = x
    }
    mtn_goat.onclick = function() {
        x = x + 13
        console.log(x)
        distance.innerHTML = x
    }
    northern_spy.onclick = function() {
        x = x + 9
        console.log(x)
        distance.innerHTML = x
    }
    elk_meadows.onclick = function() {
        x = x + 12
        console.log(x)
        distance.innerHTML = x
    }

    ski_time.onchange = function() {
        s = parseFloat(ski_time.value)
        console.log(s)
    }

    break_time.onchange = function() {
        b = parseFloat(break_time.value)
        console.log(b)
    }

    let p = 0
    final_calc.onclick = function() {
        p = p + (x/(s-b) * 60)
        console.log(p)
        final_speed.innerHTML = p
    }

    let n = 0
    setInterval (() => {
        if (n % 3 == 0) {
            ski_man.src = "data:image/jpeg;base64,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"
        }
        if (n % 3 == 1) {
            ski_man.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZUS9vG92LGOGbcJsYRorutbqWvkrXOieoImN3_vlylfKDUM2w&s"
        }
        if (n % 3 == 2) {
            ski_man.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkspHVsWG5eJ8ky8GvTrAnylHo6H6Iv94BiU4D-mcPTabwgxr&s"
        }
        n = n + 1
    }, 2000)
}
document.addEventListener("DOMContentLoaded", ready);