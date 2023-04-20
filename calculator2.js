function calculateResult(){
let total = 0
let walls = document.getElementById('walls').value
let counts = document.getElementById('counts').value
let steps = document.getElementById('steps').value
let bpm = document.getElementById('bpm').value
let turns = document.getElementById('turns').value
let turnSum = document.getElementById('turnSum').value
let turnSize = document.getElementById('turnSize').value
let tags = document.getElementById('tags').value
let restarts = document.getElementById('restarts').value
let phrased = document.getElementById('phrased').checked
let stepDifficulty = document.getElementById('stepDifficulty').value
total = +total + Math.round(+walls/2)
if (counts <= 32) {
    total = +total + 1;
} else if (counts <= 64) {
    total = +total + 4;
} else if (counts <= 96) {
    total = +total + 7;
} else {
    total = +total + 10;
}
console.log(total)

if (steps/counts <= 1) {
    total = +total + 1
} else if (steps/counts <= 1.5) {
    total = +total + 4
} else if (steps/counts <= 1.75){
    total = +total + 7
} else {
    total = +total + 10
}
console.log(total)

if (bpm <= 55) {
    total = +total + 4
} else if (bpm <= 100) {
    total = +total + 1
} else if (bpm <= 130){
    total = +total + 4
} else if (bpm <= 160){
    total = +total + 7
} else {
    total = +total + 10
}
console.log(total)

if (turns <= 1) {
    total = +total + 1
} else if (turns <= 3) {
    total = +total + 4
} else if (turns <= 6){
    total = +total + 7
} else {
    total = +total + 10
}
console.log(total)

if (turnSum <= .25) {
    total = +total + 1
} else if (turnSum <= 1) {
    total = +total + 4
} else if (turnSum <= 3){
    total = +total + 7
} else {
    total = +total + 10
}
console.log(total)

if (turnSize <= .5) {
    total = +total + 1
} else if (turnSize <= .75) {
    total = +total + 4
} else if (turnSize <= 1.5){
    total = +total + 7
} else {
    total = +total + 10
}
console.log(total)

if (tags < 1) {
    total = +total + 1
} else if (tags < 2) {
    total = +total + 4
} else if (tags < 3){
    total = +total + 7
} else {
    total = +total + 10
}
console.log(total)

if (restarts < 1) {
    total = +total + 1
} else if (restarts < 2) {
    total = +total + 4
} else if (restarts < 3){
    total = +total + 7
} else {
    total = +total + 10
}
console.log(total)

if (phrased) {
    total = +total + 10
} 
console.log(total)

if (stepDifficulty/steps < 1) {
    total = +total + 1
} else if (stepDifficulty/steps < 1.5) {
    total = +total + 4
} else if (stepDifficulty/steps < 1.75){
    total = +total + 7
} else {
    total = +total + 10
}
console.log(total)

document.getElementById('result').innerHTML = total
if (total < 18) {
    document.getElementById('resultLevel').innerHTML = "Absolute Beginner"
} else if (total < 24) {
    document.getElementById('resultLevel').innerHTML = "Beginner"
} else if (total < 30) {
    document.getElementById('resultLevel').innerHTML = "Improver"
} else if (total < 38) {
    document.getElementById('resultLevel').innerHTML = "Intermediate"
} else if (total < 48) {
    document.getElementById('resultLevel').innerHTML = "Intermediate/Advanced"
} else if (total < 60) {
    document.getElementById('resultLevel').innerHTML = "Advanced"
} else {
    document.getElementById('resultLevel').innerHTML = "Advanced +"
}
}
