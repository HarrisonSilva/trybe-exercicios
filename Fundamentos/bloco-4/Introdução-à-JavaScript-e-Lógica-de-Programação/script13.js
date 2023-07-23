const note = Math.floor(Math.random() * 100)

if (note >= 90 && note <= 100) {
    console.log(`${note}%: A`)
} else if (note >= 80 && note < 90) {
    console.log(`${note}%: B`)
} else if (note >= 70 && note < 80) {
    console.log(`${note}%: C`)
} else if (note >= 60 && note < 70) {
    console.log(`${note}%: D`)
} else if (note >= 50 && note < 60) {
    console.log(`${note}%: E`)
} else if (note < 50 && note > 0) {
    console.log(`${note}%: F`)
} else if (note <= 0 || note > 100) {
    console.log(`${note}%: Valor invalido!`);
}
