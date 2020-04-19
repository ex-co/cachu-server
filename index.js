const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("<h1>Hello Cachu</h1>");
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
