var GDNIExp0 = GDNIExp0 || {};
GDNIExp0 = (function() {
    var initiated = false;

    function trackEvent(c, a, l) {
        dataLayer.push({
            'event': c,
            'eventAction': a,
            'eventLabel': l,
            'eventValue': null
        });
    }

    function getWidth() {
        var xWidth = null;
        if(window.screen !== null) {
            xWidth = window.screen.availWidth;
        }
        
        if(window.innerWidth !== null) {
            xWidth = window.innerWidth;
        }
        
        if(document.body !== null) {
            xWidth = document.body.clientWidth;
        }
        
        return xWidth;
    }

    function isPhone() {
        if (getWidth() <  768) {
            return true;
        }
        
        return false;
    }

    function init() {
        if (typeof jQuery != 'undefined') {
            if (!initiated) {
                initiated = true;

                $(document).ready(function() {
                    if (isPhone()) {
                        start();
                    }
                });
            }
        } else {
            window.setTimeout(init, 50);
        }
    }

    function start() {
        $(".icon-home-link").click(function() {
            trackEvent('layout', 'menu-superior', 'casa');
        });
    }

    return {
        init:init
    };
}());
GDNIExp0.init();