//Dice Game Version1
//Lily Lyth
//27/07/2021 




let point1 = 0;
let point2 = 0;

do{

console.log('pls roll the dice, first to 20 wins')

let player1Number = prompt('Player 1 what number did you get')
let player2Number = prompt('Player 2 what number did you get')

while (player1Number >= 7){
    console.log('Sorry player1 number is invalid.');
    player1Number = prompt('Player 1 what number did you get?');
}

while (player2Number >= 7){
    console.log('Sorry player2 number is invalid.');
    player2Number = prompt('Player 2 what number did you get?');
}

if (player1Number == player2Number) {
  console.log('you rolled the same number, you both get a point!')
 point1 ++
 point2 ++
 console.log('Player 1 you have ' + point1 + ' points')
 console.log('Player 2 you have ' + point2 + ' points')
 
} else if (player1Number < player2Number){ 
  console.log('player 2, your number is bigger you get a point')
  point2 ++
  console.log('Player 2 you have ' + point2 + ' points')
  
} else if (player1Number > player2Number){
  console.log('player 1 your number is bigger, you get a point')
  point1 ++
  console.log('Player 1 you have ' + point1 + ' points') 
  
}
}


