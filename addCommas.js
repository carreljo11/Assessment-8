function addCommas(num) {
      // Convert the number to a string
  let numStr = num.toString();
  // Split the string into an array of characters
  let numArr = numStr.split("");
  // Reverse the array
  numArr.reverse();
  // Loop through the array and add commas every 3 digits
  for (let i = 3; i < numArr.length; i += 4) {
    numArr.splice(i, 0, ",");
  }
  // Reverse the array again and join it back into a string
  numStr = numArr.reverse().join("");
  return numStr;
}


module.exports = addCommas;