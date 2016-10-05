var banner = document.getElementById('leftRight');
var bannerInner = banner.getElementsByTagName('ul')[0];
var leftArr = document.getElementById('leftArrow');
var rightArr = document.getElementById('rightArrow');
var arrowBox = document.getElementById('arrowBox');
var flag = 0;
function autoMove() {
    flag = flag ? 0 : -1;
    animate(bannerInner, {left: 1240 * flag}, 300);
    utils.css(leftArr, "display", "block");
    utils.css(rightArr, "display", "none");
    if (flag == 0) {
        utils.css(rightArr, "display", "block");
        utils.css(leftArr, "display", "none");
    }
}
var timer = window.setInterval(autoMove,6000);

arrowBox.onmouseover =function () {
    window.clearInterval(timer);
};
arrowBox.onmouseout = function () {
    timer = window.setInterval(autoMove,6000);
};

leftArr.onclick = function () {
    if (flag == -1) {
        animate(bannerInner, {left: 0}, 300);
    }
    utils.css(leftArr,"display","none");
    utils.css(rightArr,"display","block");
};
rightArr.onclick = function () {
    flag = 0;
    autoMove();
};


var inp1 = document.getElementById('inp1'),
    inp2 = document.getElementById('inp2'),
    searchList = utils.getElementsByClass('search-list')[0],
    body = document.body,
    searchWords = utils.getElementsByClass('search-words')[0];

inp1.onclick = function () {
    utils.css(inp1,'border-color','#ff6700');
    utils.css(inp2,'border-color','#ff6700');
    utils.css(searchWords,'display','none');
    utils.css(searchList,'display','block');
    event.cancelBubble=true;
};
body.onclick =function () {
    utils.css(inp1,'border-color','#e0e0e0');
    utils.css(inp2,'border-color','#e0e0e0');
    utils.css(searchWords,'display','block');
    utils.css(searchList,'display','none');
};


var box = document.getElementById('box'),
    lis = box.getElementsByTagName('li'),
    tab = document.getElementById('tab'),
    uls = tab.getElementsByTagName('ul');
for (var i=0; i<lis.length; i++) {
    lis[i].index = i;
    lis[i].onmouseover = function () {
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";
            utils.css(uls[j],"display","none");
        }
        this.className = 'dpList';
        utils.css(uls[this.index],"display","block");
    }
}


var box1 = document.getElementById('box1'),
    lis1 = box1.getElementsByTagName('li'),
    tab1 = document.getElementById('tab1'),
    uls1 = tab1.getElementsByTagName('ul');
for (var i=0; i<lis1.length; i++) {
    lis1[i].index = i;
    lis1[i].onmouseover = function () {
        for (var j = 0; j < lis1.length; j++) {
            lis1[j].className = "";
            utils.css(uls1[j],"display","none");
        }
        this.className = 'dpList';
        utils.css(uls1[this.index],"display","block");
    }
}



var box2 = document.getElementById('box2'),
    lis2 = box2.getElementsByTagName('li'),
    tab2 = document.getElementById('tab2'),
    uls2 = tab2.getElementsByTagName('ul');
for (var i=0; i<lis2.length; i++) {
    lis2[i].index = i;
    lis2[i].onmouseover = function () {
        for (var j = 0; j < lis2.length; j++) {
            lis2[j].className = "";
            utils.css(uls2[j],"display","none");
        }
        this.className = 'dpList';
        utils.css(uls2[this.index],"display","block");
    }
}



var banner3 = document.getElementById('leftRight1');
var bannerInner3 = banner3.getElementsByTagName('ul')[0];
var leftArr1 = document.getElementById('leftArrow1');
var rightArr1 = document.getElementById('rightArrow1');
var arrL = document.getElementById('arrL');
var arrR = document.getElementById('arrR');
var flag1 = [1,2,3];
var step = 0;

(function aa() {
    arrR.onclick = function () {
        var curF = flag1[step];
        animate(bannerInner3, {left: -curF * 1240}, 300);
        step++;
        utils.css(leftArr1, "display", "block");
        if (curF == 3){
            arrR.onclick = null;
            utils.css(rightArr1,"display","none");
            step = 2;
        }
        arrL.onclick = function () {
            curF--;
            animate(bannerInner3, {left: -curF * 1240}, 300);
            utils.css(rightArr1,"display","block");
            step--;
            aa();
            if (curF == 0){
                utils.css(leftArr1,"display","none");
                arrL.onclick = false;
                step = 0;
            }
        };
    };
})();




var nrBanner = document.getElementById('nrBanner');
var nrL = document.getElementById('nrLeft');
var nrR = document.getElementById('nrRight');
var fbgBox = document.getElementById('fbgBox');
var liS = fbgBox.getElementsByTagName('li');
var tem = 0;

function focus() {
    var curTem = tem == liS.length? 0 : tem;
    for (var i=0; i<liS.length; i++){
        liS[i].className = i ==curTem? "fbg" : "";
    }
}

