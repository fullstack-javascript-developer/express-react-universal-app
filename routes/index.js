const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/',appController.dashboard);
router.post('/api/add',catchErrors(appController.createContact));

/* Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});
*/

module.exports = router;
