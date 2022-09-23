function viewport() {

    var vw;
    var vh;
    var modern = typeof window.innerWidth !== 'undefined';
    var old = typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0;

    // the more standards compliant browsers 
    // (mozilla/netscape/opera/IE7)
    // use window.innerWidth and window.innerHeight
     if (modern) {
        vw = window.innerWidth;
        vh = window.innerHeight;
    }

    // IE6 in standards compliant mode 
    // (i.e. with a valid doctype as the first line in the document)
    else if (old) {

        vw = document.documentElement.clientWidth;
        vh = document.documentElement.clientHeight;
    }

    // older versions of IE
    else {
        vw =
        document.getElementsByTagName('body')[0].clientWidth;
        vh =
        document.getElementsByTagName('body')[0].clientHeight;
    }

    return {
        width: vw,
        height: vh
    };

}
if (document.getElementById('gamesize'))
{
var smrtaile = document.getElementById('gamesize');
var baselargjeu = smrtaile.getAttribute('gamewidth');
var basehautjeu = smrtaile.getAttribute('gameheight');
smrtaile.innerHTML = "<style>#scaled-frame { width: "+baselargjeu+"px; height: "+basehautjeu+"px;}</style>";
function changertaille () {

nouvwidth= viewport().width;
var hautjeuetdesc = viewport().height;
var largjeuetdesc = (hautjeuetdesc/basehautjeu)*baselargjeu;
var largfullpage = largjeuetdesc;
var largeurmax= nouvwidth;
if (largjeuetdesc > largeurmax)
{
var hautjeuetdesc = (largeurmax/baselargjeu)*basehautjeu;
var largjeuetdesc = largeurmax;
var largfullpage = largeurmax;
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var numzoom = hautjeuetdesc/basehautjeu;
 if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {

document.getElementById("scaled-frame").style.zoom = numzoom;
} else {
document.getElementById("scaled-frame").style.webkitTransform = "scale("+numzoom+")";
document.getElementById("scaled-frame").style.MozTransform = "scale("+numzoom+")";
document.getElementById("scaled-frame").style.msTransform = "scale("+numzoom+")";
document.getElementById("scaled-frame").style.OTransform = "scale("+numzoom+")";
document.getElementById("scaled-frame").style.transform = "scale("+numzoom+")";
}
document.getElementById("preframe").style.width = largfullpage+"px";
}

window.onresize = function() {
changertaille ();
}
changertaille ();
}
