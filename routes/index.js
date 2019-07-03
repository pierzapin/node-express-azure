const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {

  if (flags.styleBrown.isEnabled()) {    
    res.render('index', {
      title: 'Welcome to Pants Unlimited!',  stylesheet: 'assets/css/main_alternative.css'
    });
  }
  else {
    res.render('index', {
      title: 'Welcome to Pants Unlimited!',  stylesheet: 'assets/css/main.css'
    });
  }

);

module.exports = router;
