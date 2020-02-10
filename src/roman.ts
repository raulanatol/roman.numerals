export const VALIDATION_ROMAN_LETTERS = ['I', 'IV', 'V', 'IX', 'X', 'XIX', 'XL', 'L', 'C', 'CD', 'D', 'M'];
export const ROMAN_LETTERS = ['I', 'IV', 'V', 'IX', 'X', 'XIX', 'XL', 'L', 'C', 'CD', 'D', 'M'];
export const ROMAN_EQUIVALENCE = [1, 4, 5, 9, 10, 19, 40, 50, 100, 400, 500, 1000];
const ROMAN_LETTERS_SIZE = ROMAN_LETTERS.length - 1;

const assertValidInputToNumber = (input: number) => {
  if (input > 3999) {
    throw new Error('Unexpected number ' + input);
  }
  return input;
};

export const toRoman = (input: number): string => {
  let inputNumber = assertValidInputToNumber(input);
  let index = ROMAN_LETTERS_SIZE;
  let result = '';
  do {
    if (inputNumber >= ROMAN_EQUIVALENCE[index]) {
      result += ROMAN_LETTERS[index];
      inputNumber -= ROMAN_EQUIVALENCE[index];
      index = ROMAN_LETTERS_SIZE;
    }
  } while (index-- && inputNumber > 0);
  return result;
};





