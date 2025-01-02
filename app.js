const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  fs.readdir('./Task/', (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.log(files);
      res.render('index', { files: files });
    }
  });
});
app.post('/create', (req, res) => {
  fs.writeFile(
    `./Task/${req.body.title.split(' ').join('')}.txt`,
    req.body.description,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    },
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
