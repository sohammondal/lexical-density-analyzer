const lexicalDensityCalculator = require('../../services/lexical-density-calculator.service');
const nonLexicalWords = require('../../util/non-lexical-words');

const longText = 'First, you should choose a text that you think is interesting. Maybe you like reading about history, or maybe you find the news more interesting. Lots of students like to read fiction, like stories or novels.You must also choose a text that is right for your English level. If the reading is too difficult, you will be frustrated and you will not enjoy your reading practice.Finally, you should choose a text that is short.'


describe('Testing Lexical Density Calculator Service', () => {

    it('overall density should be equal to 0.67', () => {
        const result = lexicalDensityCalculator('Kim loves going to the cinema', nonLexicalWords);
        expect(result.overallLD).toBe(0.67);
    })


})