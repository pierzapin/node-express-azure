const express = require('express');
const router = express.Router();

/* GET "who we are" page. */
router.get('/', (req, res) => {
  if (global.flags.style_brown.isEnabled()) {    
    res.render('who', {
      title: 'Who We Are!',  stylesheet: 'assets/css/main_alternative.css'
    });
  }
  else {
    res.render('who', {
      title: 'Who We Are!',  stylesheet: 'assets/css/main.css'
    });
  }
});

module.exports = router;