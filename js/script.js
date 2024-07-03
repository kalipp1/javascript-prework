{
let computerScore = 0;
let playerScore = 0;

const zeroScore = function(){
  computerScore = 0;
  playerScore = 0;
  document.getElementById('result-p').innerHTML = 'Komputer: ' + computerScore + ' - Gracz: ' + playerScore;
}

const playGame = function(argPlayerInput){
  clearMessages();
  
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else if (argMoveId == 3){
        return 'nożyce';
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);

  // let argPlayerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + argPlayerInput);

  const argPlayerMove = getMoveName(argPlayerInput);

  const displayResult = function(){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('<br> Komputer zagrał '+ argComputerMove + ' a ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        playerScore += 1; 
      } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Wygrywa Komputer!');
        computerScore += 1;
      } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
      } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa!');
        computerScore += 1;
      } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
      } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        playerScore += 1;
      } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        playerScore += 1;
      } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa!');
        computerScore += 1;
      } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
      } else {
        printMessage('Niepoprawnie zagrana gra');
      };
      
  }

    displayResult();

    console.log(computerScore);
    
    document.getElementById('result-p').innerHTML = 'Komputer: ' + computerScore + ' - Gracz: ' + playerScore;
    
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

document.getElementById('reset').addEventListener('click', function(){
  zeroScore();
});

}
// Działa

// let randomNumber = Math.floor(Math.random() * 3 + 1);

// console.log('Wylosowana liczba to: ' + randomNumber);

// let computerMove = 'nieznany ruch';

// if(randomNumber == 1){
//   computerMove = 'kamień';
// } else if (randomNumber == 2){
//     computerMove = 'papier';
// } else {
//     computerMove = 'nożyce'
// };

// printMessage('Ruch komputera to: ' + computerMove);

// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

// console.log('Gracz wpisał: ' + playerInput);

// let playerMove = 'nieznany ruch';

// if(playerInput == '1'){
//   playerMove = 'kamień';
// } else if (playerInput == '2'){
//     playerMove = 'papier';
// } else if (playerInput == '3'){
//     playerMove = 'nożyce';
// } ;

// printMessage('Twój ruch to: ' + playerMove);

// if( computerMove == 'kamień' && playerMove == 'papier'){
//     printMessage('Ty wygrywasz!');
//   } else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
//     printMessage('Wygrywa Komputer!');
//   } else if (computerMove == 'kamień' && playerMove == 'kamień'){
//     printMessage('Remis!');
//   } else if (computerMove == 'papier' && playerMove == 'kamień'){
//     printMessage('Komputer wygrywa!');
//   } else if (computerMove == 'papier' && playerMove == 'papier'){
//     printMessage('Remis!');
//   } else if (computerMove == 'papier' && playerMove == 'nożyce'){
//     printMessage('Ty wygrywasz!');
//   } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
//     printMessage('Ty wygrywasz!');
//   } else if (computerMove == 'nożyce' && playerMove == 'papier'){
//     printMessage('Komputer wygrywa!');
//   } else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
//     printMessage('Remis!');
//   } else {
//     printMessage('Wybierz poprawny ruch!!!');
//   };