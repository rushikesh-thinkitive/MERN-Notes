const http = require('http');
const fs = require('fs');
const requests = require('requests');

const htmlData = fs.readFileSync('home.html','utf8');

const replaceVal = (tempVal,orgVal)=>{
      // console.log(tempVal)
      let temparature = tempVal.replace("{%city%}",orgVal.name);
      temparature = temparature.replace("{%temp%}",orgVal.main.temp+"&deg;C");
      temparature = temparature.replace("{%min_temp%}",orgVal.main.temp_min+"&deg;C");
      temparature = temparature.replace("{%max_temp%}",orgVal.main.temp_max+"&deg;C");
      // console.log(temparature)
      return temparature;
}

const server = http.createServer((req,res)=>{
    requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&lon={lon}&appid=9d26feae6912b48462121dc4f61cb771')
    .on('data', function (chunk) {
        const data = JSON.parse(chunk);
        const arrData = [data];
        console.log(arrData);
        const realData = arrData.map((val)=> replaceVal(htmlData,val)).join('')
        
        res.write(realData);
        // console.log("RealData:",realData);
      })
      .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
      });
})

server.listen(8000,'127.0.0.1');