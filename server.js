const http = require('http');
const fs = require('fs');
const port = 4000;

const app = http.createServer((req,res) => {
    res.writeHead(200, {'Content-type':'text/html'})
    fs.readFile ('index.html', (error,data)=> {
        if(error){
            res.writeHead(400)
            res.write('Error : File Not found')
        }else{
            res.write(data)
        }
        res.end  
    })
});

app.listen(port, (error)=> {
    if(error){
        return 'Something ent wrong your server i\'ts not running '
    }
    console.log(`Your server i\'ts running in : http://localhost:${port}`)
})
