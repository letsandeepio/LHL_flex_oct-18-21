const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const PORT = 3000;

const app = express();

app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(
  cookieSession({
    name: 'session',
    keys: ['random keys orange', 'random keys apple']
  })
);

const user1 = {
  name: 'Tim Berners Lee',
  email: 'tim@cern.eu',
  password: bcrypt.hashSync('password1', salt)
};

const user2 = {
  name: 'Lady Ada Lovelace',
  email: 'ada@lovelace',
  password: bcrypt.hashSync('password2', salt)
};

console.log({user1})

const database = {
  'tim@cern.eu': user1,
  'ada@lovelace': user2
};


const protectRoutesMiddleWare = (req, res, next) => {
const { email } = req.session;
  console.log({email})
const currentUser = database[email];

if(!currentUser) {
  res.redirect('/')
} else {
  next()
}
}

// app.use(protectRoutesMiddleWare);

const authenticateUser = (email, password) => {
  let error;
  let user;

  const currentUser = database[email];


  // Old method
  // const isPasswordInValid = currentUser.password !== password;
  // New method using bcrypt
  //This will return true if password match
  // or else will return false if they do not

   const isPasswordValid =  bcrypt.compareSync(password, currentUser.password);



  if (!currentUser) {
    error = 'The user does not exist.';
  } else {
    if (!isPasswordValid) {
      error = 'The passwords do not match.';
    }
  } 
  if (!error) {
    return {
      error: null,
      user: currentUser
    };
  } else {
    return {
      error: error,
      user: null
    };
  }
};

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const {user, error} = authenticateUser(email, password);

  if(error) {
    res.send(error);
  } else {
    // res.cookie('email', email)
    req.session.email = email;
    res.redirect('/dashboard')
  }
});

app.get('/register', (req, res) => {
  res.render('register');
});


app.post('/register', (req, res) => {
  const { email, password, name } = req.body;

  // Create new user our in our database
  database[email] = {
    email,
    password: bcrypt.hashSync(password, salt),
    name
  };

  console.log(database[email])

  // res.cookie('email', email);
  req.session.email = email;
  res.redirect('/dashboard')
});

app.post('/logout', (req, res) => {
   res.clearCookie('session');
  // res.clearCookie('email');
  // req.session = null;
  // delete req.session.email;
  res.redirect('/')
});

app.get('/dashboard',protectRoutesMiddleWare, (req, res) => {
  // const {email} = req.session;
  // // const { email } = req.cookies;
  // if(email) {
  // res.render('dashboard');
  // } else {
  //   res.redirect('/login')
  // }
   res.render('dashboard');

});

app.get('/launch', protectRoutesMiddleWare, (req, res) => {
  // const { email } = req.session;
  //   // const { email } = req.cookies;
  // if(email) {
  // res.render('launch');
  // } else {
  //   res.redirect('/login')
  // }

    res.render('launch');
});

app.listen(PORT, () => {
  console.log(`Server is live. Listening on ${PORT}`);
});
