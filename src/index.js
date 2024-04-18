import http from "http";
import {tasks} from "./data.js";

const server = http.createServer();


// server.on("request", (req, res ) =>{

//     console.log("Handle request",{
//         url : req.url,
//         method: req.method,
//         body : req.body,
//     });

//     const url = req.url;
//     if(url === "/redirect/gg"){
//         res.writeHead(301, {
//             location: "https://google.com/"
//         });

//         res.end();
//         return;
//     }

//     res.end("Hello NodeJS");
// })

server.on("request", async (req, res) => {
    const url = req.url;
    const method = req.method;

    switch(url){
        case "/tasks":
        if(method === "GET"){
            //xu ly danh sach tasks
           
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify(tasks));

        }

        break;

        default :
         res.writeHead(404);
         res.end();
    }
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});