(function bindEventForFocus(){
    for(var i=0; i<liS.length; i++){
        liS[i].index = i;
        liS[i].onclick = function (){
            tem = this.index;
            animate(nrBanner,{left: -tem*296},300);
            focus();
        }
    }
})();

(function cl(){
    nrR.onclick = function () {
        if (tem == 3){
            tem-=1;
        }
        tem++;
        animate(nrBanner,{left:-tem*296},300);
        if(tem==3){
            nrR.onclick = null;
        }
        nrL.onclick =function () {
            if (tem == 0){
                tem++;
            }
            tem--;
            focus();
            animate(nrBanner,{left:-tem*296},300);
            cl();
            if (tem == 0){
                nrL.onclick = null;
            }
        };
        focus();
    };
})();





var nrBanner1 = document.getElementById('nrBanner1');
var nrL1 = document.getElementById('nrLeft1');
var nrR1 = document.getElementById('nrRight1');
var fbgBox1 = document.getElementById('fbgBox1');
var liS1 = fbgBox1.getElementsByTagName('li');
var tem1 = 0;

function focus1() {
    var curTem = tem1 == liS1.length? 0 : tem1;
    for (var i=0; i<liS1.length; i++){
        liS1[i].className = i ==curTem? "fbg" : "";
    }
}

(function bindEventForFocus(){
    for(var i=0; i<liS1.length; i++){
        liS1[i].index = i;
        liS1[i].onclick = function (){
            tem1 = this.index;
            animate(nrBanner1,{left: -tem1*296},300);
            focus1();
        }
    }
})();

(function cl(){
    nrR1.onclick = function () {
        if (tem1 == 3){
            tem1-=1;
        }
        tem1++;
        animate(nrBanner1,{left:-tem1*296},300);
        if(tem1==3){
            nrR1.onclick = null;
        }
        nrL1.onclick =function () {
            if (tem1 == 0){
                tem1++;
            }
            tem1--;
            focus1();
            animate(nrBanner1,{left:-tem1*296},300);
            cl();
            if (tem1 == 0){
                nrL1.onclick = null;
            }
        };
        focus1();
    };
})();





var nrBanner2 = document.getElementById('nrBanner2');
var nrL2 = document.getElementById('nrLeft2');
var nrR2 = document.getElementById('nrRight2');
var fbgBox2 = document.getElementById('fbgBox2');
var liS2 = fbgBox2.getElementsByTagName('li');
var tem2 = 0;

function focus2() {
    var curTem = tem2 == liS2.length? 0 : tem2;
    for (var i=0; i<liS2.length; i++){
        liS2[i].className = i ==curTem? "fbg" : "";
    }
}

(function bindEventForFocus(){
    for(var i=0; i<liS2.length; i++){
        liS2[i].index = i;
        liS2[i].onclick = function (){
            tem2 = this.index;
            animate(nrBanner2,{left: -tem2*296},300);
            focus2();
        }
    }
})();

(function cl(){
    nrR2.onclick = function () {
        if (tem2 == 3){
            tem2-=1;
        }
        tem2++;
        animate(nrBanner2,{left:-tem2*296},300);
        if(tem2==3){
            nrR2.onclick = null;
        }
        nrL2.onclick =function () {
            if (tem2 == 0){
                tem2++;
            }
            tem2--;
            focus2();
            animate(nrBanner2,{left:-tem2*296},300);
            cl();
            if (tem2 == 0){
                nrL2.onclick = null;
            }
        };
        focus2();
    };
})();



var nrBanner3 = document.getElementById('nrBanner3');
var nrL3 = document.getElementById('nrLeft3');
var nrR3 = document.getElementById('nrRight3');
var fbgBox3 = document.getElementById('fbgBox3');
var liS3 = fbgBox3.getElementsByTagName('li');
var tem3 = 0;

function focus3() {
    var curTem = tem3 == liS3.length? 0 : tem3;
    for (var i=0; i<liS3.length; i++){
        liS3[i].className = i ==curTem? "fbg" : "";
    }
}

(function bindEventForFocus(){
    for(var i=0; i<liS.length; i++){
        liS3[i].index = i;
        liS3[i].onclick = function (){
            tem3 = this.index;
            animate(nrBanner3,{left: -tem3*296},300);
            focus3();
        }
    }
})();

(function cl(){
    nrR3.onclick = function () {
        if (tem3 == 3){
            tem3-=1;
        }
        tem3++;
        animate(nrBanner3,{left:-tem3*296},300);
        if(tem3==3){
            nrR3.onclick = null;
        }
        nrL3.onclick =function () {
            if (tem3 == 0){
                tem3++;
            }
            tem3--;
            focus3();
            animate(nrBanner3,{left:-tem3*296},300);
            cl();
            if (tem3 == 0){
                nrL3.onclick = null;
            }
        };
        focus3();
    };
})();


