const express = require('express'),
app = express(),
ejs = require('ejs'),
port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/profile', (req, res) => {
  let user = {
    name: 'Joe',
    img: 'http://imagenpng.com/wp-content/uploads/2015/08/los-10-mejores-personajes-de-caricaturas8.jpg',
  }
  res.render('profile', {user: user});
})

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, (err) => {
  if (err) {
    console.log("Something is wrong");
  } else {
    console.log(`Listening in port ${port}`)
  }
})