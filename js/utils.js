var utils = (function () {
    var isStanderBrowser = "getComputedStyle" in window;
    function listToArray(likeArray) {
        try {
            return Array.prototype.slice.call(likeArray);
        } catch (e) {
            var ary = [];
            for (var i = 0; i < likeArray.length; i++) {
                ary[ary.length] = likeArray[i];
            }
            return ary;
        }
    }
    function jsonParse(jsonStr){
        return "JSON" in window ? JSON.parse(jsonStr) : eval("("+jsonStr+")");
    }
    function win(attr,val){
        if(typeof val !== "undefined"){
            document.documentElement[attr] = val;
            document.body[attr] = val;
        }
        return document.documentElement[attr] || document.body[attr];
    }
    function offset(ele){
        var l = null;
        var t = null;
        var par = ele.offsetParent;
        l += ele.offsetLeft;
        t += ele.offsetTop;
        while(par){
            if(window.navigator.userAgent.indexOf("MSIE 8") === -1){
                l += par.clientLeft;
                t += par.clientTop;
            }
            l += par.offsetLeft;
            t += par.offsetTop;
            par = par.offsetParent;
        }
        return {left: l, top: t};
    }
    function prevEleSibling(ele){
        if(isStanderBrowser){
            return ele.previousElementSibling;
        }else{
            var prev = ele.previousSibling;
            while(prev && prev.nodeType != 1){
                prev = prev.previousSibling;
            }
            return prev;
        }
    }
    function nextEleSibling(ele){
        if(isStanderBrowser){
            return ele.nextElementSibling;
        }else{
            var next = ele.nextSibling;
            while(next && next.nodeType != 1){
                next = next.nextSibling;
            }
            return next;
        }
    }
    function prevAll(ele) {
        var ary = [];
        var prev = prevEleSibling(ele);
        while (prev) {
            ary.push(prev);
            prev = prevEleSibling(prev);
        }
        return ary;
    }
    
    function nextAll(ele){
        var ary = [];
        var next = ele.nextSibling;
        while (next) {
            if (next.nodeType == 1) {
                ary.push(next);
            }
            next = next.nextSibling;
        }
        return ary;
    }
    
    function sibling(ele){
        var ary = [];
        var prev = prevEleSibling(ele);
        var next = nextEleSibling(ele);
        prev ? ary.push(prev) : void 0;
        next ? ary.push(next) : void 0;
        return ary;
    }

    function siblings(ele){
        return prevAll(ele).concat(nextAll(ele));
    }

    function index(ele){
        return prevAll(ele).length;
    }

    function children(ele, tagName) {
        var val = null;
        if (isStanderBrowser) {
            val = listToArray(ele.children);
        } else {
            var ary = [];
            var childs = ele.childNodes;
            for (var i = 0; i < childs.length; i++) {
                if (childs[i].nodeType == 1) {
                    ary.push(childs[i]);
                }
            }
            val = ary;
        }
        if (typeof tagName == 'string') {
            for (var i = 0; i < val.length; i++) {
                var cur = val[i];
                if (cur.nodeName != tagName.toUpperCase()) {
                    val.splice(i, 1);
                    i--;
                }
            }
        }
        return val;
    }

    function hasClass(ele,strClass){
        strClass = strClass.replace(/(^ +| +$)/g,"");
        var reg = new RegExp("(^| +)"+strClass+"( +|$)","g");
        console.log(reg);
        return reg.test(ele.className);
    }

    function addClass(ele,strClass){
        var strClassAry = strClass.replace(/(^ +| +$)/g,"").split(/ +/g);
        for(var i=0; i<strClassAry.length; i++){
            var curClass = strClassAry[i]
            if(!hasClass(ele,curClass)){
                ele.className += " "+curClass;
            }
        }
    }

    function removeClass(ele,strClass){
        var strClassAry = strClass.replace(/(^ +| +$)/g,"").split(/ +/g);
        for(var i=0; i<strClassAry.length; i++){
            var curClass = strClassAry[i];
            if(hasClass(ele,curClass)){
                var reg = new RegExp("(^| +)" + curClass + "( +|$)","g");
                ele.className = ele.className.replace(reg," ");
            }
        }
    }
    function getElementsByClass(strClass,context){
        context = context || document;
        var ary = []; //'c2 c3'
        var strClassAry = strClass.replace(/(^ +| +$)/g,"").split(/ +/); //["c2","c3"]
        var childs = context.getElementsByTagName("*");
        for(var i=0; i<childs.length; i++){
            var curChild = childs[i];
            var flag = true;
            for(var j=0; j<strClassAry.length; j++){
                var curClass = strClassAry[j];
                var reg = new RegExp("(^| +)"+curClass+"( +|$)","g");
                if(!reg.test(curChild.className)){
                    flag = false;
                    break;
                }
            }
            if(flag){
                ary.push(curChild);
            }
        }
        return ary;
    }

    function getCss(attr){
        var val =  null;
        if("getComputedStyle" in window){
            val = window.getComputedStyle(this,null)[attr];
        }else{
            if(attr == 'opacity'){
                val = this.currentStyle.filter;
                var fitlerReg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
                val = fitlerReg.test(val) ? fitlerReg.exec(val)[1]/100 : 1;
            }else{
                val = this.currentStyle[attr];
            }
        }
        var reg = /^-?\d+(\.\d+)?(pt|px|em|rem|deg)?$/;
        if(reg.test(val)){
            val = parseFloat(val);
        }
        return val;
    }


    function setCss(attr,val){
        if(attr == 'opacity'){
            this.style.opacity = val;
            this.style.filter = 'alpha(opacity='+val*100+")";
            return;
        }
        if(attr == 'float'){
            this.style.cssFloat = val;
            this.style.styleFloat = val;
            return;
        }
        var reg = /width|height|left|top|right|bottom|(margin|padding)(Left|Right|Top|Bottom)?/;
        if(reg.test(attr)){
            if(!isNaN(val)){
                val += "px";
            }
        }
        this.style[attr] = val;
    }

    function setGroupCss(obj){
            for(var key in obj){
                if(obj.hasOwnProperty(key)){
                    setCss.call(this,key,obj[key]);
                }
            }
    }

    function css(ele){
        var secondArg = arguments[1];
        var thirdArg = arguments[2];
        var args = listToArray(arguments).slice(1);
        if(typeof secondArg == 'string'){
            if(typeof thirdArg == 'undefined'){
                return getCss.apply(ele,args);
            }
            setCss.apply(ele,args);
            return;
        }
        secondArg = secondArg || [];
        if(secondArg.toString() == '[object Object]'){
            setGroupCss.apply(ele,args);
        }
    }
    return {
        getElementsByClass : getElementsByClass,
        removeClass : removeClass,
        addClass : addClass,
        hasClass : hasClass,
        children : children,
        index : index,
        siblings : siblings,
        sibling : sibling,
        prevAll : prevAll,
        prevEleSibling : prevEleSibling,
        listToArray : listToArray,
        jsonParse : jsonParse,
        win : win,
        offset : offset,
        css: css
    }
})();





