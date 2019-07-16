const config = require('./config.json');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const index = require('./routes/index');
const who = require('./routes/who');
const contact = require('./routes/contact');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port',config.port);

app.use('/', express.static('public'))
app.use('/', index);
app.use('/who', who);
app.use('/contact', contact);

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});

const Rox = require("rox-node");
global.flags = {
  style_brown: new Rox.Flag()
};
Rox.register('node_demo', flags);
Rox.setup(config.FlagKey)
