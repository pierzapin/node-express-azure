const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {

  if (global.flags.style_brown.isEnabled()) {    
    res.render('index', {
      title: 'Welcome to Contoso Unlimited!',  stylesheet: 'assets/css/main_alternative.css'
    });
  }
  else {
    res.render('index', {
      title: 'Welcome to Contoso Unlimited!',  stylesheet: 'assets/css/main.css'
    });
  }

});

module.exports = router;
