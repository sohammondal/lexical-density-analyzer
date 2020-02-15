/*
    Run this once to store the non-lexical words in MongoDB
*/

// Array of Non Lexical Words
const nonLexicalWords = require('./src/util/non-lexical-words');

// Non Lexial Word Model
const NonLexicalWord = require('./src/models/NonLexicalWord');

// Database Config
const { db } = require('./src/config');
const { connect, disconnect } = require('./src/database');

// Convert array of non-lex words to array of non-lex words array like -
// [ {word: 'to'}, {word: 'the'} ]
const nonLexicalWordsDoc = [];
nonLexicalWords.forEach(word => nonLexicalWordsDoc.push({ word }))

connect(db.url); // connect to database

// Perform insert operation
NonLexicalWord.create(nonLexicalWordsDoc, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Non Lexical Words inserted successfully')
    }
    disconnect(); // close db connection
})