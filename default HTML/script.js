const output = document.getElementById("output");

function digPow(n, p) {
  const nString = n.toString();
  nString.split('').forEach(char => {
    
  });
}

digPow(89, 1);
digPow(92, 1);
digPow(695, 2);
digPow(46288, 3);
/*
https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

*/
