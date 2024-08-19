function numberGuessing( user){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    computer = randomNumber

    if(user === computer){
        console.log(`congrats! you guess the correct number`)
    }else if(user < computer){
        console.log(`Your guess ${user} is too low from the computers guess ${computer}`)
    }else {
        console.log(`Your guess ${user} is too high from the computers guess ${computer}`)
    }
}
numberGuessing( 95)