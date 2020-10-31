function number9(n){
    return ([...Array(n+1).keys()].toString().split(9).length)
} 

//

function number9(n){
    if (n === 0) return 0;
    let c = 0;
    let len = (n + '').length
    let f =+ (n + '')[0];
    if (len > 1) c += f * Math.pow(10, len - 2) * (len - 1);
    if (f > 9) c += Math.pow(10, len - 1); 
    else if (f === 9) c += n - f * Math.pow(10, len - 1) + 1;
    return number9(+ (n + '').slice(1)) + c
  } 
