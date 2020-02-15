const { mongoose } = require('../database');

const NonLexicalWord = new mongoose.Schema({
    word: { type: String, required: true, lowercase: true, unique: true },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Non_Lexical_Word', NonLexicalWord);