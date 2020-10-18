const Suggestions = require('../models/Suggestions');

module.exports = {
    allSuggestions: (req, res) => {
        Suggestions.find()
        .then(sgn => res.status(200).json({confirmation: 'success', sgn}))
        .catch(err => res.status(500).json({confirmation: 'fail', err}))
    },
    getByName: (req, res) => {
        Suggestions.find({name: req.params.name})
        .then((val) => res.status(200).json({val})); 
    },
    createSuggestion: (req, res) => {
        const newSuggestion = new Suggestions();
        
        newSuggestion.title = req.body.title;
        newSuggestion.name = req.body.name;
        newSuggestion.suggestion = req.body.suggestion;
        newSuggestion.likes = req.body.likes;
        newSuggestion.anonymous = req.body.anonymous;
    
        newSuggestion
        .save()
        .then((val) => res.status(200).json({confirmation: 'success', val}));
    },
    getSingleSuggestion: (req, res) => {
        Suggestions.findById(req.params.id)
        .then((suggestion) => res.status(200).json({suggestion}))
        .catch((err) => res.status(500).json({confirmation: 'fail', err}))
    }
};