define ["views/baseView"], (BaseView)->
    class Portal extends BaseView
        className : "container"

        initialize:()->

        render:()->

        
        craftItem : """
            <li data-craft-id=<%-craftID%> >
                <div class="craft-main-photo">
                    <image src="<%-imgPath%>">
                </div>
                <div class="craft-basic-info">
                    <div class="craft-name"><%-craftName%></div>
                    <div class="craft-detail-unit"><%-artistAmount%>人</div>
                    <div class="craft-detail-unit">今日之星:<%-star%></div>
                </div>
                <div class="craft-access">
                    <a href="">进入</a>
                </div>
            </li>
        """
        tmpl : """
            <aside class="float-head">
                <div class="district-selector"><%-collection.location%><span down-arrow></span></div>
                <div class="user-link">我</div>
            </aside>
            <div class="craft-list">
                <ul>
                    <% _.each(collection.craftList, function(item){ craftItem(item) })%>
                </ul>
            </div>
        """