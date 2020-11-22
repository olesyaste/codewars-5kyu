function anagrams(word, words) {
    let s = word.split('').sort().join('')
    let result = []
    for(let i = 0; i < words.length; i++){
      let ss = words[i].split('').sort().join('');
      if(ss == s) {
        result.push(words[i])
      }
    }
     return result
}
   
   anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
   //['aabb', 'bbaa']
   
   anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
   //['carer', 'racer']
   
   anagrams('laser', ['lazing', 'lazy',  'lacer']);
   //[]