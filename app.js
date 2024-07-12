const express = require('express')
const ejs = require('ejs')
const app = express()



app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('html_pages/home');
});

app.get('/about', (req, res) => {
  res.render('html_pages/about');
});

app.get('/guidelines', (req, res) => {
  res.render('html_pages/guide');
});


const port = 4090
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})