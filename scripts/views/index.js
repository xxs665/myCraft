// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["views/baseView"], function(BaseView) {
    var Portal;
    return Portal = (function(superClass) {
      extend(Portal, superClass);

      function Portal() {
        return Portal.__super__.constructor.apply(this, arguments);
      }

      Portal.prototype.className = "container";

      Portal.prototype.initialize = function() {};

      Portal.prototype.render = function() {};

      Portal.prototype.craftItem = "<li data-craft-id=<%-craftID%> >\n    <div class=\"craft-main-photo\">\n        <image src=\"<%-imgPath%>\">\n    </div>\n    <div class=\"craft-basic-info\">\n        <div class=\"craft-name\"><%-craftName%></div>\n        <div class=\"craft-detail-unit\"><%-artistAmount%>人</div>\n        <div class=\"craft-detail-unit\">今日之星:<%-star%></div>\n    </div>\n    <div class=\"craft-access\">\n        <a href=\"\">进入</a>\n    </div>\n</li>";

      Portal.prototype.tmpl = "<aside class=\"float-head\">\n    <div class=\"district-selector\"><%-collection.location%><span down-arrow></span></div>\n    <div class=\"user-link\">我</div>\n</aside>\n<div class=\"craft-list\">\n    <ul>\n        <% _.each(collection.craftList, function(item){ craftItem(item) })%>\n    </ul>\n</div>";

      return Portal;

    })(BaseView);
  });

}).call(this);