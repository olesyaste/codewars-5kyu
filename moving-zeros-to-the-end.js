const moveZeros = function (arr) {
    let zeros = [];
    let others = [];
    for (let i = 0; i < arr.length; i ++){
      if(arr[i] === 0) {
        zeros.push(arr[i])
      } else {
        others.push(arr[i])
      }
    }
    return [...others, ...zeros]
}