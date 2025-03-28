let num1 = +prompt("Enter the First Number");
let num2 = +prompt("Enter the Second Number");

//Greatest Common Divisor
function GCD(num1, num2) {
  if (num2 == 0) {
    return num1;
  } else {
    return GCD(num2, num1 % num2);
  }
}
console.log(GCD(num1, num2));

//Least Common Multiple
function LCM(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return 0;
  } else {
    return (num1 * num2) / GCD(num1, num2);
  }
}
console.log(LCM(num1, num2));

alert(`GCD is ${GCD(num1, num2)} and LCM is ${LCM(num1, num2)}.`);
