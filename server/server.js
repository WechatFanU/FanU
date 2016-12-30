var express = require('express'),
    app     = express();

app
  .route('/invitations')
    .get(function(req, res){
      var responds = {
        special: [
          {name: "小紫", time: "今天中午", foodType: "火锅", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
          {name: "瑄瑄", time: "明天中午", foodType: "火锅", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
          {name: "叶子", time: "后天中午", foodType: "火锅", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"}
        ],
        list: [
          {name: "小紫", time: "今天中午 12:30", foodType: "日本料理", restaurant: null, mono: "中午有没有人要来一起吃饭啊一个人好孤单寂寞冷。", location: "中国传媒大学", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
          {name: "瑄瑄", time: "今天晚上", foodType: "川菜", restaurant: {name: "四川北京办事处食堂", preview: "https://o4x2uxl34.qnssl.com/IMG_3084.JPG-preview300"}, mono: "我就是想约个饭啊。我就是想约个饭啊。我就是想约个饭啊，我就是想约个饭啊。", location: "建国路", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
          {name: "叶子", time: "明天中午", foodType: "新疆菜", restaurant:  null, mono: " 有没有人像和人家去呢……如果没人的话呢……人家就只能自己一个人去了唔……", location: "中国传媒大学", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"}
        ]
      };
      res.json(responds);
    });
app.get('/invitations/:id', function(req, res) {
    var respond = {
      user: {
        name: "瑄瑄",
        avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"
      },
      mono: "我就是想约个饭啊，我就是想约个饭啊。我就是想约个饭啊，我就是想约个饭啊。我就是想约个饭啊，我就是想约个饭啊。",
      time: "1月1日中午 12:30",
      location: "蓝色港湾",
      restaurant: {
        name: "和乐日本料理"
      },
      foodType: "日本料理",
      maxSumOfPeople: "3 ~ 5 人",
      attendance: [
        {name: "张玥"},
        {name: "叶子"},
        {name: "孙鼎"},
        {name: "王思聪"},
        {name: "何天明"}
      ]
    };
    res.json(respond);
  });




app.listen(8080, function () {
  console.log('Dev Fake API Server is listening on port 8080!');
});