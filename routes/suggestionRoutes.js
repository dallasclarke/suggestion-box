const express = require('express');
const router = express.Router();
const Suggestions = require('../models/Suggestions');
const {allSuggestions, getByName, createSuggestion, getSingleSuggestion} = require('../controllers/suggestController');

router.get('/all-suggestions', allSuggestions);
router.get('/byname-suggestion/:name', getByName);
router.get('/single-suggestion/:id', getSingleSuggestion);
router.post('/create-suggestion', createSuggestion);



module.exports = router;