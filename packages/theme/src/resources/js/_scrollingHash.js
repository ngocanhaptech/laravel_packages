function getParentByNodeName(parentNodeName, child) {                      
    var node = child;
    while (node != null) { 
        if (node && (node.nodeName == parentNodeName)) {  
            return node;
        }
        node = node.parentNode; 
    }
    return false;
}
function getChildren(n, skipMe){
    var r = [];
    for ( ; n; n = n.nextSibling ) 
    if ( n.nodeType == 1 && n != skipMe)
        r.push( n );        
    return r;
};

function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
}
var clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true)
        return 'touchstart';
    else
        return 'click';
})();

function scrollIt(destination) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
    var callback = arguments[3];
    var easings = {
        linear: function linear(t) {
        return t;
        },
        easeInQuad: function easeInQuad(t) {
        return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
        },
        easeInOutQuad: function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic: function easeInCubic(t) {
        return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
        },
        easeInOutQuart: function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        },
        easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
        },
        easeInOutQuint: function easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
        }
    };
    var start = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    
    var documentHeight = Math.max(
        document.body.scrollHeight, 
        document.body.offsetHeight, 
        document.documentElement.clientHeight, 
        document.documentElement.scrollHeight, 
        document.documentElement.offsetHeight
    );
    var windowHeight = window.innerHeight 
    || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
        callback();
        }
        return;
    }

    function scroll() {
        var now = 'now' in window.performance ? performance.now() : new Date().getTime();
        var time = Math.min(1, (now - startTime) / duration);
        var timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
            callback();
        }
        return;
        }
        requestAnimationFrame(scroll);
    }
    scroll();
}
function addMultipleListeners(element,events,handler,useCapture,args){
    if (!(events instanceof Array)){
       console.log('addMultipleListeners: '+
            'please supply an array of eventstrings '+
            '(like ["click","mouseover"])');
    }
    var handlerFn = function(e){
        e.preventDefault();
        handler.apply(this, args && args instanceof Array ? args : []);
    };
    for (var i=0;i<events.length;i+=1){
        element.addEventListener(events[i],handlerFn,useCapture);
    }
}

function handlerPageChange() {
    var self = this;
    var page = this.getAttribute('href');
    page = page.replace('#page-section_',''); 
    var scrollToPosition = document.querySelector('[section_name="'+page+'"]').offsetTop + (window.innerHeight / 6);
    scrollIt(scrollToPosition, 300, 'easeOutQuad', function () { 
        activeByHash(page);
        return null;
    });
}

var pageA = document.querySelectorAll('a[href*="#page-"]');
for(var i = pageA.length - 1; i>=0; i--) {
    pageA[i] &&  
    addMultipleListeners(
    pageA[i],
    ['touchstart','click'],
    handlerPageChange,
    false);
}

function activeByHash(hash) {
    var hash = hash || location.hash.substr(1);
    if(hash!==""){ 
        var pageA = document.querySelectorAll('a[href*="#page-"]');
        for(var i = pageA.length - 1; i>=0; i--) {
            var pageHash = pageA[i].getAttribute('href');
            var parentList = getParentByNodeName('LI', pageA[i]);
            if(parentList.classList && parentList.classList.contains('active')) {
                parentList.classList && parentList.classList.remove('active');
            }  
            if (pageHash.replace("#",'') == hash.replace("#",'')){
                parentList.classList && parentList.classList.add('active');
            }
        }
    }
}
function scrollListener(){
    if (document.querySelectorAll('a[href*="#page-"]').length > 0) {
        window.addEventListener('scroll',function () {
            var y= window.pageYOffset; 
            var sec = document.querySelectorAll('[section_name]');
            for(var i = 0; i <= sec.length - 1;i ++){
                var ey = sec[i].offsetTop;
                if(y>ey) {
                    var ehash = sec[i].getAttribute('section_name');				
                }												
            } 
            if (ehash) {
                activeByHash('#page-section_'+ ehash);
            }
        })
    }
}
scrollListener();  