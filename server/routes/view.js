(function() {
    'use strict';
    /**
     * view.js
     *
     * Logic to display the view
     */
    var path = require('path')

    /* Route Handler */
    exports.show = function(req, res) {
        res.sendFile(path.resolve(__dirname + '/../public/index.html'));
    };
}());

