const http = require('http')

http.createServer(function (request, response) {

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  const res = {
    code: 200,
    data: {
      name: '李高峰',
      age: 26,
      sex: '男'
    }
  }
  response.end(JSON.stringify(res));

}).listen(9000)