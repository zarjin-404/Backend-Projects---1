const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/profile/:username', (req, res) => {
  res.render('profile', { username: req.params.username });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
