import express from 'express'

const app = express();

// app.use(express.urlencoded({extended: false}))
app.use(express.json())

// add the line below
app.use(express.static('public'));

const greetings = {
    'english' : 'Hello'
}

// call the api like this - http://localhost:4009/api/greet?username=Mfundo
app.get('/api/greet', function(req, res){
    // console.log(req.query);
    const username = req.query.username;
    const language = req.query.language;

    if (!greetings[language]) {
        return res.json({
            error : 'invalid language supply'
        })
    }

    const greeting = greetings[language];
    res.json({
        message : `${greeting}, ${username}!`
    })
 });

 app.post('/app/geet', function (req, res){

    // add and entry to our greetings map
    const language = req.body.language;
    greetings(language) = req.body.greeting

    res.json({
        status : 'success',
        message : `Added a greeting for ${langauge}`
    });
 });
 
 app.get('/api/greet/:username', function(req, res){
    console.log(req.params);
    const username = req.params.username;
    res.json({
        message : `Hello, ${username}!`
    })
 });

 

 const PORT = 4009

 app.listen(PORT, function(){
    console.log(`app started on port ${PORT}`)
 });

