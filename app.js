const express = require('express'),
app = express(),
ejs = require('ejs'),
port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  let user = {
    name: 'Joe',
    img: 'http://imagenpng.com/wp-content/uploads/2015/08/los-10-mejores-personajes-de-caricaturas8.jpg',
    friends: [
      'Andres',
      'Sexy',
      'Sal',
      'Aja',
    ]
  }
  res.render('index', {user: user});
})

app.listen(port, (err) => {
  if (err) {
    console.log("Something is wrong");
  } else {
    console.log(`Listening in port ${port}`)
  }
})