const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {

  if (global.flags.style_brown.isEnabled()) {    
    res.render('index', {
      title: 'Welcome to Contoso Unlimited!',  stylesheet: 'assets/css/main_alternative.css', bannertext: global.env_name
    });
  }
  else {
    res.render('index', {
      title: 'Welcome to Contoso Unlimited!',  stylesheet: 'assets/css/main.css', bannertext: global.env_name
    });
  }

});

module.exports = router;
