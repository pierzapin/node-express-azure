const express = require('express');
const router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {
  if (global.flags.style_brown.isEnabled()) {    
    res.render('contact', {
      title: 'Contact Us',  stylesheet: 'assets/css/main_alternative.css', bannertext: global.env_name
    });
  }
  else {
    res.render('contact', {
      title: 'Contact Us',  stylesheet: 'assets/css/main.css', bannertext: global.env_name
    });
  }
});

module.exports = router;