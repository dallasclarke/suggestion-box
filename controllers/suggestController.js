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
    },
    updateSuggestion: (req, res) => {
        Suggestions.findById(req.params.id)
        .then((foundSug) => {
            const {title, suggestion} = req.body;

            if (!foundSug) {
                return res.status(400).send('Suggestion/Title not found!');
            }
            if (!req.body.title && !req.body.suggestion) {
                return res.status(400).send('No changes were made');
            }

            foundSug.title = title
            ? title
            : foundSug.title;

            foundSug.suggestion = suggestion
            ? suggestion
            : foundSug.suggestion;

            foundSug
            .save()
            .then((sugg) => res.status(200).json({message: 'Suggestion/title updated!', sugg}))
        })
        .catch((err) => res.status(500).json({message: 'Server error!'}))
    },
    deleteSuggestion: (req, res) => {
        try {
            Suggestions
                .findByIdAndDelete(req.params.id)
                .then((sug) => res.status(200).json({message: 'Suggestion deleted'}))
                .catch((err) => res.status(400).json({message: 'ID not found', err}))
        }
        catch(err) {
            return res.status(500).json({message: 'Server Error'})
        }
    }
};