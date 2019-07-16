const express = require('express');
const router = express.Router();

/* GET "who we are" page. */
router.get('/', (req, res) => {
  if (global.flags.style_brown.isEnabled()) {    
    res.render('who', {
      title: 'Who We Are!',  stylesheet: 'assets/css/main_alternative.css', bannertext: global.env_name
    });
  }
  else {
    res.render('who', {
      title: 'Who We Are!',  stylesheet: 'assets/css/main.css', bannertext: global.env_name
    });
  }
});

module.exports = router;