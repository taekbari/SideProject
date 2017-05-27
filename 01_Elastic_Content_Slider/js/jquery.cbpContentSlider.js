;(function($, window, undefined) {
  'use strict';

  var Modernizr = window.Modernizr;
  // 생성자 함수
  $.CBPContentSlider = function(options, element) {
    this.$el = $(element);
    this._init(options);
  };

  $.CBPContentSlider.defaults = {
    speed : 500,
    easing : 'ease-in-out',
    current : 0
  };

  $.CBPContentSlider.prototype = {
    _init : function (options) {
      // extend 어떤함수??
      this.options = $.extend(true, {}, $.CBPContentSlider.defaults, options);
      this.$items = this.$el.find('ul > li[id]').hide();
      this.$tabs = this.$el.find('nav a');
      var tabsCount = this.$tabs.length;
      // this.$tabs.css('width', 100 / tabsCount + '%');
      this.current = this.options.current;
      this.old = 0;
      this.isAnimating = false;
      this.support = Modernizr.csstransitions;
      var transEndEventNames = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'MozTransition' : 'transitionend',
        'OTransition' : 'oTransitionEnd',
        'msTransition' : 'MSTransitionEnd',
        'transition' : 'transitionend'
      };
      this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.cbpContentSlider';
      if (this.support) {
        this.$items.css('transition', 'left ' + this.options.speed + 'ms ' + this.options.easing);
      }
      this._updateTabs();
      this.$items.eq(this.current).show();
      this._initEvents();
    },
    _updateTabs : function () {
      this.$tabs.eq(this.old).removeClass('rc-active').end().eq(this.current).addClass('rc-active');
    },
    _initEvents : function () {
      var self = this;
      this.$tabs.on('click.cbpContentSlider', function(event) {
        var idx = $(self.$tabs).index(this);
        if (idx !== self.current && !self.isAnimating) {
          self.isAnimating = true;
          var direction = idx > self.current ? 'right' : 'left',
              $oldItem = self.$items.eq(self.current),
              $newItem = self.$items.eq(idx);

          self.old = self.current;
          self.current = idx;

          if (self.support) {
            $newItem.css('left', direction === 'right' ? '100%' : '-100%');
          }
          $newItem.show();

          var transitionendfn = function() {
            $oldItem.off(self.transEndEventName).hide();
            self.isAnimating = false;
          }

          if (self.support) {
            $oldItem.on(self.transEndEventName, transitionendfn);
          }
          else {
            transitionendfn.call();
          }

          if (self.support) {
            setTimeout(function () {
              $oldItem.css('left', direction === 'right' ? '-100%' : '100%');
              $newItem.css('left', '0%');
            }, 25);
          }
          self._updateTabs();
        }
        event.preventDefault();
      });
    },
    destroy : function () {
      if (this.support) {
        this.$items.css('transition', 'none');
      }
      this.$items.css('left', 0).show();
      this.$tabs.off('.cbpContentSlider').removeClass('rc-active');
    }
  };

  var logError = function (message) {
    if (window.console) {
      window.console.error(message);
    }
  };

  $.fn.cbpContentSlider = function (options) {
    if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function () {
        var instance = $.data(this, 'cbpContentSlider');
        if (!instance) {
          logError('cannot call methods on cbpContentSlider prior to initialization; ' + "attempted to call method '" + options + "'");
          return;
        }
        if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
          logError("no such method '" + options + "' for cbpContentSlider instance");
          return;
        }
        instance[options].apply(instance, args);
      });
    }
    else {
      this.each(function (){
        var instance = $.data(this, 'cbpContentSlider');
        if (instance) {
          instance._init();
        }
        else {
          instance = $.data(this, 'cbpContentSlider', new $.CBPContentSlider(options, this));
        }
      });
    }
    return this;
  };
})(jQuery, window);
