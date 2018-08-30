function convertToRoman(num) {
  let baseRomanNumeral = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  let getRomanNumeral = function(digit, position) {
    switch (digit) {
      case 0: return '';
      case 1:
      case 2:
      case 3: return baseRomanNumeral[position - 1].repeat(digit);
      case 4: return baseRomanNumeral[position - 1].concat(baseRomanNumeral[position]);
      case 5: return baseRomanNumeral[position];
      case 6:
      case 7:
      case 8: return baseRomanNumeral[position].concat(baseRomanNumeral[position-1].repeat(digit - 5));
      case 9: return baseRomanNumeral[position - 1].concat(baseRomanNumeral[position + 1]);
    }
  };

  let romanNumeral = '';

  for (let i = 1; i <= 5; i += 2) {
    let digit = num % 10;
    num = Math.floor(num / 10);

    romanNumeral = getRomanNumeral(digit, i).concat(romanNumeral);
  }

  if (num > 0) {
    romanNumeral = 'M'.repeat(num).concat(romanNumeral);
  }

  return romanNumeral;
}
