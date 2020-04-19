// neem express-module en steek functionaliteit in constante
const express = require('express');
const port = 5000;

// bibliotheek inladen om paden naar folder te maken
const path = require('path');

// constante aanmaken die als webserver zal dienen
const app = express();

// json inladen
const portfolio = require("./data/portfolio.json");

// Vertel aan webserver dat ik gebruik maak van view engine en dan ook van dewelke, nl. EJS
app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

// vertel aan webserver waar de publieke bestanden zitten
app.use(express.static('public'));

// webserver luister naar GET-commando van verschillende pagina's
app.get("/", function(request, response){
  response.render("home");
});

app.get("/galerij", function(request, response){

  response.render("galerij", {
    werken: portfolio.werken
  });
});

app.get('/portfolio/:werkid', function(req,res){
  res.render('detail', {
    werk: portfolio.werken[req.params.werkid]
  });
});

app.get("/contact", function(request, response){
  response.render("contact");
});

app.set('port', (process.env.PORT || 5000));
// server opstarten en beschikbaar maken via URL
app.listen(app.get('port'));
