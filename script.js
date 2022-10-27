let sensAfter;
function converter() {
    let sensBeforeNoParse = document.getElementById("sens").value
    let sensBefore;
    let gameBefore = document.getElementById("game-before").value
    let gameAfter = document.getElementById("game-after").value

    if (sensBeforeNoParse == '') {
        alert("Insira um valor válido de Sens.")
    } else {
        sensBefore = parseFloat(sensBeforeNoParse)
        if (gameBefore === 'Overwatch2') {
            sensAfter = sensBefore * over2To(gameAfter)
        } else if (gameBefore == 'Valorant') {
            sensAfter = sensBefore * valorantTo(gameAfter)
        } else if (gameBefore == 'Fortnite') {
            sensAfter = sensBefore * fortniteTo(gameAfter)
        } else if (gameBefore == 'CS') {
            sensAfter = sensBefore * csTo(gameAfter)
        } else if (gameBefore == 'Warzone') {
            sensAfter = sensBefore * warzoneTo(gameAfter)
        } else {
            alert("Preencha todos os campos")
        }
        if (gameBefore != gameAfter) {

        resultado(sensAfter)


        } else {
            alert("Selecione dois jogos diferentes")
        }   
    }
}

function resultado(sensAfter) {
    let divResultado = document.getElementById("resultado")    
    // divResultado.innerHTML = "<input id='resultado' type='text' value='"+ sensAfter +"'> <br> <button onclick='copy()' id='copy'> Copiar</button>"
    divResultado.innerHTML = "<button onclick='copy()' id='copy'> <input id='resultado' type='text' value='" + sensAfter + "'> </button>"
}

function copy() {
    navigator.clipboard.writeText(sensAfter).then(() => {
        alert("Copiado!")
      })
}



function over2To(gameAfter) {
    const sens = {
        'Valorant': 0.094,
        'Fortnite': 1.188,
        'CS': 0.300,
        'Warzone': 1.000,

    }

    return parseFloat(sens[gameAfter])
}

function valorantTo(gameAfter) {
    const sens = {
        'Overwatch2': 10.606,
        'Fortnite': 12.601,
        'CS': 3.182,
        'Warzone': 10.606,

    }

    return parseFloat(sens[gameAfter])
}

function fortniteTo(gameAfter) {
    const sens = {
        'Overwatch2': 0.842,
        'Valorant': 0.079,
        'CS': 0.253,
        'Warzone': 0.842,

    }

    return parseFloat(sens[gameAfter])
}


function csTo(gameAfter) {
    const sens = {
        'Overwatch2': 3.333,
        'Fortnite': 3.960,
        'Valorant': 0.314,
        'Warzone': 3.333,

    }

    return parseFloat(sens[gameAfter])
}

function warzoneTo(gameAfter) {
    const sens = {
        'Overwatch2': 1.000,
        'Fortnite': 1.188,
        'CS': 0.300,
        'Valorant': 0.094,

    }

    return parseFloat(sens[gameAfter])
}

// function mineTo(gameAfter) {
//     const sens = {
//         'Overwatch2': 1.521,
//         'Fortnite': 1.807,
//         'CS': 0.456,
//         'Warzone': 1.521,
//         'Valorant': 0.143,

//     }

//     return parseFloat(sens[gameAfter])
// } 