/*
var utilsNew = {
    listToArray : function (likeArray){
        try{
            return Array.prototype.slice.call(likeArray);
        }catch(e){
            var ary = [];
            for(var i=0; i<likeArray.length; i++){
                ary[ary.length] = likeArray[i];
            }
            return ary;
        }
    },
    jsonParse : function (jsonStr){
        //this.listToArray(); //utils
        return "JSON" in window ? JSON.parse(jsonStr) : eval("("+jsonStr+")");
    },
    win : function (attr,val){
        if(typeof val !== "undefined"){
            document.documentElement[attr] = val;
            document.body[attr] = val;
        }
        return document.documentElement[attr] || document.body[attr];
    },
    offset : function (ele){
        var l = null;
        var t = null;
        var par = ele.offsetParent;
        l += ele.offsetLeft;
        t += ele.offsetTop;
        while(par){
            if(window.navigator.userAgent.indexOf("MSIE 8") === -1){
                l += par.clientLeft;
                t += par.clientTop;
            }
            l += par.offsetLeft;
            t += par.offsetTop;
            par = par.offsetParent;
        }
        return {left: l, top: t};
    },
    getCss : function (ele,attr){
        var val =  null;
        if("getComputedStyle" in window){
            val = window.getComputedStyle(ele,null)[attr];
        }else{
            if(attr == 'opacity'){
                val = ele.currentStyle.filter;
                var fitlerReg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
                val = fitlerReg.test(val) ? fitlerReg.exec(val)[1]/100 : 1;
            }else{
                val = ele.currentStyle[attr];
            }
        }
        var reg = /^-?\d+(\.\d+)?(pt|px|em|rem|deg)?$/;
        if(reg.test(val)){
            val = parseFloat(val);
        }
        return val;
    }
};
*/

