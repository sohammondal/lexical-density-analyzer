const { nonLexicalWord } = require('../services');

exports.getAll = async (req, res) => {
    try {
        const data = await nonLexicalWord.getAll();
        return res.status(200).json({
            data
        })
    } catch (error) {
        console.error('ERROR: ', error.message);
        return res.status(500).json('Internal Server Error')
    }
}

exports.insert = async (req, res) => {
    try {
        const word = await nonLexicalWord.insert(req.body.word);
        res.status(201).json({
            data: word
        })
    } catch (error) {
        console.error('ERROR: ', error.message);
        res.status(500).json('Internal Server Error')
    }
}