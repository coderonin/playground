let express = require('express');
let path = require('path');
let app = express();

app.use("/", express.static(path.join(__dirname + '/../../dist/')));
app.use("/", express.static(path.join(__dirname + '/../../node_modules')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../dist/index.html'));
});

app.listen(3200, () => {
    console.log('Example app listening on port 3200!');
});
