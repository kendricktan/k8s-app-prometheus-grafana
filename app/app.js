var http = require('http');

var callcount = 0;

var handleRequest = function (request, response) {
    if (request.url == '/metrics') {
        callcount += 1;

        let text = `
# HELP call_count Number of calls to this endpoint
# TYPE call_count gauge
call_count ${callcount}
        `

        response.writeHead(200)
        response.end(text)
    }

    else {
        response.writeHead(200);
        response.end(`Hello World from App ${process.env.APP_NAME || "<No Name!>"}`);
    }
};

var www = http.createServer(handleRequest);

www.listen(80);