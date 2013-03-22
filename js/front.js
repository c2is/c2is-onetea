/* Project: NOMPROJET - Date: 20120806 - Author: C2iS.fr > TRI */

$(function() { //domReady
    //addClassGtIe(); // Test msie version and add class .gt-ieX x n // ne pas utiliser si utilisation de head.extended.js

    // ScrollTop onload (mobile) si il n'y a pas d'ancre
    if(/mobile/i.test(navigator.userAgent) && !location.hash){
        window.scrollTo(0, 1);
    }

// Test log exe front.js
    consoleLog('Execution front.js : ok');

// Test html5 form capacties andif do polyfills
    if(!Modernizr.input.placeholder){ //ie. placeholder
        polyfillPlaceholder();
    }

// Gestion du click sur le parent
    if( $('.linkParent').length > 0 ) {
        $('.linkParent').addLinkBlock();
    }

});




/**
 *
 * @functions :
 *   - getUserAgentElementName
 *   - consoleLog
 *   - polyfillPlaceholder
 *   - scrollTo
 * @proto :
 *   - hitTest
 *   - addLinkBlock
 *   - arrayShuffle
 *   - scrollstart / scrollstop
 *   - jQuery Extra Selectors
 *   - maxZIndex
 *   - equalizeHeights
 *
 * */
 
// gestion des diff�rentes valeurs css3 d�pendantes du userAgent (transition, transform, animation,...)
var transEndEventName = getUserAgentElementName('transEndEventName');
function getUserAgentElementName(sName){ 
    var userAgentElementNames = {
        transEndEventNames : {
            WebkitTransition : 'webkitTransitionEnd',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd',
            transition       : 'transitionend'
        }
    }
    var userAgentElementName = {
        transEndEventName : userAgentElementNames['transEndEventNames'][Modernizr.prefixed('transition') ]
    }
    return userAgentElementName[sName];
}


// Gestion du console.log (�vite le bug sur ie si la console n'est pas ouverte)
function consoleLog (data) {
    if(window.console && console.log )
        console.log(data);
}


function polyfillPlaceholder(){
    var active = document.activeElement;
    $('[placeholder]').focus(function () {
        if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
            $(this).val('').removeClass('placeholder');
        }
    }).blur(function () {
            if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                $(this).val($(this).attr('placeholder')).addClass('placeholder');
            }
        });
    $('[placeholder]').blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            if ($(this).val() == $(this).attr('placeholder')) {
                $(this).val('');
            }
        })
    });
    $(active).focus();
}


function scrollTo(sTarget,iSpeed){ // animated scroll
    var sTarget = sTarget != undefined ? sTarget : '#wrap',
        iSpeed = iSpeed != undefined ? iSpeed : 500;

    $("html, body").stop().animate({scrollTop:$(sTarget).offset().top},iSpeed);
}

(function($){

// Gestion du hitTest
    $.fn.hitTest = function(x, y){
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight(true);
        return x >= bounds.left
            && x <= bounds.right
            && y <= bounds.bottom
            && y >= bounds.top;
    };


// Gestion du click sur le parent
    $.fn.addLinkBlock = function(){
        $(this).each( function( ) {
            var oElem = $(this).find('.linkBlock'),
                sOnClick = oElem.attr('onclick') != 'return false;' ? oElem.attr('onclick') : false;

            $(this).css({cursor:'pointer'});
            if ((oElem.attr('onclick') && oElem.attr('onclick') != 'return false;') || !oElem.attr('onclick')) {
                $(this).click(function(e) {
                    var event = e;
                    if (!e)
                        event = window.event;
                    if (event && event.target != oElem[0]) {
                        var sHref = oElem.attr('href'),
                            sTarget = oElem.attr('target')?oElem.attr('target'):'_self';
                        //consoleLog(sHref);
                        switch (sTarget) {
                            case "_blank":
                                window.open(sHref, '');
                                break;
                            case "_parent":
                                parent.location.href = sHref;
                                break;
                            case "_top":
                                top.location.href = sHref;
                                break;
                            case "_self":
                                document.location.href = sHref;
                                break;
                            default:
                                sTarget.location.href = sHref;
                                break;
                        }
                    }
                });
            }
            if(sOnClick) {
                $(this).attr('onclick',sOnClick);
                oElem.removeAttr('onclick');
            }

        });
    }

    Array.prototype.arrayShuffle = function() {
        var newArray = $(this).slice();
        var len = newArray.length;
        var i = len;
        while (i--) {
            var p = parseInt(Math.random()*len,10);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t;
        }
        return newArray;
    }

})(jQuery);


