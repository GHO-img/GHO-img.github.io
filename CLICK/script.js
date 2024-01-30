let counter = localStorage.getItem('count') || 0;
document.getElementById("but").innerHTML = 'Click: ' + counter;
function click() {
  counter += 1;
  document.getElementById("but").innerHTML = 'Click: ' + counter;
  localStorage.setItem('count', counter);
}
function reset() {
  localStorage.clear();
  counter = -1;
  click();
}
document.getElementById("but").addEventListener("click", click);