let current_threat = 0
let current_score = 0

function setNormal() {
    current_threat = 0
    current_score = 0
    updateXp()
    $("#score").text(current_score)
    $("#threat").text(current_threat)
}
function setExpert() {
    current_threat = 280
    current_score = 0
    updateXp()
    $("#score").text(current_score)
    $("#threat").text(current_threat)
}

function addStep(baseXp) {
    let xp = baseXp + Math.round(current_threat * (baseXp / 100))
    current_score += xp
    current_threat += 5
    updateXp()

    $("#score").text(current_score)
    $("#threat").text(current_threat)
}

function addThreat(threat) {
    current_threat += threat
    updateXp()
    $("#threat").text(current_threat)
}

function updateXp() {
    $("#easy").text(`${80 + Math.round(current_threat * 0.8)}xp`)
    $("#medium").text(`${100 + Math.round(current_threat * 1)}xp`)
    $("#boss").text(`${150 + Math.round(current_threat * 1.5)}xp`)
}

updateXp()