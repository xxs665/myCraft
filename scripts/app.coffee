define [
    "jquery", "backbone", "libs/util"
],($, Backbone, Util)->
    require ["fastclick"], (FastClick)->
        $ -> FastClick.attach(document.body);

    class ViewRouter extends Backbone.Router
        defaultView : "index"
        routers :
            ":viewPath?*query" : "navigateView"
            ":viewPath" : "navigateView"
            "" : "index"
        index:()->
            query = Util.deparamQuery(location.search.slice(1))
            path = query.page or null
            query = _.omit(query, "page") or {}
            @navigateView(path, query)

        navigateView:(path, query)->
            dtd = $.Deferred()
            dtd.path = path
            path ?= @defaultView
            @trigger("when-view-render",dtd)

            renderViewWithClass = (viewClass, options)=>
                options = _.extend({query : query, path : path}, options)
                view = new ViewClass(options)
                view.$el.addClass("view-#{viewClass}")
                render = view.render
                if render.then
                    render.path = path
                    @trigger("when-view-render",render)
                @trigger("view-loaded", view)
                @currentPath = path
                dtd.resolve(view)

            require ["views/#{viewPath}"], (viewClass) =>
                renderViewWithClass(viewClass)
            ,(err)->
                require ["views/require-error"],(ErrView)=>
                    renderViewWithClass(ErrView, model:{ message:err})
                dfd.reject(err)

    class AppClass extends Backbone.View
        el:"#app"
        util: Util

        initialize:()->
            @router = new ViewRouter()
            @router.on "view-loaded", (view)=>
                @loadView(view)
                view.show()
                if view.title then document.title = view.title
            $ -> Backbone.history.start()

        render:()->
        loadView:(view)->
            @currentView?.trigger("remove").remove()
            @$el.children().detach()
            @currentView = view
            @$el.append(view.el)
    App = new AppClass()
    return App