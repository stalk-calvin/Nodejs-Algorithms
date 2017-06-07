const _ = require('underscore');

var getFirstItem = function(arr) {
    return _.first(arr);
}

module.exports.getFirstItem = getFirstItem;