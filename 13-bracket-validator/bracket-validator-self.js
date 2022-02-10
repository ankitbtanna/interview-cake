var input = "{ [ ] ( | | ) }";

var openersClosersMapping = {
  "{": "}",
  "[": "]",
  "(": ")",
  "|": "|",
};

var allBrackets = input.split(" ");

var stack = [];

allBrackets.forEach((bracket, index) => {
  if (stack.length === 0) {
    stack.push(bracket);
  } else {
    if (openersClosersMapping[stack[stack.length - 1]] === bracket) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }
  console.log(stack);
});

console.log(stack.length === 0);
