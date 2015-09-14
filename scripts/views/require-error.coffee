define ["views/modelview"],(ModelView)->
    class RequireErrorView extends ModelView
        className:"view-require-error"
        template: """
            <div class="container text-center">
                <br />
                <h4> Requirejs Error: </h4>
                <pre><%=message%></pre>
            </div>
        """