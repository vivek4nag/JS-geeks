// reverse a string 

const rev = (str) => {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
};

console.log(rev("My Name is Anthony Gonsalves"));
console.log(rev("Geekster"));
