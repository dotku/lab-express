const express = require('express')
const publicIp = require('public-ip');
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.send('Hello World!')
})



app.listen(port, () => {
  (async () => {
    console.log(await publicIp.v4());
    //=> '46.5.21.123'
  
    console.log(await publicIp.v6());
    //=> 'fe80::200:f8ff:fe21:67cf'
  })();
  console.log(`Example app listening at http://localhost:${port}`)
})