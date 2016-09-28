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


arrR.onclick = function () {
    var curF = flag1[step];
    animate(bannerInner3, {left: -curF * 1240}, 300);
    step++;
    utils.css(leftArr1, "display", "block");
    if (curF == 3){
        utils.css(rightArr1,"display","none");
        step = 2;
    }
    arrL.onclick = function () {
        curF--;
        animate(bannerInner3, {left: -curF * 1240}, 300);
        utils.css(rightArr1,"display","block");
        step--;
        if (curF == 0){
            utils.css(leftArr1,"display","none");
            arrL.onclick = false;
            step = 0;
        }
    };
};

