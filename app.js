const max = prompt("Enter the max number");

const random = Math.floor(Math.random()*max)+1;

let guess  = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }
    if(guess == random){
        console.log("you are right, Congtatulations! The number was", random );
        break;
    }
    else if(guess < random ){
        guess  = prompt("The number you guessed is smaller.Guess the number again");
    }
    else {
        guess  = prompt("The number you guessed is large.Guess the number again");
    }
    
}