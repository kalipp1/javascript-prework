let randomNumber = Math.floor(Math.random() * 3 + 1);

function getMoveName(argMoveId){
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

let argComputerMove = getMoveName(randomNumber);

let argPlayerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + argPlayerInput);

 let argPlayerMove = getMoveName(argPlayerInput);

 function displayResult(){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Komputer zagrał '+ argComputerMove + ' a ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!'); 
      } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Wygrywa Komputer!');
      } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
      } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa!');
      } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
      } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa!');
      } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
      } else {
        printMessage('Niepoprawnie zagrana gra');
      }
      
    
}

let display = displayResult();

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