const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {

  res.render('index', {
    title: 'Welcome to Pants Unlimited!',  stylesheet: 'assets/css/main_alternative.css'
  }
  
  );
});

module.exports = router;
