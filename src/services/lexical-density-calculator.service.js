module.exports = (input, nonLexicalWords) => {

    const calculateDensity = (lexicalWords, totalWords) => Number((lexicalWords / totalWords).toFixed(2))

    const sentences = input.split(". ");
    let totalWords = 0, totalLexicalWords = 0;
    const sentenceLD = [];

    sentences.forEach(sentence => {

        let words = sentence.split(' ');

        const wordCountBeforeFilter = words.length;

        totalWords += wordCountBeforeFilter;

        words = words.filter(word => !nonLexicalWords.includes(word.toLowerCase()));

        const wordCountAfterFilter = words.length;

        totalLexicalWords += wordCountAfterFilter;

        sentenceLD.push(calculateDensity(wordCountAfterFilter, wordCountBeforeFilter));


    })

    return {
        sentenceLD,
        overallLD: calculateDensity(totalLexicalWords, totalWords)
    };
}