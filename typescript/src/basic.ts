let x: number = 5;

console.log(x);

// Add 2 numbers
function Add(num1: number, num2: number) {
  return num1 + num2;
}
// Contact 2 string
function Contact(str1: string, str2: string) {
  return str1 + str2;
}

type StrNum = string | number;

// SpecialConcat 2 (string or number)
function SpecialConcat(strOrNum1: StrNum, strOrNum2: StrNum) {
  let str1 = covertToString(strOrNum1);
  let str2 = covertToString(strOrNum2);
  return str1 + str2;

  function covertToString(strOrNum: StrNum) {
    return typeof strOrNum === "number" ? strOrNum.toString() : strOrNum;
  }
}
