"use strict";


function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set()

  for (const word of words1Set){
    if (word in Words1Set) {
      result.add(word)
    }
  }
  return list(result)
}


function kidsGame(names) {
  // Replace this with your code
}
