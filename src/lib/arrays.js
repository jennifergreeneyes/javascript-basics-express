const getNthElement = (index, array) => {
  while (index >= array.length) {
    return array[index - array.length];
  } return array[index];
};

const arrayToCSVString = array => array.join();

const csvStringToArray = string => string.split(",");

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => array.concat(element);

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => {
  return (numbers.toString()).split(",");
};

const uppercaseWordsInArray = strings => {
  return strings.map(element => {
    return element.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map(string => {
    return string.split("").reverse().join("");
  });
};

const onlyEven = numbers => {
  return numbers.filter(currentValue => {
    return currentValue % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  let beforeIndex = [];
  let afterIndex = [];
  
  beforeIndex = array.slice(0, index);
  afterIndex = array.slice(index + 1);

  return beforeIndex.concat(afterIndex);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => {
    return string[0] === "a" || string[0] === "e" || string[0] === "i" || string[0] === "o" || string[0] === "u" || string[0] === "A" || string[0] === "E" || string[0] === "I" || string[0] === "O" || string[0] === "U";
  }
  );
};

const removeSpaces = string => {
  const newArray = string.split(" ");
  const trimmedArray = newArray.map(element => {
    return element.trim("");
  });
  return trimmedArray.join("");
};

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number;
  });
};

const sortByLastLetter = strings => {
  const reverse = strings.map(string => {
    return string.split("").reverse().join("");
  });
  const reverseSorted = reverse.sort();
  const finalArray = reverseSorted.map(string => {
    return string.split("").reverse().join("");
  });
  return finalArray;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
