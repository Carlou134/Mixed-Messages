const astrologyMessages = [
    "The stars are aligning in your favor today.",
    "A cosmic shift brings new opportunities your way.",
    "Your energy resonates with the moon's gentle light.",
    "Jupiter's blessing will guide your decisions today.",
    "A mysterious force in the cosmos whispers your name.",
    "Mercury’s clarity will help you speak your truth.",
    "The universe is opening doors just for you.",
    "Today, your aura shines brighter than the constellation Orion.",
    "A celestial sign points to a meaningful encounter.",
    "Your destiny aligns with the rhythm of the cosmos."
];

const motivationalMessages = [
    "Keep moving forward, no matter how small the step.",
    "Believe in yourself and your journey.",
    "Every challenge is a chance to grow stronger.",
    "Focus on progress, not perfection.",
    "Your effort today builds your future tomorrow.",
    "Success comes to those who refuse to quit.",
    "Trust yourself — you’re capable of more than you think.",
    "Even the smallest spark can light a great fire.",
    "Turn your dreams into actions, one step at a time.",
    "Your courage today will inspire your tomorrow."
];

const jokesAndMessages = [
    "…and don’t forget to wave at random ducks for luck.",
    "…and a squirrel might judge your life choices today.",
    "…so maybe wear two different socks for extra power.",
    "…and beware of sandwiches, they know too much.",
    "…which means today is a perfect day to talk to your plants.",
    "…and a pigeon might just follow you home — accept your new friend.",
    "…so avoid spoons, they’re feeling dramatic today.",
    "…and remember, dancing in your room counts as cardio.",
    "…so prepare for an epic staring contest with your cat.",
    "…and don’t take life too seriously; even the moon laughs sometimes."
];

function CompleteMessage(){
    const randomizer = Math.floor(Math.random() * astrologyMessages.length);
    return randomizer;
}

console.log(CompleteMessage());