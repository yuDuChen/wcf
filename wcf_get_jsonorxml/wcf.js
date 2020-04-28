$(document).ready(function () {
        $.ajax({
            type:'get',
            //url : 'https://cdn.jsdelivr.net/gh/yuDuChen/yuduchen@v1.55/live2d/assets/waifu-tips.json',
            //url : '${base}/util/waifu-tips.json',
            url : 'http://wcf.open.cnblogs.com/blog/u/yu-du-chen/posts/1/5',
            success: function (data) {
                debugger
                console.log(data)
            },
            error : function(e){
                debugger
                console.log(e)
            }
        });
    })
