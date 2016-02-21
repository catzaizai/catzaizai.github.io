/**
 * Created by catzaizai on 2016/2/21.
 */

(function (window, document, $, undefined) {
    "use strict";

    var NavToggle = function(element, options){
        this.$element = $(element);
        this.$nav = $(options.nav);
        this.$main = $(options.main);
        this.width = options.width;
        this._init();
    };

    NavToggle.prototype = {
        constructor: NavToggle,

        _init: function(){
            this.$element.on({
               'click': $.proxy(this.click, this)
            });
        },

        click: function(){
            if(this.$nav.hasClass("open")){
                this.closeNav();
            }else{
                this.openNav();
            }
        },

        closeNav: function(){
            this.$nav.removeClass("open");
            this.$main.removeClass("offset");
        },

        openNav: function(){
            this.$nav.addClass("open");
            this.$main.addClass("offset")
        }
    };



    $.fn.navToggle = function(option){
        return this.each(function(){
            var $this = $(this);
            var data = $this.data("navToggle");
            if(option){
                if(typeof option === 'string'){
                    data = new NavToggle($this, $.extend({}, $.fn.navToggle.defaults, { nav:option }));
                } else if(typeof option === 'object'){
                    data = new NavToggle($this, $.extend({}, $.fn.navToggle.defaults, option));
                }
            }else{
                data = new NavToggle($this, $.extend({}, $.fn.navToggle.defaults));
            }

            $this.data("navToggle", data);
        })
    };

    $.fn.navToggle.defaults = {
        nav: "nav",
        main: "body",
        width: 240
    }

})(window, document, jQuery);