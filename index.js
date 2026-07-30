//npm i express 
const port = 7465;
const express = require('express');
const app = express();
app.use(express.json());

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const main_api_R = require('./routers/main_api_R');
app.use('/api', main_api_R);

app.use('/hello', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public/html', 'welcome.html'));
});
app.use('/bye', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public/html/goodbye.html'));
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});
