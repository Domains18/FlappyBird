function isPangram(sentence: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCaseSentence = sentence.toLowerCase();
  for (let char of alphabet) {
    if (!lowerCaseSentence.includes(char)) {
      return false;
    }
  }
  return true;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog")); 

/**
 * explanation
 * The includes() method determines whether a string contains the characters of a specified string.
 * This method returns true if the string contains the characters, and false if not.
 * Note: The includes() method is case sensitive.
 *
 */
