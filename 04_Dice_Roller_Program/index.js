

function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value
    const diceResults = document.getElementById('diceResults')
    const diceImages = document.getElementById('diceImages')

    const values = []
    const images = []

    for(let i =0;i< numOfDice;i++){
        const value = Math.floor(Math.random()*6) +1
        values.push(value)
        images.push(`<img src="Dice/Dice0${value}.png" alt="Dice ${value}">`)
    }
    
    diceResults.textContent = `dice : ${values.join(', ')}`
    diceImages.innerHTML = images.join('')
}