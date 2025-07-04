const {getBusinessDetails, regenerateHeadlines} = require('../controllers/businessController');
const express = require('express');
const router = express.Router();

router.post('/business-data', getBusinessDetails);
router.post('/regenerate-headline', regenerateHeadlines)

module.exports = router;