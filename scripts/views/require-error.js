// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["views/baseView"], function(BaseView) {
    var RequireErrorView;
    return RequireErrorView = (function(superClass) {
      extend(RequireErrorView, superClass);

      function RequireErrorView() {
        return RequireErrorView.__super__.constructor.apply(this, arguments);
      }

      RequireErrorView.prototype.className = "view-require-error";

      RequireErrorView.prototype.template = "<div class=\"container text-center\">\n    <br />\n    <h4> Requirejs Error: </h4>\n    <pre><%=message%></pre>\n</div>";

      return RequireErrorView;

    })(BaseView);
  });

}).call(this);
