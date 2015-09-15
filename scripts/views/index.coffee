define ["views/baseView"], (BaseView)->
    class Portal extends BaseView
        className : "container"

        initialize:()->
            this.render()

        collection :
            location : "深圳"
            craftList:[{
                craftPhotoUrl : "#craft/1"
                craftName:"1"
                artistsAmount:1
                star:"1"
                craftID:"1"
            }]
        tmplHelpers:
            craftItem : """
                <div class="row craft-item" data-craft-id=<%-craftID%>>
                    <div class="craft-main-photo col-xs-4">
                        <image src="<%-craftPhotoUrl%>">
                    </div>
                    <div class="craft-basic-info col-xs-6">
                        <div class="craft-name "><%-craftName%></div>
                        <div class="craft-detail-unit"><%-artistsAmount%>人</div>
                        <div class="craft-detail-unit">今日之星:<%-star%></div>
                    </div>
                    <div class="craft-access col-xs-2">
                        <a href="">进入</a>
                    </div>
                </div>
            """
        tmpl : """
            <nav class="top-nav row navbar-fixed-top">
                <div class="district-selector col-xs-4 text-center"><%-collection.location%><span down-arrow></span></div>
                <div class="user-link col-xs-4 text-center">我</div>
            </nav>
            <div class="craft-list">
                <div>
                    <% _.each(collection.craftList, function(item){ print(craftItem(item)) })%>
                <div>
            </div>
        """