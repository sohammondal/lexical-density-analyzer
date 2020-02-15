const NonLexicalWord = require('../models/NonLexicalWord');

module.exports = {
    insert: (word) => {
        return new Promise(async (resolve, reject) => {
            try {
                const newWord = new NonLexicalWord({ word })
                await newWord.save();
                resolve(newWord);
            } catch (error) {
                reject(error);
            }
        })
    },
    getAll: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const words = await NonLexicalWord.find({}, 'word');
                resolve(words);
            } catch (error) {
                reject(error);
            }
        })
    }
}