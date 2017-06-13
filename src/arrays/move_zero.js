exports.moveAndReturnNumberOfNonZeroes = function (input) {
    if (input == null) {
        return 0;
    }
    var counter = 0;
    var k = input.length - 1;
    for (i=input.length - 1; i >= 0; i--) {
        if (input[i] == 0) {
            var x = i;
            while (x < k) {
                // swap
                var tmp = input[x + 1];
                input[x + 1] = input[x];
                input[x] = tmp;
                x++;
            }
            if (x >= k) {
                k--;
            }
        } else {
            counter++;
        }
    }
    return counter;
}