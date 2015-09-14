define ["jquery", "bootstrap", "backbone"], ($, Bootstrap, Backbone)->
    class BaseView extends Backbone.View
        renderError:(message)->
            code = null
            if res = message.base_rsp
                code = res.ret
                msg = res.msg
            # console.debug code,msg
            @$el.html("""
                <br />
                <div class="text-center text-danger">
                    <h3 class=""> ERROR #{code or ""}</h3>
                    <p class="">#{msg or message}</p>
                </div>
            """)
        renderLoading:(msg="Loading...")->
            @$el.html("""
                <br />
                <p class="text-center"> #{msg} </p>
            """)
    