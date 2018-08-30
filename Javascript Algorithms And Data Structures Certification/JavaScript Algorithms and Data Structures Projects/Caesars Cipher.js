function rot13(str) {
  let regex = /[A-Z]/;
  let encodedStringArray = str.split('');

  let decodedStringArray = encodedStringArray.map((item) => {
      if (regex.test(item)) {
          let decodedCode = item.charCodeAt() % 26 + 65;
          return String.fromCharCode(decodedCode);
      } else {
          return item;
      }
  });
  return decodedStringArray.join('');
}
