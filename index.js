const express = require('express');
const app = express();
const L = require('./lib/logging/CustomLogger')('index.js');

app.get('/', (request, response) => {
    L.log('info', 'test info');
    response.send("<h1>Hello Cachu</h1>");
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    L.log('info', "Server is running");
    console.log(`Server is running on port ${PORT}`);
});
