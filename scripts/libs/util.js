// Generated by CoffeeScript 1.9.3
(function() {
  define([], function() {
    var util;
    return util = {
      deparamQuery: function(string) {
        var pairs;
        if (string.lenght === 0) {
          return {};
        }
        pairs = _.map(string.split("&"), function(pair) {
          var kv;
          kv = pair.split("=");
          return [kv[0], decodeURIComponent(kv[1])];
        });
        return _.object(pairs);
      }
    };
  });

}).call(this);
