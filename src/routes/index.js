module.exports = (controller, middleware) => {
    return {
        densityAnalyzerRoute: require('./density-analyzer.route')(controller, middleware),
        nonLexicalWordsRoute: require('./non-lexical-word.route')(controller, middleware)
    }
}