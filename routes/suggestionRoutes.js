const express = require('express');
const router = express.Router();
const {allSuggestions, getByName, createSuggestion, getSingleSuggestion, updateSuggestion, deleteSuggestion} = require('../controllers/suggestController');

router.get('/all-suggestions', allSuggestions);
router.get('/byname-suggestion/:name', getByName);
router.get('/single-suggestion/:id', getSingleSuggestion);
router.post('/create-suggestion', createSuggestion);
router.put('/update-suggestion/:id', updateSuggestion);
router.delete('/delete-suggestion/:id', deleteSuggestion);


module.exports = router;