const output = document.getElementById('output');

var isSquare = function (n) {
  if (n === 0) {
    return true;
  }
  if (n > 0) {
    let sr = Math.sqrt(n);
    let sqMult = sr * sr;
    if (n % sr === 0) {
      return true;
    }
  }
  return false; // fix me
};

//test
for (i = 0; i < 7; i++) {
  p = document.createElement('p');
  p.innerHTML = `${(Math.random() * 100).toFixed(0)}: isSquare? ${isSquare(i)}`;
  output.appendChild(p);
  p ='';
}
