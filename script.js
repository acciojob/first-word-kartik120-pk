function firstWord(s) {
  // your code here
  s = s.trim();

  // If the string contains a space, return the part before the first space
  if (s.includes(' ')) {
    return s.split(' ')[0];
  } else {
    // If there’s no space, return the whole string
    return s;
  }

}
// Do not change the code below

 const s = prompt("Enter String:");
alert(firstWord(s));
