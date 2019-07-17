const express = require('express');
const router = express.Router();
bannerhtml = '';

/* GET home page. */
router.get('/', (req, res) => {

  if (global.env_name.toLowerCase().indexOf('prod') !== 0){
    bannerhtml = '<section class="banner">'+global.env_name+'</section>'
  }

  if (global.flags.style_brown.isEnabled()) {    
    res.render('index', {
      title: 'Welcome to Contoso Unlimited!',  
      stylesheet: 'assets/css/main_alternative.css', 
      banner: bannerhtml
    });
  }
  else {
    res.render('index', {
      title: 'Welcome to Contoso Unlimited!',  
      stylesheet: 'assets/css/main.css', 
      banner: bannerhtml 
    });
  }

});

module.exports = router;
