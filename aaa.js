const fs = require("fs");
const http = require("http");
// 要读取的文件夹位置（绝对路径），这里要替换成自己的文件夹路径/node_modules
const wwwDir = "/Users/yyj/JuYi/ddjy-area/node_modules"
http.createServer((req, res) => {
  console.log('这是请求----------------------》：', req.url);
  const url = req.url
  if (url === "/folder") {
    // 本项目的地址
    fs.readFile('/Users/yyj/JuYi/nodejs' + "/a.html", (err, data) => {
      console.log('------------------------------------------------------------------------------------------------------------------------------------->', err);
      if (err) {
        return res.end("404 not found")
      }
      // 拼接读取文件夹内容转换为表格中的tr
      let str = "";
      fs.readdir(wwwDir, (err, files) => {
        if (err) {
          return res.end("can not read this dir")
        }
        console.log('', files);
        files.forEach((item) => {
          // console.log("item",item);
          str += `<li>${item}</li>`
        })
        // 将读取的index.html内容转换为字符串
        data = data.toString();
        console.log('--------------------------', data);
        // 将html字符串中的aaaa替换成str中的内容（好几个tr）
        data = data.replace("folderList", str)
        console.log(data);
        res.end(data)
      })
    })
  }
}).listen(3000, () => {
  console.log("running...");
})