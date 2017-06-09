exports.numberNeeded = function (first, second) {
    var count = 0;
    var freq = new Array(26);
    var firstArray = first.split('');
    for (i = 0; i < firstArray.length; i++) {
        if (freq[firstArray[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
            freq[firstArray[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        } else {
            freq[firstArray[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        }
    }
    var secondArray = second.split('');
    for (i = 0; i < secondArray.length; i++) {
        if (freq[secondArray[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
            freq[secondArray[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        } else {
            freq[secondArray[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        }
    }
    
    freq.forEach(function(i) {
        count += Math.abs(i);
    }, this);
        
    return count;
}