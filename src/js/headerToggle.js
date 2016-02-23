/**
 * Created by 猫崽崽 on 23/2/2016.
 */

(function(window, document, $, undefined){

    var HeaderToggle = function(element){
        this.$element = $(element);

        this._init();
    };

    HeaderToggle.prototype = {
        constructor: HeaderToggle,

        _init: function(){
            $(document).on('mousewheel', $.proxy(this.mouseWheel, this));
        },

        mouseWheel: function(){
            if($(document).scrollTop() >= 10){
                this.$element.addClass('show');
            }else{
                this.$element.removeClass('show')
            }
        }
    };

    $.fn.headerToggle = function(option){
        return this.each(function(){
            var $this = $(this);
            var data = $this.data("headerToggle");
            if(!data){
                data = new HeaderToggle(this)
            }
            $this.data("headerToggle", data);
        })
    };

})(window, document, jQuery);
