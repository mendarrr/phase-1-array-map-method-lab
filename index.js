const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Iterate through the characters in a string
const words = "what does the this keyword mean?".split(" ");
console.log(words);

// Sentence case on each word
const capitalizer = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const capitalizedWords = words.map(capitalizer);
console.log(capitalizedWords);

// Main function
const titleCased = () => {
  const capitalizer = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return tutorials.map((title) => {
    const words = title.split(" ");
    const capitalizedWords = words.map(capitalizer);
    return capitalizedWords.join(" ");
  });
};

console.log(titleCased());

