const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/',appController.dashboard);

/* Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});
*/

module.exports = router;
