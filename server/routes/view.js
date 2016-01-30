(function() {
    'use strict';
    /**
     * view.js
     *
     * Logic to display the view
     */

    /* Route Handler */
    exports.show = function(req, res) {
        res.sendFile(__dirname + '../public/index.html');
    };
}());

