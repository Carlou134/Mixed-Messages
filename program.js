const astrologyMessages = [1, 2, 3];

const motivationalMessages = [];

const jokesAndMessages = [];

function CompleteMessage(){
    const randomizer = Math.floor(Math.random() * astrologyMessages.length);
    return randomizer;
}

console.log(CompleteMessage());