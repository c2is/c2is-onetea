/* Project: oneTea Mobile - Date: 20130419 - Author: C2iS.fr > DJO */

var mobileCheck = false; //variable globale

$(function() { //domReady

    window.scrollTo(0, 1);

    // ScrollTop onload (mobile) si il n'y a pas d'ancre
    if(/mobile/i.test(navigator.userAgent)){
        window.scrollTo(0, 1);

        //older OS versions (iOS < 5 & Android < 3)
        if (Modernizr.inlinesvg) {
            mobileCheck = true;
            window.addEventListener('push', function() {
                window.scrollTo(0, 1);
            })
        }
    }

    // Test log exe front.js
    consoleLog('Execution front.js : ok');

    //manage push links (Ratchet specific)
    ratchetPush();



});






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


// Gestion du console.log (evite le bug sur ie si la console n'est pas ouverte)
function consoleLog (data) {
    if(window.console && console.log )
        console.log(data);
}

//ratchetPush manager
function ratchetPush() {
    if ( mobileCheck == false ) {
        $('[data-transition]').attr('data-ignore', 'push');
        $('.fixed').css({'position':'relative'}).removeClass('fixed');
        $('.footerActif').removeClass('footerActif');
    }else{
        $('head').append('<link rel="stylesheet" href="../components/ratchet/lib/css/push.css">');
        $('body').append('<script src="../components/ratchet/lib/js/push.js"></script>');

        //si bottom bar fixed on pose une classe footerActif sur le content pour impacter le padding-bottom
        if ( $('footer.fixed').length || $('.content').hasClass('footerActif')) {
            $('.content').addClass('footerActif');
        }
    }
}





















