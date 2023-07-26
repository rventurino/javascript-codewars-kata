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
for (i = -2; i < 20; i++) {
  p = document.createElement('p');
  p.innerHTML = `${i}: isSquare? ${isSquare(i)}`;
  output.appendChild(p);
  p ='';
}
