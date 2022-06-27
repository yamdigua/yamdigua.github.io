/**
 *  1.获取所有的松鼠
 *  2. 创建一个展示松鼠的方法
 *  3. 创建一个定时生成松鼠的方法
 *  4. 创建一个点击(敲打)松鼠的方法
 *  5. 创建一个更新锤子的方法
 */


// 首先获取所有的松鼠

var mouses=$('img');
var score=0;
// 创建一个展示松鼠的方法
function show(){
    //随机生成松鼠索引
    var n= parseInt(Math.random()*16);
    // 拿到具体的松鼠
    var mouse=mouses.get(n);
    // 给松鼠添加一个展示的样式,并且隐藏它的 隐藏样式
    $(mouse).addClass('show').removeClass('hide');
    // 这里如果我们不去打松鼠,他也会自己钻回洞里
    function hide(){
        //添加隐藏class 移除显示class
         $(mouse).addClass('hide').romoveClass('show');
    }
    // 定时去调用隐藏的方法 ,2s后隐藏
    setTimeout(hide,2000);
}
// 创建一个定时生成松鼠的方法
function play(){
    show();
    show();
}
setInterval(play,2000);
// 给松鼠添加一个点击事件让他被打的时候消失,并且分数+1
$('img').on('click',function(){
    // this 指向的是被点击到的图片
    $(this).addClass('hide').removeClass('show');
    score++;
    $('#score').text('得分:'+score);
    $('audio').get(1).play();
})
// 当点击的时候修改锤子的样式
$('body').on('mousedown',function(){
    $('body').css('cursor','url(image/cursor-down.png),auto');
})
$('body').on('mouseup',function(){
    $('body').css('cursor','url(image/cursor.png),auto');
})
