const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//cookie session
const sess = {
  secret: 'Super Secret secret', //saved in env
  cookie: {},
  resave: false,
  saveUninitalized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess));
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // built in middlware function

// turn on routes
// app.use(routes);
app.use(require('./controllers/'));
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
});