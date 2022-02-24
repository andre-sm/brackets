module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  const openBrackets = bracketsConfig.map(elem => elem[0]);
  const closeBrackets = bracketsConfig.map(elem => elem[1]);
  const stack = [];

  for(let i = 0; i < str.length; i++) {
    const currentBracket = str[i];
    const lastStackBracket = stack[stack.length - 1];

    if(openBrackets.includes(currentBracket)) {
      if(closeBrackets.includes(lastStackBracket) && currentBracket === lastStackBracket) {
        stack.pop();
        continue;
      }
      stack.push(str[i]);
    } else {
      if(closeBrackets.indexOf(currentBracket) === openBrackets.indexOf(lastStackBracket)) {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? true : false;
}
