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


const titleCased = () => { return tutorials.map(sentence => {
  console.log(sentence)
  let newSentence = []
  const words = sentence.split(" ")
  for (let i=0; i< words.length; i++) {
     newSentence.push(words[i].charAt(0).toUpperCase() + words[i].substring(1))
  }
  return newSentence.join(" ")
})
}
console.log(titleCased)