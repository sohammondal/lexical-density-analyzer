const router = require('express').Router();
const { check } = require('express-validator');


module.exports = (controller, middleware) => {

    router.post('/complexity', [
        check('text')
            .not().isEmpty().withMessage('Input text cannot be empty. Please input text with upto 100 words or 1000 characters')
            .custom(value => { // Check if input exceeds 100 words / 1000 chars
                if (value) {
                    const words = value.split(' '); // convert to array of words
                    const chars = value.replace(/\s/g, ''); // Replace white spaces in text
                    if (words.length > 100 || chars.length > 1000) {
                        return Promise.reject('Limit exceeded. Text with up to 100 words or 1000 characters are valid input');
                    }
                }
                return true;
            })
    ], middleware.errorHandler, controller.densityAnalyzer.calculate)

    return router;

};