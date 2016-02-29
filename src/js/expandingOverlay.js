/**
 * Created by 猫崽崽 on 24/2/2016.
 */
/** Depend loading.js **/

(function(window, document, $, undefined){
    var ExpandingOverlay = function(element, option){
        this.href = "";
        this.$element = $(element);
        this.html = "";
        this.container = ".mask-layer";
        this.$container = null;
        this.close = ".cover-close";
        this.$close = null;
        this.command = option.command;
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
                "click": $.proxy(this.closeMask, this)
            });

            switch(this.command){
                case "show":
                    this.getContent();
                    break;
                default:
                    break;
            }
        },

        click: function(){
            this.getContent();
        },

        getContent: function(){
            if(!this.href) return;
            var scope = this;
            this.$element.loading();
            $.get(this.href, {}, function(html){
                $(scope.container + " .cover-content .container .row").html(html);
                scope.openMask();
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

        openMask: function(){
            var scope = this;
            var point = this.$element.offset();
            var width = this.$element.width();
            var height = this.$element.height();
            var $doc = $(document);
            this.$container.css("clip", "rect("+ (point.top - $doc.scrollTop()) +"px "+ (point.left + width) +"px " + (point.top + height - $doc.scrollTop()) + "px " + point.left + "px" +")");
            this.$container.css({"opacity":1, "z-index": 3});
            window.setTimeout(function(){
                var docWidth = $(document).width();
                var docHeight = $(document).height();
                scope.$container.css("clip", "rect("+ "0px "+ docWidth +"px " + docHeight + "px " + "0px" +")");
                scope.$element.loading("hide");
            }, 1000);
        },

        closeMask: function(){
            this.$container.css({"opacity":0, "z-index": -1, "clip":"auto"});
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

    $.fn.expandingOverlay = function(option){
        return this.each(function(){
            var $this = $(this);
            var data = $this.data("expandingOverlay");
            if(!data){
                if(typeof option == "string"){
                    data = new ExpandingOverlay(this, $.extend(data, $.fn.expandingOverlay.default, { "command": option }))
                }else {
                    data = new ExpandingOverlay(this)
                }
            }
            $this.data("expandingOverlay", data);
        })
    };

    $.fn.expandingOverlay.default = {
        command: ""
    }

})(window, document, jQuery);