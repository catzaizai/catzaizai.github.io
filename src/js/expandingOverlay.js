/**
 * Created by 猫崽崽 on 24/2/2016.
 */

(function(window, document, $, undefined){
    var ExpandingOverlay = function(element){
        this.href = "";
        this.$element = $(element);
        this.html = "";
        this.container = ".mask-layer";
        this.$container = null;;
        this.close = ".cover-close";
        this.$close = null;
        this.isShow = false;

        this._init();
    };

    ExpandingOverlay.prototype = {
        constructor : ExpandingOverlay,

        _init: function(){
            this.href = this.$element.attr("data-href");
            this.initContainer();

            this.$element.on({
                "click": $.proxy(this.click, this)
            });
            this.$close.on({
                "click": $.proxy(this.hide, this)
            });
        },

        click: function(){
            if(!this.href) return;
            var scope = this;
            $.get(this.href, {}, function(html){
                $(scope.container + " .cover-content .container .row").html(html);
                scope.show();
                scope.open();
            })
        },

        initContainer: function(){
            if(!$(this.container)){
                var container = '<section class="mask-layout">'
                    + '<div class="cover-content">'
                    + '<div class="cover-close"><i class="fa fa-close fa-2x"></i></div>'
                    +'<div class="container">'
                    +'<div class="row">'
                    +'</div>'
                    +'</div>'
                    + '</div>'
                    +'</section>';
                $("body").append(container);
            }
            this.$container = $(this.container);
            this.$close = $(this.close);
        },

        show: function(){
            var point = this.$element.offset();
            var width = this.$element.width();
            var height = this.$element.height();
            this.$container.css({"top":point.top, "left": point.left, "width": width, "height": height});
            this.$container.show();
        },

        open: function(){
            this.$container.animate({"top":"0", "left": "0", "bottom": "0", "right":"0" ,"width": "100%", "height":"100%"}, 600, "linear");
        },

        hide: function(){
            this.$container.hide();
        },

        format: function(){
            if(!String.prototype.format){
                String.prototype.format = function(){
                    var args = arguments;
                    return this.replace(/{(\d+)}/g, function (match, number) {
                        return typeof args[number] != 'undefined' ? args[number] : match;
                    });
                }
            }
        }
    };

    $.fn.expandingOverlay = function(){
        return this.each(function(){
            var $this = $(this);
            var data = $this.data("expandingOverlay");
            if(!data){
                data = new ExpandingOverlay(this)
            }
            $this.data("expandingOverlay", data);
        })
    }

})(window, document, jQuery);