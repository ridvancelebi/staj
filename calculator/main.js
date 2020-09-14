function dis(val) {
  document.getElementById("result").value += val;
}

function operate() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

function clr() {
  document.getElementById("result").value = "";
}

function reverse(num) {
  num = num + "";
  return num.split("").reverse().join("");
}

console.log(reverse(12345));

let today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = mm + "-" + dd + "-" + yyyy;
console.log(today);
