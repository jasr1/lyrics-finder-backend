const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const lyrics = require('./routes/lyrics');

app.use(cors());

app.use('/lyrics', lyrics);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})