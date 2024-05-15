const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'type-or-upload-answer'
router.post('/type-or-upload-answer', function (req, res) {

    // Make a variable and give it the value from 'share-data'
    var typeOrUpload = req.session.data['share-data']
  
    // Check whether the variable matches a condition
    if (typeOrUpload == "By typing into an online form"){
      // Send user to webform
      res.redirect('/contracts')
    } else {
      // Send user to upload page
      res.redirect('/upload')
    }
  
  })

  // Run this code when a form is submitted to 'type-or-upload-answer'
router.post('/add-new-contract-answer', function (req, res) {

  // Make a variable and give it the value from 'share-data'
  var addNewContract = req.session.data['addContract']

  // Check whether the variable matches a condition
  if (addNewContract == "Yes"){
    // Send user to add contract page
    res.redirect('/add-contract')
  } else {
    // Send user to new starters page
    res.redirect('/new-starters')
  }

})


module.exports = router
