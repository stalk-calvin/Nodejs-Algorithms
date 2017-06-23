exports.groupAnagrams = function(words) {
   var tracker = new Map();
   words.forEach(function(word) {
       sortedLettersWord = String(word.split('').sort());
       if (!tracker.has(sortedLettersWord)) {
           tracker.set(sortedLettersWord, []);
       }
       tracker.get(sortedLettersWord).push(word);
   }, this);

   return tracker.values();
}