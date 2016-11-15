var https  = require('https');

var googlemapstext = function(key){
        this.key = key;
        return this;
};

googlemapstext.prototype.get = function(txt ,cb){
        https.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + txt+ '&key=' + this.key, function(res) {
            var rawData = '';
            res.on('data', function(chunk) {
                rawData += chunk;
            });
            res.on('error', function(err) {
                cb(err);
            });
            res.on('end', function() {
                try {
                    var parsedData = JSON.parse(rawData);
                    cb(null, parsedData);
                }
                catch(err){
                    cb(err);
                }

            });
        });
};

module.exports = googlemapstext;
