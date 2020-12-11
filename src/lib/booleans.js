const negate = a => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => !a && !b;

const one = (a, b) => !a && b || a && !b;

const truthiness = a => {
  if (a) {
    return true;
  } else {
    return false;
  }
};

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => {
  if (a % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = a => Math.sqrt(a) % 1 === 0;

const startsWith = (char, string) => {
  if (string[0] === char) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = string => {
  string = string.toLowerCase();
  if ((string.includes("a")) || (string.includes("e")) || (string.includes("i")) || (string.includes("o")) || (string.includes("o"))) {
    return true;
  } else {
    return false;
  }
};

const isLowerCase = string => {
  if (string == string.toLowerCase()) {
    return true;
  } else {
    return false;
};
}
module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
