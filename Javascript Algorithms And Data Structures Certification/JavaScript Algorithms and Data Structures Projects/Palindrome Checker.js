function palindrome(str) {
  str = str.replace(/\W|_/g, '').toLowerCase();
  let newStr = str.split('').reverse().join('');
  
  return str == newStr;
}
