module.exports = (controller, middleware) => {
    return {
        nonLexicalWordsRoute: require('./non-lexical-word.route')(controller, middleware)
    }
}