import https from 'https';
import fs from 'fs-extra';
const hostname = "0.0.0.0";
const port = 80;
const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/dev.ziping.org/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/dev.ziping.org/privkey.pem')
  };
  
const server = https.createServer(options,(req, res) => {
  console.log(`\n${req.method} ${req.url}`);
  console.log(req.headers);

  req.on("data", function(chunk) {
    console.log("BODY: " + chunk);
  });

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("S-Ucw27VpxhEwuQPPeFNgB1Td6QQAVXZ09YpRF-B8zQ.-CNfPVbqkzKWoUiY1vGxk0yP_KjdahNYOHxEpp_LycM\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});