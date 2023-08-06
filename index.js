const express = require('express');
const path = require('path'); 
const redditData = require('./data.json'); 
const port = 3000; 


const app = express();
app.use(express.static(path.join(__dirname, 'public')));  

app.set('view engine', 'ejs'); // Set up EJS view engine

app.get('/', (req, res) => {
    res.render("home.ejs"); 
}); 

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    let subredditData = redditData[subreddit]; 
    if (subredditData) {
    res.render('subreddit', { ...subredditData });
    }
    else  {
        res.render('404page.ejs', {subreddit}); 
    }
     
})

app.listen(port, () => {
    console.log(`Server is running at` +port);
});
