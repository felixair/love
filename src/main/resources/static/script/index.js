//--创建页面监听，等待微信端页面加载完毕 触发音频播放
document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay();
});
//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
document.addEventListener('touchstart', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
        audio.play();
    }
    audioAutoPlay();
});

/* global theaterJS */
var theater = theaterJS({ locale: 'en' })

theater
    .addActor('vader')
    .addScene('vader:好久不见<br/> 再次相遇在夏天<br/> 内心又起了波澜<br/> 三年前的见面<br/> 成为了今天的铺垫<br/> 过了三个月的时间<br/> 很庆幸没有厌烦我的缺点<br/> 每一次<br/> 听到你的声音<br/> 看到你的脸<br/> 大脑就停止了运转<br/> 只有你占据我的视线<br/> 我们<br/> 一起去影院<br/> 一起去餐馆<br/> 一起去ktv量贩<br/> 一起去海边<br/> 一起去超市 一起去母婴店<br/> 今后<br/> 牵着你的手<br/> 我们<br/> 一起看蓝天白云<br/>一起看浩瀚星空<br/> 一起看春夏秋冬<br/> 一起爬山<br/> 一起旅行<br/> 一起做你爱吃的肉肉<br/> 一起...<br/>')
    .addScene(function (done) {
        // do stuff
        done()
    })
    // .addScene(theater.replay.bind(theater))
