const express = require('express');
const Path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/profile/:user', (req, res) => {
  res.send('Profile Page');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
