const express = require('express');
const cors = require('cors');
const demoRouter = require('./routes/demoRoutes');

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 8080;

app.use('', demoRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

