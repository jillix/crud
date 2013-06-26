var methods = ['find','remove','update','insert'];

function init (config) {
    
    var self = this;
    
    // add events
    if (config.listen instanceof Array) {
        for (var i = 0, l = config.listen.length; i < l; ++i) {
            for (var ii = 0, ll = methods.length; ii < ll; ++ii) {
                self.on(methods[ii], config.listen[i], (function (method) {
                    return function (query, callback) {
                        if (query && !(query instanceof Array) && typeof query === 'object') {
                            self.link(method, {data: query}, callback);
                        }
                    }
                })(methods[ii]));
            }
        }
    }
}

module.exports = init;

