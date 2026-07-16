const port = 7465;
const express = require('express');
const app = express();
app.use(express.json());


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});
