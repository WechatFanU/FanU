var _env = "dev"

var Data = {
    baseUrl: (_env === "dev" ? '127.0.0.1:3000' : ''),
    
    Invitation: {
        path: "invitation",
        index: function() {
            var returnVal = {
                special: [
                    {name: "小紫", time: "今天中午", foodType: "火锅", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
                    {name: "小紫", time: "明天中午", foodType: "火锅", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
                    {name: "小紫", time: "后天中午", foodType: "火锅", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"}
                ],
                list: [
                    {name: "小紫", time: "今天中午", foodType: "火锅", mono: "我就是想约饭你说咋办？", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
                    {name: "小紫", time: "今天中午", foodType: "火锅", mono: "我就是想约饭你说咋办？", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
                    {name: "小紫", time: "今天中午", foodType: "火锅", mono: "我就是想约饭你说咋办？", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
                    {name: "小紫", time: "今天中午", foodType: "火锅", mono: "我就是想约饭你说咋办？", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
                    {name: "小紫", time: "今天中午", foodType: "火锅", mono: "我就是想约饭你说咋办？", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"},
                    {name: "小紫", time: "今天中午", foodType: "火锅", mono: "我就是想约饭你说咋办？", avatar: "https://ruby-china-files.b0.upaiyun.com/user/avatar/9162.jpg!lg"}
                ]
            }
            return returnVal
        },
        create: function() {return {"status":200}},
        show: function(id) {return {"status":200}}
    }
}

module.exports.BackendData = Data