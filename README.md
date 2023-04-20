# nodejs
# 项目依赖对比
1. 浏览器打开handelexcel.html，打开浏览器控制台
2. 选择excel文件，输入筛选条件（如：软件包名），confirm -> 复制出打印：--filterArr Array数组 至项目文件a.html的list中
3. 替换aaa.js中wwwDir和fs.readFile读取的地址
4. 项目终端 `node aaa.js` 运行aaa.js文件
5. 浏览器打开 http://localhost:3000/folder , 打开浏览器控制台，line-740打印的数组为对比重合文件包名