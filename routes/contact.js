const express = require('express');
const router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {

  if (global.env_name.toLowerCase().indexOf('prod') !== 0){
    bannerhtml = '<section class="banner">'+global.env_name+'</section>'
  }

  if (global.flags.style_brown.isEnabled()) {    
    res.render('contact', {
      title: 'Contact Us',  
      stylesheet: 'assets/css/main_alternative.css', 
      bannertext: bannerhtml
    });
  }
  else {
    res.render('contact', {
      title: 'Contact Us',  
      stylesheet: 'assets/css/main.css', 
      bannertext: bannerhtml
    });
  }
});

module.exports = router;