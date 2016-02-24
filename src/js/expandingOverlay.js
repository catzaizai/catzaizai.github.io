/**
 * Created by 猫崽崽 on 24/2/2016.
 */

(function(window, document, $, undefined){
    var ExpandingOverlay = function(element, option){
        this.href = "";
        this.$element = $(element);
        this.html = "";
        this.container = "";

        this._init();
    };

    ExpandingOverlay.prototype = {
        constructor : ExpandingOverlay,

        _init: function(){
            this.href = this.$element.attr("data-href");


            this.$element.on({
                "click": $.proxy(this.click, this)
            })
        },

        click: function(){
            var scope = this;
            $.get(this.href, {}, function(html){

            })
        },

        initContainer: function(){
            this.container = '<section class="cover-content">'
                +'<div class="container">'
                +'<div class="row">'
                + '{0}'
                +'</div>'
                +'</div>'
                +'</section>';
            this.stringFormat();
        },

        stringFormat: function(){
            if(!String.prototype.format){
                var args = argument;
                return this.replace(/{(\d+)}/g, function(match, number){
                    return typeof args[number] != 'undefined' ? args[number] : match;
                })
            }
        }
    }

})(window, document, jQuery);