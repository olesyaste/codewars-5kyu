function scramble(str1, str2) {
    let s1 = str1.split('')
    let s2 = str2.split('')
    let arr = []
    for(let i = 0; i < s1.length; i++){
      for(let j = 0; j < s2.length; j++) {
      if(s1.indexOf(s2[j]) == -1){
        arr.push(s1[i])
      }
     }
    }
    if (arr.join())  return false
    return true
  }
  
  scramble('scriptjavx', 'javascript')
  scramble('rkqodlw','world')//,true);
  scramble('cedewaraaossoqqyt','codewars')//,true);
  scramble('katas','steak')//,false);
  scramble('scriptjava','javascript')//,true);