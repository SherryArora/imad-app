var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
     'article-one' : {
    title:'article-one i sherry ',
    heading:'article-one',
    date:'aug 13 2017',
    content:` 
           <p>
               this is conen one gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> 
           <p>
               this is conen gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> 
           <p>
               this is conen gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> `
},
     'article-two' : {
    title:'article-two i sherry ',
    heading:'article-two',
    date:'aug 14 2017',
    content:` 
           <p>
               this is conen two gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> 
           <p>
               this is conen gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> 
           <p>
               this is conen gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> `
},
     'article-three' : {
    title:'article-three i sherry ',
    heading:'article-three',
    date:'aug 14 2017',
    content:` 
           <p>
               this is conen three gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> 
           <p>
               this is conen gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> 
           <p>
               this is conen gfchgvhjvgv hjnfdgjhbjhbkuhbjb
               gfchgv jhb
               fdcjgvkbu
           </p> `
}

};

function createTemplate(data)
{
    
    var  title = data.title;
    var  heading = data.heading;
    var  date = data.date;
    var  content = data.content;
    
    
var htmltemplate = `
                    <html>
    <head>
        <title>  ${title}</title>
        <meta name="viewport" content="width-device-width , intial-scale=1 ">
    </head>
    <body>
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
             ${date}
        </div>
        <div>
           ${content}
        </div>
    </body>
    
    
    
</html>


`;
return  htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names = [];
/*app.get('/submit-name/:name', function (req, res) {
    var name = req.params.name;
    names.push(name);
    //json
  res.send(JSON.stringify(names));
});*/
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    names.push(name);
    //json
  res.send(JSON.stringify(names));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
               
        