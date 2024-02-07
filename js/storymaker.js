// Your pre-defined arrays based on the categories
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["monkey", "banana", "ball", "bug", "book", "worm"];
const settings = ["at school", "in the sky", "at the zoo", "under my bed", "in my shoes", "on the grass"];

// Variables to store chosen words
let chosenNoun1 = '';
let chosenVerb = '';
let chosenAdjective = '';
let chosenNoun2 = '';
let chosenSetting = '';

// Function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Event listener functions for buttons
document.getElementById('studentId').addEventListener('click', function() {
    //chosenNoun1 = getRandomElement(nouns1);
    document.getElementById('studentId').textContent = 200556299;
});

document.getElementById('noun1').addEventListener('click', function() {
    chosenNoun1 = getRandomElement(nouns1);
    document.getElementById('chosenNoun1').textContent = chosenNoun1;
});

document.getElementById('verb').addEventListener('click', function() {
    chosenVerb = getRandomElement(verbs);
    document.getElementById('chosenVerb').textContent = chosenVerb;
});

document.getElementById('adjective').addEventListener('click', function() {
    chosenAdjective = getRandomElement(adjectives);
    document.getElementById('chosenAdjective').textContent = chosenAdjective;
});

document.getElementById('noun2').addEventListener('click', function() {
    chosenNoun2 = getRandomElement(nouns2);
    document.getElementById('chosenNoun2').textContent = chosenNoun2;
});

document.getElementById('setting').addEventListener('click', function() {
    chosenSetting = getRandomElement(settings);
    document.getElementById('chosenSetting').textContent = chosenSetting;
});

// Function to show the current story
function showStory() {
    let story = `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} ${chosenSetting}.`;
    document.getElementById('story').textContent = story;
}

// Function to generate and show a random story
function randomStory() {
    chosenNoun1 = getRandomElement(nouns1);
    chosenVerb = getRandomElement(verbs);
    chosenAdjective = getRandomElement(adjectives);
    chosenNoun2 = getRandomElement(nouns2);
    chosenSetting = getRandomElement(settings);
    showStory();
}

// Function to reset the story and clear previous selections
function resetStory() {
    chosenNoun1 = '';
    chosenVerb = '';
    chosenAdjective = '';
    chosenNoun2 = '';
    chosenSetting = '';
    document.getElementById('chosenNoun1').textContent = '';
    document.getElementById('chosenVerb').textContent = '';
    document.getElementById('chosenAdjective').textContent = '';
    document.getElementById('chosenNoun2').textContent = '';
    document.getElementById('chosenSetting').textContent = '';
    document.getElementById('story').textContent = '';
}

// Attach event listeners to final buttons
document.getElementById('playback').addEventListener('click', showStory);
document.getElementById('random').addEventListener('click', randomStory);
document.getElementById('reset').addEventListener('click', resetStory);

