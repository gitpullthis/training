
let tries = {
    remaining: 7,
}

const main = () => {
    const randNum = generateRandomNum();
    compare(promptGuess(), randNum);
}

const compare = (num, randNum) => {
    tries.remaining--;

    if ( tries.remaining === 0 ) {
        alert (`You loose. Computer selected ${randNum} as the number`);
        return;
    } 

    if (num > randNum) {
        alert("Guess too high. Guess again. Remaining tries " + tries.remaining)
        compare(promptGuess(), randNum);

    } else if (num < randNum) {
        alert("Guess too low. Guess again. Remaining tries " + tries.remaining)
        compare(promptGuess(), randNum);
    } else {
        alert("Yaaay. You won");
    }
}
const promptGuess = () => {
    return prompt("Guess a number between 1 - 100");
}

const generateRandomNum = () => {
    let rand = Math.round(Math.random() * 100)
    return rand;
}

main();