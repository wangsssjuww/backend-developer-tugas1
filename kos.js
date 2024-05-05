const express = require('express');
const routerWrg = require('./route/warga')
const app = express();
const port = 5050;

app.use(express.json());
app.use(routerWrg)


app.listen(port, () => {
    console.log(`Server berjalan pada localhost:${port}`)
});