/**
 * scrollstart/scrollstop
 * sources : http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
 */

(function($){
    var special = $.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);

    special.scrollstart = {
        setup: function() {

            var timer,
                handler =  function(evt) {
                    var _self = this,
                        _args = arguments;
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        $.event.handle.apply(_self, _args);
                    }
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);

                };
            $(this).bind('scroll', handler).data(uid1, handler);
        },
        teardown: function(){
            $(this).unbind( 'scroll', $(this).data(uid1) );
        }
    };

    special.scrollstop = {
        latency: 300,
        setup: function() {
            var timer,
                handler = function(evt) {
                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout( function(){
                        timer = null;
                        evt.type = 'scrollstop';
                        $.event.handle.apply(_self, _args);
                    }, special.scrollstop.latency);

                };
            $(this).bind('scroll', handler).data(uid2, handler);
        },
        teardown: function() {
            $(this).unbind( 'scroll', $(this).data(uid2) );
        }
    };

})(jQuery);


/*
 * jQuery Extra Selectors - (c) Keith Clark freely distributable under the terms of the MIT license.
 *
 * twitter.com/keithclarkcouk
 * www.keithclark.co.uk
 */

(function($) {
    function getNthIndex(cur, dir) {
        var t = cur, idx = 0;
        while (cur = cur[dir] ) {
            if (t.tagName == cur.tagName) {
                idx++;
            }
        }
        return idx;
    }

    function isNthOf(elm, pattern, dir) {
        var position = getNthIndex(elm, dir), loop;
        if (pattern == "odd" || pattern == "even") {
            loop = 2;
            position -= !(pattern == "odd");
        } else {
            var nth = pattern.indexOf("n");
            if (nth > -1) {
                loop = parseInt(pattern, 10) || parseInt(pattern.substring(0, nth) + "1", 10);
                position -= (parseInt(pattern.substring(nth + 1), 10) || 0) - 1;
            } else {
                loop = position + 1;
                position -= parseInt(pattern, 10) - 1;
            }
        }
        return (loop<0 ? position<=0 : position >= 0) && position % loop == 0
    }

    var pseudos = {
        "first-of-type": function(elm) {
            return getNthIndex(elm, "previousSibling") == 0;
        },
        "last-of-type": function(elm) {
            return getNthIndex(elm, "nextSibling") == 0;
        },
        "only-of-type": function(elm) {
            return pseudos["first-of-type"](elm) && pseudos["last-of-type"](elm);
        },
        "nth-of-type": function(elm, i, match) {
            return isNthOf(elm, match[3], "previousSibling");
        },
        "nth-last-of-type": function(elm, i, match) {
            return isNthOf(elm, match[3], "nextSibling");
        },
        "external": function(elm) {
            if(!elm.href) {return false;}
            return elm.hostname != location.hostname;
        },
        "mailto": function(elm) {
            return $(elm).is('[href^="mailto:"]');
        },
        "tel": function(elm) {
            return $(elm).is('[href^="tel:"]');
        },
        "secure": function(a) {
            return $(a).is('[href^="https:"]');
        },
        "notsecure": function(a) {
            return $(a).is('[href^="http:"]');
        },
        "selfanchor": function(a) {
            return $(a).is('[href^="#"]');
        }
    }
    $.extend($.expr[':'], pseudos);
}(jQuery));


/* maxZIndex */
$.maxZIndex = $.fn.maxZIndex = function(opt) {
    /// <summary>
    /// Returns the max zOrder in the document (no parameter)
    /// Sets max zOrder by passing a non-zero number
    /// which gets added to the highest zOrder.
    /// </summary>
    /// <param name="opt" type="object">
    /// inc: increment value,
    /// group: selector for zIndex elements to find max for
    /// </param>
    /// <returns type="jQuery" />
    var def = { inc: 10, group: "*" };
    $.extend(def, opt);
    var zmax = 0;
    $(def.group).each(function() {
        var cur = parseInt($(this).css('z-index'));
        zmax = cur > zmax ? cur : zmax;
    });
    if (!this.jquery)
        return zmax;

    return this.each(function() {
        zmax += def.inc;
        $(this).css("z-index", zmax);
    });
}

// equalize the heights of several elements
$.fn.equalizeHeights = function() {
    var maxHeight = this.map(function(i,e) {
        return $(e).height();
    }).get();

    return this.height( Math.max.apply(this, maxHeight) );
};




















