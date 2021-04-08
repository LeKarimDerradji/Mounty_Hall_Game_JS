const readlineSync = require('readline-sync')
const crypto = require('crypto')
const { mainModule } = require('process')

Array.prototype.remove = function(from, to) {
    let rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  }

let doors = ['goat', 'goat', 'goat']
let playerChoice
let whatTheyChoosed


const n = crypto.randomInt(0, 3)
doors[n] = 'car'



playerChoice = readlineSync.questionInt(['Choose your door, between 1, 2 or 3 '])
if (playerChoice < 1 || playerChoice > 3) {
    console.log(`You don't know how to count from 1 to 3, you should stop playing mathematical game to win a supercar, for real.`)
    process.exit(1)
} else {
    console.log(`You picked the door number ${playerChoice}`)
    whatTheyChoosed = doors[playerChoice]
    playerChoice -= 1 
}


for (let i = 0; i < doors.length; i++) {
    if(i !== playerChoice && doors[i] === 'goat') {
        console.log(`Player, I will now open the door number ${i + 1}, that contains a goat, would you like to change your choice by now, or stick to yours ?`)
        doors.remove(i)
        break
        }
    }


let choice = readlineSync.question('Yes or No ? ').toLowerCase()

if (choice != 'yes' && choice != 'no') {
    console.log(`We're not playing a "ni oui, ni non", you just lost a chance to win a supercar, goodbye`)
    process.exit(1)
}


if (choice === 'yes') { 
    whatTheyChoosed === 'car' ? console.log('You Lost') : console.log('Congratulations, you won the price !')
}

if (choice === 'no') {
    whatTheyChoosed === 'car' ? console.log('Congratulations, you won the price !') : console.log('You Lost')
}
