require('dotenv').config();
const fs = require('fs');
const https = require('https');
const app = require('./src/app');
 
const PORT = process.env.PORT || 443;
const HOST = process.env.HOST || '0.0.0.0';
 
const sslOptions = {
  key: fs.readFileSync("C:/nginx/conf/certs/wecorelite/wecorelite.wenxttech.com-key.pem"),
  cert: fs.readFileSync("C:/nginx/conf/certs/wecorelite/wecorelite.wenxttech.com-chain.pem"),
};
 
// https.createServer(sslOptions, app).listen(PORT, HOST, () => {
//   console.log(`HTTPS Server running at https://${HOST}:${PORT}`);
// });
 
 
 
const server = https.createServer(sslOptions, app);
 
 
server.timeout = 300000;
server.listen(PORT, HOST, () => {
  console.log(`HTTPS Server running at https://${HOST}:${PORT}`);
});
 
 