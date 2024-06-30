// console.log('moves:', argComputerMove, argPlayerMove);

// let argMoveId = Math.floor(Math.random() * 3 + 1);


// function getMoveName(argMoveId){
//     if(argMoveId == 1){
//       return 'kamień';
//     } else if(argMoveId == 2){
//         return 'papier';
//     } else if (argMoveId == 3){
//         return 'nożyce';
//     }

//     printMessage('Nie znam ruchu o id ' + argMoveId + '.');
//     return 'nieznany ruch';
//   }



// console.log('Wylosowana liczba to: ' + randomNumber);

// let argComputerMove = getMoveName(argMoveId);

// let argPlayerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

// console.log('Gracz wpisał: ' + argPlayerInput);

// let argPlayerMove = getMoveName(argPlayerInput);

// function displayResult (argComputerMove, argPlayerMove){
//     printMessage('Komputer zagrał '+ argComputerMove + 'a ty ' + argPlayerMove);

//     if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
//         return 'Ty wygrywasz!';
//       } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
//         return 'Wygrywa Komputer!';
//       } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
//         return 'Remis!';
//       } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
//         return 'Komputer wygrywa!';
//       } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
//         return 'Remis!';
//       } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
//         return 'Ty wygrywasz!';
//       } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
//         return 'Ty wygrywasz!';
//       } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
//         return 'Komputer wygrywa!';
//       } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
//         return 'Remis!';
//       }
//       printMessage('Niepoprawnie zagrana gra');
//       return 'Zagraj poprawny ruch';
    
// }

// let display = displayResult();

// printMessage('Wynik gry: ' + display);

// console.log('result :', display);

// Działa

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else {
    computerMove = 'nożyce'
};

printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} ;

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrywa Komputer!');
  } else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  } else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
  } else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  } else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  } else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  } else {
    printMessage('Wybierz poprawny ruch!!!');
  };