//Dice Game Version1
//Lily Lyth
//27/07/2021 


console.log('pls roll the dice')

let point1 = 0;
let point2 = 0;


let player1Number = prompt('Player 1 what number did you get')
let player2Number = prompt('Player 2 what number did you get')

while (player1Number || player2Number >= 7){
  console.log('sorry that is invalid pls put in a smaller number')
  
}


if (player1Number == player2Number) {
  console.log('you rolled the same number, you both get a point!')
  point1 ++
  point2 ++
 
} else if (player1Number < player2Number){ 
  console.log('player 2, your number is bigger you get a point')
  point2 ++
} else if (player1Number > player2Number){
  console.log('player 1 your number is bigger, you get a point')
  point1 ++
}

 