const express = require('express');
const path = require('path');

const OpenTok = require('opentok');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
