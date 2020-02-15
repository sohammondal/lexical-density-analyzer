const router = require('express').Router();
const { check } = require('express-validator');

module.exports = (controller, middleware) => {

    router.route('/non-lexical-word')
        .get(controller.nonLexicalWord.getAll)
        .post(
            /* **Protected Route** */
            // Auth Middleware goes here
            check('word')
                .not().isEmpty().withMessage('Did not find a word to add')
                .isString().withMessage('Word must be a string'),
            middleware.errorHandler,
            controller.nonLexicalWord.insert
        )
        .put() /* **Protected Route** */
        .delete() /* **Protected Route** */

    return router;
}