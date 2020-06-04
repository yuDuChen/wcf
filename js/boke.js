let HeaderTitle = $("#Header1_HeaderTitle").html();// 标题
let HeaderTitle2 = $("#blogTitle").find("h2").html();//子标题

let NavList = $("#navList").find("li a").clone();//博客导航栏
let Home = "https://www.cnblogs.com/yu-du-chen/";//首页
let Menu = "https://i.cnblogs.com/";//管理

let blogStats = $(".blogStats").find("span").clone();//随笔 文章 评论
let day = $("#main .forFlow .day").clone();//博客文章按照时间集合
let dayTitle = $("#main .forFlow .day .dayTitle").clone(); //时间集合标题
let postTitle = $("#main .forFlow .day .postTitle a").clone(); //文章标题
let postCon_a = $("#main .forFlow .day .postCon a").clone(); //文章内容链接
let postCon_img = $("#main .forFlow .day .postCon img").clone(); //文章内容图片
let postDesc = $("#main .forFlow .day .postDesc").clone(); //文章操作
let postDesc_a = $("#main .forFlow .day .postDesc a").clone(); //文章操作链接
let pager_a = "https://www.cnblogs.com/yu-du-chen/default.html?page=${number}"; //分页

let newsItem = $("#main #sideBar #sidebar_news #blog-news #profile_block a").clone();//昵称 园龄
let toptags = $("#main #sideBar #sideBarMain #leftcontentcontainer #sidebar_toptags li a").clone();//我的标签
let categories = $("#main #sideBar #sideBarMain #leftcontentcontainer #sidebar_categories li a").clone();//随笔档案
let topviewedposts = $("#main #sideBar #sideBarMain #leftcontentcontainer #sidebar_topviewedposts li a").clone();//阅读排行榜

let recentcomments = $("#main #sideBar #sideBarMain #leftcontentcontainer #sidebar_recentcomments .recent_comment_title").clone();//最新评论

var allowComments = true, cb_blogId = 507909, cb_blogApp = 'yu-du-chen', cb_blogUserGuid = '418314f8-6f63-4e3c-defa-08d6bc2e5c73';
var cb_entryId = 12109062, cb_entryCreatedDate = '2019-11-21 19:53', cb_postType = 1;

/*轮播*/
$(function(){
    $("#imgBar").slider({
        imgs: [
            "https://i.loli.net/2020/05/11/KJV2jFZekBpO8RS.png",//1918 670
            "https://i.loli.net/2020/05/11/9guZ4awcDNe7MHE.png",
            "https://i.loli.net/2020/05/11/QSj2F4koHwRnvWl.png"],
        scale: 50 / 17,///图片宽高比
        border: true,//是否显示分界线
        delay: 2200,
        x: 8,//横向格子数
        y: 3//纵向格子数
    });
});

/*动画*/
window.onload = function(){
    setTimeout(function () {
        $("#shade_animal_wrap").fadeTo("slow",0.0,function () {
            let v = $(this);
            setTimeout(function () {
                v.hide();
            }, 1000);
        });
    }, 1000); //
};
<!--离开页面改变title -->
var time;
var normar_title = document.title;
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        clearTimeout(time);
        document.title = '(ФωФ) にゃ～ 快回来喵！';
    } else {
        document.title = '^●ω＜^ニャ♪';
        time = setTimeout(function () {
            document.title = normar_title;
        }, 3000);
    }
});

new Vue({
    el: '.ydc_home',
    methods: {

    },
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ],
        count: [
            {
                message: '456789',
                img: 'https://i.loli.net/2020/06/02/X9g6EiwCjxo8arv.jpg'
            },
            {
                message: 'asdfgh',
                img: 'https://i.loli.net/2020/06/02/rU7FZLjfAv2BsXz.jpg'
            },
            {
                message: '114fgh',
                img: 'https://i.loli.net/2020/04/26/Twk4cuLfaMd8WQA.jpg'
            }
        ]
    }
});
$(".at-menu__item-link").on("click",function () {
    //window.location.href = $(this).find("img").attr("to");
})