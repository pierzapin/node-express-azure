const express = require('express');
const router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {
  if (global.flags.style_brown.isEnabled()) {    
    res.render('contact', {
      title: 'Contact Us',  stylesheet: 'assets/css/main_alternative.css'
    });
  }
  else {
    res.render('contact', {
      title: 'Contact Us',  stylesheet: 'assets/css/main.css'
    });
  }
});

module.exports = router;