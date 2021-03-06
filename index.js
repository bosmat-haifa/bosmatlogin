const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "pages/404.html"));
 });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Local app listening on port ${PORT}!`));