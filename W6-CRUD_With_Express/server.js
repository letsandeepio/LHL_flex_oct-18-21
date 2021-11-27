const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = 3000;

const rocketsDB = {
  bfr: {
    wikipedia: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
    rocket_id: 'bfr',
    rocket_name: 'Big Falcon Rocket',
    rocket_type: 'rocket'
  },
  falcon1: {
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'rocket'
  },
  falconheavy: {
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
    rocket_id: 'falconheavy',
    rocket_name: 'Falcon Heavy',
    rocket_type: 'rocket'
  }
};

const app = express();

app.use(morgan('short'));

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.redirect("/rockets");
})

// READ
app.get("/rockets",(req, res)=>{
  
  const allRockets = Object.values(rocketsDB);
  const templateVars = {
    rocketsArr: allRockets,
  };
  res.render('all_rockets', templateVars);
})

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
    const userName = req.body['userName'];

    res.cookie('username', userName)
    console.log(userName);
    res.redirect('/rockets')
});

app.get('/rockets/new', (req, res) => {
  res.render('rocket_new');
});

const generateRandomID = () => {
  return Date.now(); // e.g. 1576996323453
}

// CREATE 
app.post('/rockets',(req, res)=>{
  const rocketName = req.body['rocketname'];
  const id = generateRandomID();
  console.log(id);
  rocketsDB[id] = {
    rocket_name: rocketName,
    rocket_id: id
  }
  res.redirect('/rockets')
})

// DELETE
app.post("/rockets/:id/delete",(req, res)=>{
  const rocketID = req.params.id;  
  delete rocketsDB[rocketID]
  res.redirect('/rockets');
})

// UPDATE - extra code not part of live demo

// Get form to update existing rocket
app.get('/rockets/:id/update', (req, res) => {
  const rocketID = req.params.id;

  const rocketObj = rocketsDB[rocketID];

  const templatevars = { rocketObj: rocketObj };

  res.render('rocket_show', templatevars);
});

//Post request to update rocket
app.post('/rockets/:id', (req, res) => {
  const rocketID = req.params.id;
  const rocket_name = req.body.rocket_name;
  delete rocketsDB[rocketID];
  rocketsDB[rocketID] = {
    rocket_name: rocket_name,
    rocket_id: rocketID
  };
  res.redirect('/rockets');
});

// READ
app.get('/rockets/:id', (req, res) => {
  const rocketID = req.params.id;
  const rocket = rocketsDB[rocketID];
  const userName = req.cookies['username'];
  console.log(userName);
  const templateVars = {
    rocket: rocket
  };
  res.render('rocket', templateVars);

});

app.listen(PORT, () => {
console.log(`Server is live. Listening on ${PORT}`);
});



