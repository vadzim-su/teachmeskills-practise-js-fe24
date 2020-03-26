// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

const removeAdjacentDuplicates = string => {
  string = string.split("");
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      string.splice(i - 1, 2);
      console.log(string);
      i = 0;
    }
  }
  return string.join("");
};
