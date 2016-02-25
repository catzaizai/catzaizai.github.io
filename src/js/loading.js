/**
 * Created by 猫崽崽 on 25/2/2016.
 */

(function(window, document, $, undefined){

    var Loading = function(element, option){
        this.loadHtml = "";
        this.$load = null;
        this.$element = $(element);
        this.command = option.command;

        this._init();
    };

    Loading.prototype = {
        constructor: Loading,

        _init: function(){
            this.loadHtml='<div class="loading">' +
                '<div class="spinner">' +
                '<div class="rect1"></div>' +
                '<div class="rect2"></div>' +
                '<div class="rect3"></div>' +
                '<div class="rect4"></div>' +
                '<div class="rect5"></div>' +
                '</div>' +
                '</div>';
            if(!this.$element.find(".loading")[0]){
                this.$element.append(this.loadHtml);
            }
            this.$load = this.$element.find(".loading");

            this.execute();
        },

        execute: function(){
            switch (this.command){
                case "show":
                    this.show();
                    this.command = "hide";
                    break;
                case "hide":
                    this.hide();
                    this.command = "show";
                    break;
                default:
                    break;
            }
        },

        show: function(){
            this.$load.show();
        },

        hide: function(){
            this.$load.hide();
        }
    };

    $.fn.loading = function(option){
        return this.each(function(){
           var $this = $(this);
            var data = $this.data("loading");
            var param = { };
            if(typeof option == "string"){
                param = { command : option};
            }
            if(!data){
                data = new Loading(this, $.extend($.fn.loading.default, param));
            }else{
                data = $.extend($.fn.loading.default, data, param);
                data.execute();
            }
            $this.data("loading", data);
        });
    };

    $.fn.loading.default = {
        command: "show"
    }

})(window, document, jQuery);