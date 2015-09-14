// Generated by CoffeeScript 1.9.3
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["jquery", "backbone", "libs/util"], function($, Backbone, Util) {
    var App, AppClass, ViewRouter;
    require(["fastclick"], function(FastClick) {
      return $(function() {
        return FastClick.attach(document.body);
      });
    });
    ViewRouter = (function(superClass) {
      extend(ViewRouter, superClass);

      function ViewRouter() {
        return ViewRouter.__super__.constructor.apply(this, arguments);
      }

      ViewRouter.prototype.defaultView = "index";

      ViewRouter.prototype.routers = {
        ":viewPath?*query": "navigateView",
        ":viewPath": "navigateView",
        "": "index"
      };

      ViewRouter.prototype.index = function() {
        var path, query;
        query = Util.deparamQuery(location.search.slice(1));
        path = query.page || null;
        query = _.omit(query, "page") || {};
        return this.navigateView(path, query);
      };

      ViewRouter.prototype.navigateView = function(path, query) {
        var dtd, renderViewWithClass;
        dtd = $.Deferred();
        dtd.path = path;
        if (path == null) {
          path = this.defaultView;
        }
        this.trigger("when-view-render", dtd);
        renderViewWithClass = (function(_this) {
          return function(viewClass, options) {
            var render, view;
            options = _.extend({
              query: query,
              path: path
            }, options);
            view = new ViewClass(options);
            view.$el.addClass("view-" + viewClass);
            render = view.render;
            if (render.then) {
              render.path = path;
              _this.trigger("when-view-render", render);
            }
            _this.trigger("view-loaded", view);
            _this.currentPath = path;
            return dtd.resolve(view);
          };
        })(this);
        return require(["views/" + viewPath], (function(_this) {
          return function(viewClass) {
            return renderViewWithClass(viewClass);
          };
        })(this), function(err) {
          require(["views/require-error"], (function(_this) {
            return function(ErrView) {
              return renderViewWithClass(ErrView, {
                model: {
                  message: err
                }
              });
            };
          })(this));
          return dfd.reject(err);
        });
      };

      return ViewRouter;

    })(Backbone.Router);
    AppClass = (function(superClass) {
      extend(AppClass, superClass);

      function AppClass() {
        return AppClass.__super__.constructor.apply(this, arguments);
      }

      AppClass.prototype.el = "#app";

      AppClass.prototype.util = Util;

      AppClass.prototype.initialize = function() {
        this.router = new ViewRouter();
        this.router.on("view-loaded", (function(_this) {
          return function(view) {
            _this.loadView(view);
            view.show();
            if (view.title) {
              return document.title = view.title;
            }
          };
        })(this));
        return $(function() {
          return Backbone.history.start();
        });
      };

      AppClass.prototype.render = function() {};

      AppClass.prototype.loadView = function(view) {
        var ref;
        if ((ref = this.currentView) != null) {
          ref.trigger("remove").remove();
        }
        this.$el.children().detach();
        this.currentView = view;
        return this.$el.append(view.el);
      };

      return AppClass;

    })(Backbone.View);
    App = new AppClass();
    return App;
  });

}).call(this);
