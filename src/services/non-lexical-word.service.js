const NonLexicalWord = require('../models/NonLexicalWord');

module.exports = {
    insert: (word) => {
        return new Promise(async (resolve, reject) => {
            try {

                const data = await NonLexicalWord.find({ word }); // check if word already exists in db
                if (data.length > 0) {
                    reject({
                        status: 409,
                        msg: `Duplicate key error. '${word}' already exists in database`
                    })
                }

                // Attempt to add the new word
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