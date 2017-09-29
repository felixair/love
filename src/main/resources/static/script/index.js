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
    .addActor('vader', { speed: 0.1, accuracy: 0.6 })
    .addActor('luke')
    .addScene('vader:但是观点死否收到收人发布到扶伤观点.', 600)
    .addScene('luke:个人观点个?', 400)
    .addScene('vader:是否收到个.', 400)
    .addScene('luke:他个人发布的...', -3, '!!! ', 600, 'No! ', 600)
    .addScene('luke:That\'s 吊死扶伤 士大夫是!', 600)
    .addScene('luke:That\'s 士大夫!', 400)
    .addScene('vader:Search your feelings.', 1600)
    .addScene(theater.replay.bind(theater))
