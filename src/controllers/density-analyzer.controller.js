const { lexicalDensityCalculator, nonLexicalWord } = require('../services');

exports.calculate = async (req, res) => {

    /* TO-DO - Write a seperate utility method */
    // Convert Array of NonLexWords Object to array of words
    const nonLexicalWordsDoc = await nonLexicalWord.getAll();
    const nonLexicalWords = [];
    nonLexicalWordsDoc.forEach(({ word }) => {
        nonLexicalWords.push(word);
    });


    let data = lexicalDensityCalculator(req.body.text, nonLexicalWords);

    if (req.query.mode === 'verbose') {
        data = {
            sentence_ld: data.sentenceLD,
            overall_ld: data.overallLD
        }
    } else {
        data = {
            overall_ld: data.overallLD
        }
    }

    return res.status(200).json({ data });
}